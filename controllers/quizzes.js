const path = require("path");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Quiz = require("../models/Quiz");

// @desc get all quizes
// @route GET /api/v1/quizzes
// @access Public
exports.getQuizzes = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc get single quizes
// @route GET /api/v1/quizzes:id
// @access Public
exports.getQuiz = asyncHandler(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);

  if (!quiz) {
    return next(
      new ErrorResponse(`Quiz not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: quiz });
});

// @desc create quiz
// @route POST /api/v1/quizzes
// @access Private
exports.createQuiz = asyncHandler(async (req, res, next) => {
  //Add user to req.body
  req.body.user = req.user.id;
  const quiz = await Quiz.create(req.body);
  res.status(201).json({ success: true, data: quiz });
});

// @desc Update Quiz
// @route PUT /api/v1/quizzes:id
// @access Private
exports.updateQuiz = asyncHandler(async (req, res, next) => {
  let quiz = await Quiz.findById(req.params.id);
  if (!quiz) {
    return next(
      new ErrorResponse(`Quiz not found with id of ${req.params.id}`, 404)
    );
  }

  //Make sure user is quiz owner or admin
  if (quiz.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorised to update this quiz`,
        404
      )
    );
  }

  quiz = await Quiz.findOneAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: quiz });
});

// @desc Delete Quiz
// @route DELETE /api/v1/quizzes:id
// @access Private
exports.deleteQuizes = asyncHandler(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) {
    return next(
      new ErrorResponse(`Quiz not found with id of ${req.params.id}`, 404)
    );
  }

  //Make sure user is quiz owner or admin
  if (quiz.user.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(
        `User ${req.params.id} is not authorised to update this quiz`,
        404
      )
    );
  }

  quiz.remove();

  res.status(200).json({ success: true, data: {} });
});

// @desc Upload photo
// @route PUT /api/v1/quizzes:id/photo
// @access Private
exports.quizPhotoUpload = asyncHandler(async (req, res, next) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz) {
    return next(
      new ErrorResponse(`Quiz not found with id of ${req.params.id}`, 404)
    );
  }
  if (!req.files) {
    return next(new ErrorResponse("Please upload a file", 400));
  }

  const file = req.files.file;

  //Make sure the upload is a ohoto
  if (!file.mimetype.startsWith("image")) {
    return new ErrorResponse("Please upload an image", 400);
  }

  //Check file size
  if (file.size > process.env.MAX_FILE_UPLOAD) {
    return new ErrorResponse(
      `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`,
      400
    );
  }

  // Create custom filename
  file.name = `photo_${quiz._id}${path.parse(file.name).ext}`;

  file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse("Problem with file upload", 500));
    }

    await Quiz.findByIdAndUpdate(req.params.id, { image: file.name });

    res.status(200).json({ success: true, data: file.name });
  });
});

// @desc Update results
// @route PUT /api/v1/quizzes:id/results
// @access Public
exports.quizResults = asyncHandler(async (req, res, next) => {
  let quiz = await Quiz.findById(req.params.id);
  if (!quiz) {
    return next(
      new ErrorResponse(`Quiz not found with id of ${req.params.id}`, 404)
    );
  }

  const preResult = quiz.totalScore;
  const newResult = parseInt(req.body.result);

  quiz.totalScore = preResult + newResult;

  quiz.timesPlayed = quiz.timesPlayed + 1;

  quiz.averageScore = quiz.totalScore / quiz.timesPlayed;

  try {
    await this.model("Quiz").findByIdAndUpdate(quizId, {
      averageScore: totalScore / timesPlayed,
    });
  } catch (err) {
    console.error(err);
  }

  quiz.save();

  res.status(200).json({ success: true, data: quiz });
});
