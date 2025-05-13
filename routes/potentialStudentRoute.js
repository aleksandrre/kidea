// routes/authRoutes.js
import express from "express";

import {
  addPotentialStudent,
  deleteAllPotentialStudents,
  deletePotentialStudent,
  getAllPotentialStudents,
} from "../controllers/potentialStudentController.js";

const router = express.Router();
// potentialstudents routes
// getAllPotentialStudents - აბრუნებს ყველა პოტენციურ სტუდენტს
// savePotentialStudent - პოტენციური სტუდენტის რეგისტრაცია (https://techwizards.school.ge -დან)
// deletePotentialStudent - პოტენციური სტუდენტის წაშლა
// deleteAllPotentialStudents - ყველა პოტენციური სტუდენტის წაშლა
router.get(
  "/",

  getAllPotentialStudents
);
router.post("/register", addPotentialStudent);

//გასატესტია
router.delete(
  "/:potentialStudentId/deletePotentialStudent",
  deletePotentialStudent
);

//გასატესტია
router.delete(
  "/deleteAll",

  deleteAllPotentialStudents
); // Define the new DELETE route

export default router;
