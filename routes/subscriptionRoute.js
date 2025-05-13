import express from "express";
import {
  createSubscription,
  getAllSubscriptions,
  deleteSubscription,
} from "../controllers/subscriptionController.js";

const router = express.Router();

router.post("/", createSubscription);
router.get("/", getAllSubscriptions);
router.delete("/:id", deleteSubscription); // სურვილისამებრ

export default router;
