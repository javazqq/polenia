import express from "express";
import pool from "../db.js";
import asyncHandler from "../middleware/asyncHandler.js";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.json(result.rows[0]);
  })
);

export default router;
