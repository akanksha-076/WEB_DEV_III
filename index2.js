// const express = require("express")
// app.use(express.json());  //Middle ware
// const app = express();

// app.get("/", (req, res) => {
//     res.send({msg: "Hello"});
// });

// app.post("/submit", (req, res) => {
//     res.send({msg: "This is the post method."})
//     console.log(req.body)
// });

// app.listen(3000, () => {
//     console.log("Server is running");
// });

// usemodel,usercontroller,userrouter,user.json ye 
// srai files banani hai and sam same rakhna hai bss user ka schema change krna hai and  impliment krni hi app.use/user/user route 
const express = require("express");
const app = express();
app.use(express.json());
app.use("/user", require("./router/userRouter"));
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});