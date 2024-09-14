import express from 'express'
import {unsplash} from '../config/unsplashConfig.js'
const router = express.Router()

router.get("/", async (req,res) => {
    const request = await unsplash.search.getPhotos({
        query: 'dog',
        page: 1,
        perPage: 10
    })
    const randomNumber = Math.floor(Math.random() * 1E1)
    const randomImage = request.response.results[randomNumber]
    const UrlImage = randomImage.urls.raw
    return res.status(200).json({UrlImage})
})

export default router