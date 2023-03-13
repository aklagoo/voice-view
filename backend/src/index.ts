import express from "express";
import * as dotenv from 'dotenv';

dotenv.config();

export const app = express();

app.get('/', (req, res) => {
  res.status(200).end();
});

export const server = app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
