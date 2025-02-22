const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes")
const cors = require("cors")
const authorizeUser = require("./middlewares/authorizeUser")


const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);;
app.use("/api/posts", postRoutes )


// Test API
app.get("/test", authorizeUser, (req, res) => {
    res.status(200).json({ success: true, user: req.user })
})



sequelize.sync().then(() => {
    console.log("Database & tables synced")
}).catch(err => {
    console.error(`Error syncing Databse:`, err)
})


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

module.exports = { app, server }