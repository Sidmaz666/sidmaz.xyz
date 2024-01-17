const express = require("express")
const session = require('express-session');
const cors = require('cors');
const MongoStore = require('connect-mongo')
const app = express()
const path = require("path")
require("dotenv").config()

const db_connect = require("./functions/db_connect")

const ADMIN = require("./routes/admin")
const COMMON = require("./routes/common")

const port = process.env.PORT || 8080
const backlog = () => {
  console.log(`Server =>  http://localhost:${port}`)
}


app.set('trust proxy',1)
app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))
app.use(cors())
app.use(express.json());
app.use(db_connect())
app.use(express.urlencoded({
  extended: true
}));
app.use(session({ 
  store:MongoStore.create({
	mongoUrl: process.env.MONGODB_URI,
  }),
  secret: process.env.SESSION_SECRET, 
  resave: true, 
  saveUninitialized: false,
  cookie: { secure: true, sameSite: "none", maxAge: 24 * 60 * 60 * 1000 },
}));

app.use(express.static(path.join(__dirname,"public")))

app.get("/",(req,res) => { res.render("home") })
app.use("/admin",ADMIN)
app.use("/blogs",COMMON)

app.all("/*",(req,res) => {
  res.status(401).sendFile(path.join(__dirname,"public","404.html"))
})

app.listen(port, backlog)

module.exports = app
