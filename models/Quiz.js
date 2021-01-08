const mongoose = require("mongoose");
const slugify = require("slugify");

const AnswerSchema = new mongoose.Schema({
  answers: {
    answer: {
      answerText: {
        type: String,
        required: [true, "Please add answer option"],
      },
      isCorrect: {
        type: Boolean,
        required: [true, "Is this the correct answer"],
      },
    },
  },
});

const QuestionSchema = new mongoose.Schema({
  questions: {
    type: Array,
    required: [true, "Please add at least one question"],
    question: {
      type: Array,
      required: [true, "Please add a question"],
      questionText: {
        type: String,
        required: [true, "Please add question text"],
      },
      image: {
        type: String,
      },
      answers: {
        type: AnswerSchema,
        default: undefined,
      },
    },
  },
});

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add a title"],
    unique: true,
    trim: true,
    maxlength: 50,
  },
  slug: String,
  category: {
    type: String,
    required: [true, "Please add a category"],
  },
  totalScore: {
    type: Number,
    min: [0],

    default: 0,
  },
  averageScore: {
    type: Number,
    min: [0],
    max: [100],
    default: 0,
  },
  timesPlayed: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "no-photo.jpg",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  questions: {
    type: QuestionSchema,
    default: undefined,
  },
});

//Create bootcamp slug from the name
QuizSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

// QuizSchema.pre("findOneAndUpdate", function (next) {
//   if (!this.isModified("title")) {
//     next();
//   }
//   const newSlug = slugify(this._update.title, { lower: true });
//   this.set({ slug: newSlug });
//   next();
// });

// // Calculate average results
// QuizSchema.statics.getAverageScore = async function (quizId) {
//   let totalScore = this.totalScore;
//   let timesPlayed = this.timesPlayed;

//   try {
//     await this.model("Quiz").findByIdAndUpdate(quizId, {
//       averageScore: totalScore / timesPlayed,
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

module.exports = mongoose.model("Quiz", QuizSchema);
