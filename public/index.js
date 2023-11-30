const inputName = document.querySelector("#input_name");
const basicInfoForm = document.querySelector("#basic_info_form");

let userName;


 

basicInfoForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    userName = inputName.value;
    window.location.href = `http://localhost:4000/chat?name=${userName}`;
})