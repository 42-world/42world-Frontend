const Article = require("./article.js"); // 사용자가 작성한 게시글
const Board = require("./board.js"); // 각각의 게시판
const Comment = require("./comment.js"); // 게시글 안에 있는 댓글
const Company = require("./company.js"); // 회사 정보
const Reply = require("./reply.js"); // 게시글 안에 있는 댓글의 대댓글
const User = require("./user.js"); // 사용자 정보

module.exports = {
  Article,
  Board,
  Comment,
  Company,
  Reply,
  User,
};
