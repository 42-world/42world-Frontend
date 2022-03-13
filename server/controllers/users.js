// import conn from "../db/index.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { JWT_SECRET_KEY as secretkey } from "../config/index.js";

// export const postUsers = async function (req, res, next) {
//   const { username, password } = req.body;
//   const query = `SELECT * FROM user WHERE user_name='${username}';`;
//   const [rows] = await conn.query(query);
//   if (rows.length) {
//     return res.status(409).send({
//       success: false,
//       message: "중복되는 아이디가 존재합니다.",
//     });
//   }

//   const salt = await bcrypt.genSalt();
//   const hashedPW = await bcrypt.hash(password, salt);

//   const query2 = `
//   INSERT INTO user(user_name, password, salt)
//   VALUES('${username}', '${hashedPW}', '${salt}');
//   `;
//   await conn.query(query2);
//   res.send({ success: true });
// };

// export const postUsersToken = async function (req, res, next) {
//   console.log(req.body);
//   const { username, password } = req.body;
//   const query = `SELECT id, salt,password FROM user WHERE user_name='${username}';`;
//   const [users] = await conn.query(query);
//   //console.log(users[0]);
//   if (users.length === 0) {
//     res.send({ success: false, message: "일치하는 유저가 없습니다" });
//   }
//   // 비밀번호 검증
//   const user = users[0];
//   const { salt } = user;
//   const hashedPW = await bcrypt.hash(password, salt);
//   if (user.password != hashedPW) {
//     return res
//       .status(401)
//       .send({ success: false, message: "비밀번호가 틀렸습니다" });
//   }
//   // 토큰 발급
//   const payload = { userId: user.id };
//   const option = { expiresIn: "1h" };
//   const token = jwt.sign(payload, secretkey, option);
//   res.send({ success: true, token });
// };
