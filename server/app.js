const path=require("path");
const express = require("express");
require("./config/database"); // Ensure this file exists and is correctly set up

const app = express();

// Root route
// console.log(path.join(_dirname, "../BLOOD DONAR"));
const staticpath = path.join(__dirname,"../blood donar");
app.use(express.static(path.join(__dirname, "./public")));

console.log(staticpath);
app.use(express.static(path.resolve("./public")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine" , "ejs");

app.get("/" , (req,res)=>{
  res.render("index")
});

app.get("/index" , (req,res)=>{
  res.render("index")
});

app.get("/register" , (req,res)=>{
  res.render("register")
});
// app.get("/donate" , (req,res)=>{
//   res.render("donate")
// });
// app.get('/donate.ejs', (req, res) => {
//   res.sendFile(__dirname + '/public/to/views/donate.ejs');
// });

app.get("/help" , (req,res)=>{
  res.render("help")
});
app.get("/login" , (req,res)=>{
  res.render("login")
});
app.get("/donate" , (req,res)=>{
  res.render("donate")
});



// app.get("/about", (req, res) => {
//   res.status(200).json({
//     message: " Hello About Welcome to Blood Donar",
//   });
//   // res.send("Welcome to about page ")
// });
// app.get("/volunteer", (req, res) => {
//   res.status(200).json({
//     message: " Hello Volunteer Welcome to Blood Donor",
//   });
//   // res.send(" Welcome to Volunteers  page")
// });
// app.get("/donate", (req, res) => {
//   res.status(304).json({
//     message: " Hello Donate Welcome to Blood Donor",
//     // res.send({
//     //     id:2,
//     //     name:"suruchi",
//   });

  // });
  // res.send(" Welcome to donate page")
  // });
// });

// app.get("/help", (req, res) => {
//   res.status(200).json({
//     message: " Hello Help Welcome to Blood Donor",
//     // });
//     // res.send(" Welcome to help page")
//   });
// });
// app.get("*",(req,res)=>{
//   res.send("404 error page")
// });

const PORT = 5500;
app.listen(PORT, () => {
  console.log("Server is running at port", PORT);
});
// app.listen(5500,()=>{
//     console.log("listing the port at 5500");
// });
