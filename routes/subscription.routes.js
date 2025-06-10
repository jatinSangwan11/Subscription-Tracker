import { Router } from "express";

const subscriptionRouter = Router()

subscriptionRouter.get('/', (req, res) => {
    res.json({message: "get all subscriptions"})
})

subscriptionRouter.get('/:id', (req, res) => {
    res.json({message: "GET subscription details from id"})
})

subscriptionRouter.post('/', (req, res) => {
    res.json({message: "create subscription"})
})

subscriptionRouter.put('/:id', (req, res) => {
    res.json({message: "update subscriptions"})
})

subscriptionRouter.delete('/:id', (req, res) => {
    res.json({message: "delete subscription"})
})

subscriptionRouter.get('/:id', (req, res) => {
    res.json({message: "get all subscriptions for a particular user"})
})

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.json({message: "cancel user subscription"})
})

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.json({message: "get all upcoming subscriptions"})
})

export default subscriptionRouter;