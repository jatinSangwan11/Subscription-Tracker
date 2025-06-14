import aj from "../config/arcjet.js"


const arcjetMiddleware = async (req, res, next) => {
    try {
        const decision = await aj(req, {requested: 1});

        if(decision.isDenied) {
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({ error: "Too many requests. Please try again later." });
            }
            if (decision.reason.isBot()) {
                return res.status(403).json({ error: "Access denied: Bot detected." });
            }
            return res.status(403).json({ error: "Access denied." });
        }
        next();
    } catch (error) {
        console.error("Arcjet Middleware Error:", error);
        next(error);
    }
}


export default arcjetMiddleware;