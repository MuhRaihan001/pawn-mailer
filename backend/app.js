const express = require("express");
const bodyParser = require("body-parser");
const { sendEmail } = require("./mail/mailer");
const app = express();

app.use(bodyParser.json());

app.post("/mail", (req, res) =>{
    const { to, subject, message } = req.body;
    sendEmail(to, subject, message);
})

app.listen(8080, () =>{
    console.log("Mailer Ready at port 8080");
})