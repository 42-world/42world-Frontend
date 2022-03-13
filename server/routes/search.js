const express = require("express");
const router = express.Router();
const { Article } = require("../mongoose/model");

router.get("/search/:query", async (req, res) => {
  const { query } = req.params;
  console.log(query);
  const article = await Article.find({ title: { $regex: query } }).populate({
    path: "author",
    populate: { path: "company" },
  });

  const formatedArticle = article.map((a) => {
    return {
      ...a._doc,
      author: {
        ...a._doc.author._doc,
        nickname: `${a._doc.author._doc.nickname[0]}${"*".repeat(
          a._doc.author._doc.nickname.length - 1
        )}`,
      },
    };
  });
  res.send({ article: formatedArticle, error: false, msg: "성공" });
});

module.exports = router;
