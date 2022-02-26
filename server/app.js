// imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// MEMO:
// MongoDBの URLで詰まったらこれみて
// https:stackoverflow.com/questions/55499175/how-to-fix-error-querysrv-erefused-when-connecting-to-mongodb-atlas

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log('データベース接続に成功しました'))
  .catch((err) => console.log(err));

const posts = require('./routes/routes');
app.use(express.json());
app.use('/api/posts', posts);
app.listen(port, () => console.log(`server running at localhost:${port}`));
