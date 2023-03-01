import express from "express";

export const app = express();

app.get('/', (req, res) => {
    res.status(200).end();
});

export const server = app.listen(4000, () => {
    console.log("Listening on port 4000...");
});
