// import AWS from "aws-sdk";
// import multer from "multer";
// import multerS3 from "multer-s3";

// const accessKeyId = "AKIA2ZJO7TKBLHMQ73PV";
// const secretAccessKey = "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";
// const s3 = new AWS.S3({ accessKeyId, secretAccessKey });
// const bucket = "nepp-insta";

// const config = {
//   s3,
//   bucket,
//   acl: "public-read",
//   metaData: (req, file, cb) => {
//     cb(null, { fieldName: file.fieldname });
//   },
//   key: (req, file, cb) => {
//     cb(null, `images/${Date.now().toString()}/${file.originalname}`);
//   },
// };

// export const upload = multer({ storage: multerS3(config) });
