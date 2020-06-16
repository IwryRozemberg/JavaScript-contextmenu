const express = require("express");
const app = express();
const nunjucks = require("nunjucks");

nunjucks.configure("views", {
    express: app,
    noCache: true,
    autoescape: true
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.html")
})

app.listen(4000);