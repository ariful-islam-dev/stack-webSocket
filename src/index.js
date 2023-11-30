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

    socket.on("message", (data)=>{
        socket.broadcast.emit("send-message", data);
    })

    socket.on("activity", (name)=>{
        socket.broadcast.emit("activity", name)
    })

    io.on("disconnection", ()=>{
        console.log("Socket Server disconnected") 
    })
    io.emit("all-message", "hello from socket server")
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