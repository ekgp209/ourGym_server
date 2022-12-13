const mongoose = require("mongoose");

const { Schema } = mongoose;
/**
 * 작성자, 제목, 내용, 생성일
 */
const { Types: ObjectId } = Schema;
const boardSchema = new Schema({
  writer: {
    type: ObjectId,
    required: true,
    ref: "User", //writer는 User것을 참조하여 사용하겠다. (User Schema의 아이디)
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Board", boardSchema);

//https://devlog-wjdrbs96.tistory.com/224 설명 잘되어있음
