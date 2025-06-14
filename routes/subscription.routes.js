import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, getAllSubscriptions } from "../controllers/subscription.controller.js";


const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {
    res.json({message: "get all subscriptions"})
})

subscriptionRouter.get('/:id', (req, res) => {
    res.json({message: "get subscription by id"})
})

subscriptionRouter.post('/', authorize, createSubscription)

subscriptionRouter.put('/:id', (req, res) => {
    res.json({message: "update subscriptions"})
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.json({message: "delete subscription"})
})

subscriptionRouter.get('/user/:id', authorize, getAllSubscriptions)

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.json({message: "cancel user subscription"})
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.json({message: "get all upcoming subscriptions"})
})

export default subscriptionRouter;