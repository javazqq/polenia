import pool from "../db.js";
import asyncHandler from "../middleware/asyncHandler.js";

// @desc    Fetch all promos
// @route   GET /api/promos
// @access  Public
const getPromos = asyncHandler(async (req, res) => {
    const result = await pool.query("SELECT * FROM promos");
    res.json(result.rows);
});

// @desc    Fetch single promo
// @route   GET /api/promos/:id
// @access  Public
const getPromoById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM promos WHERE id = $1", [
      id,
    ]);
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: "Promo not found" });
    }
    res.json(result.rows[0]);
});

export { getPromos, getPromoById };