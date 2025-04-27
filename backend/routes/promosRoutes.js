import express from "express";
import { getPromos, getPromoById } from "../controllers/promosController.js";

const router = express.Router();

router.route("/").get(getPromos);
router.route("/:id").get(getPromoById);

export default router;
