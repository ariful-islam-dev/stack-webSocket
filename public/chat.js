const socket = io("ws://localhost:4000");

socket.on("message", (message)=>{
    console.log(message)
})

socket.emit("message", 'Hello from client')