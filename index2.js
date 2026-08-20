const express = require("express")
app.use(express.json());  //Middle ware
const app = express();

app.get("/", (req, res) => {
    res.send({msg: "Hello"});
});

app.post("/submit", (req, res) => {
    res.send({msg: "This is the post method."})
    console.log(req.body)
});

app.listen(3000, () => {
    console.log("Server is running");
});