const express = require("express");
const {
  getQuizzes,
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuizes,
  quizPhotoUpload,
  quizResults,
} = require("../controllers/quizzes");

const advancedResults = require("../middleware/advancedResults");

const { protect, authorize } = require("../middleware/auth");

const Quiz = require("../models/Quiz.js");

const router = express.Router();

router
  .route("/")
  .get(advancedResults(Quiz), getQuizzes)
  .post(protect, authorize("user", "admin"), createQuiz);

router
  .route("/:id")
  .get(getQuiz)
  .put(protect, authorize("user", "admin"), updateQuiz)
  .delete(protect, authorize("user", "admin"), deleteQuizes);

router.route("/:id/photo").put(protect, quizPhotoUpload);

router.route("/:id/results").put(quizResults);

module.exports = router;
