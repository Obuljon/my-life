import {  Router  } from "express"
import HomePage from "../controller/page.controller.js"
const router = new Router()

router.get("/",HomePage.homePage );
router.get("/about",HomePage.about);
router.get("/search",HomePage.search);
router.get("/recommendation",HomePage.recommendation);
router.get("/video", HomePage.video)
router.get("/conversations", HomePage.conversations)

export default router





