import express from 'express'
import {unsplash} from '../config/unsplashConfig.js'
const router = express.Router()

router.get("/", async (req,res) => {
    const request = await unsplash.photos.getRandom({
        query: 'dog'
    })
    return res.status(200).json({urlImg: request.response.urls.small_s3})
})

export default router