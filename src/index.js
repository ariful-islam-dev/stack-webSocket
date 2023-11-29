require("dotenv").config();
const http = require("http");
const path = require("path")
const express = require("express");
const {Server} = require("socket.io");

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const httpServer = http.createServer(app);
// Socket Connection
const io = new Server(httpServer);

io.on("connection", (socket)=>{
    console.log("Socket Server connected")

    socket.emit("message", "Welcome to chat app");
    // socket.on("message", (message)=>{
    //     console.log(message)
    // })

    io.on("disconnection", ()=>{
        console.log("Socket Server disconnected")
    })
})

// application route
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/views/index.html"))
})
app.get("/chat", (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/views/chat.html"))
})

// Universal Error handler
app.use((error, _req, res, _next)=>{
    const errorObj = {
        message: error?.message || "Somethings Went Wrong",
        status: error?.status || 500
    }

    res.status(errorObj.status).json(errorObj)
})


httpServer.listen(4000, ()=>{
    console.log(`Server is Running http://localhost:4000`)
})