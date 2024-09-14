import express from 'express'
import {unsplash} from '../config/unsplashConfig.js'
const router = express.Router()

router.get("/", (req,res) => {
    return res.status(200).send("hellow word")
})

router.get("/img", async (req,res) => {
    const request = await unsplash.photos.getRandom({
        query: 'dog'
    })
    return res.status(200).json({urlImg: request.response.urls.raw})
})

export default router