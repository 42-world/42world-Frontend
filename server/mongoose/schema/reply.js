const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// 대댓글
const Reply = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  comment: { type: Schema.Types.ObjectId, ref: "Comment" },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, required: true },

  // 동적으로 변동될 수 있는 데이터
  thumbupCount: { type: Number, default: 0 },
  deleteTime: {type: Number, default: 0},

  // (옵션): 사용자가 게시글에 추가할 수 있는 데이터
  replyImgAddress: { type: String },
});

module.exports = Reply;
