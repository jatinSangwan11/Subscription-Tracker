//creating and tracking the subscriptions
import { Subscription } from "../models/subscription.model.js"

export const createSubscription = async (req, res, next) => {
    try {
        const subscriptionData = {
            ...req.body,
            user: req.user._id // assuming req.user is populated with the authenticated user's data
        }
        const subscription = await Subscription.create(subscriptionData);
         
        if(!subscription) {
            return res.status(400).json({
                success: false,
                message: "Failed to create subscription"
            })
        }
        res.status(201).json({
          success: true,
          message: "Subscription created successfully",
          data: subscription
        })
    } catch (error){
        next(error)
    }
}

export const getAllSubscriptions = async (req, res, next) => {
    try {
        console.log(req.params.id)
        console.log("this is the req.user._id", req.user._id);
        if(req.params.id !== req.user._id.toString()) {  // here req.params.id is string and req.user._id is an ObjectId so use toString() to compare
            return res.status(403).json({
                success: false,
                message: "You are not authorized to view these subscriptions"
            });
        }
        const subscriptions = await Subscription.find({ user: req.user._id });
        res.status(200).json({
            success: true,
            data: subscriptions
        });
    } catch (error) {
        next(error);
    }
};
