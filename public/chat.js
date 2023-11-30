const socket = io("ws://localhost:4000");

// chat page html elements

const messageArea = document.querySelector("#message_area");
const inputBox = document.querySelector("#input_box");
const form = document.querySelector("#form")
const title = document.querySelector("#heading");
const activity = document.querySelector("#activity");


(()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");
    if(!name){
        window.location.href = "http://localhost:4000/"
    }

    userName = name;
    inputBox.focus()
    heading.innerHTML = `😍 Welcome << ${userName} >> to the stack room.`;
})()

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const message = inputBox.value;
    if(!message){
        return alert("Please enter your message")
    }

    sendMessage({name: userName, message});
    inputBox.value = ""
})
function appendMessage ({name, message, type}){
    const messageDiv = document.createElement("div");
    messageDiv.classList.add(type.trim(), "message");

    let markup = `<h4>${name}</h4>
        <p>${message}</p>
    `
    messageDiv.innerHTML = markup;
    messageArea.appendChild(messageDiv);
    scrollToBottom();
}
const scrollToBottom = ()=>{
    messageArea.scrollTop=messageArea.scrollHeight;
}

const sendMessage =({name, message})=>{
    appendMessage({name, message,type:"sending"});

    socket.emit("message", {name, message});
    
};

socket.on("send-message", (message=>{
    appendMessage({...message, type: "receiving"});
}))

inputBox.addEventListener("keyup", ()=>{
    socket.emit("activity", userName)
})
let activityTimer;
socket.on("activity", (name)=>{
    clearTimeout(activityTimer)
    activity.innerHTML = `${name} is typing...`;
     
    activityTimer = setTimeout(()=>{
        activity.innerHTML = ""
    }, 2000)

})


