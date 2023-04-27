let pass = document.getElementById("pass");
let email = document.getElementById("email");
let username = document.getElementById("username");
let c_pass = document.getElementById("c_pass");
let userar = JSON.parse(localStorage.getItem("userinfo"))

function sign(ev) {
    ev.preventDefault();
    let user = 
    {
        name:username.value,
        email:email.value,
        password:pass.value,
        c_password:c_pass.value
    }
    if (pass.value == "" || email.value == "" || username.value == "") {
        alert("input field cannot be empty");
        return;
    }else if (pass.value =! c_pass.value){
       alert("password does not match");
       return;
    }else{
        if(userar == null){
           let  userar = []
           userar.push(user);
           console.log(userar)
           localStorage.setItem("userinfo",JSON.stringify(userar))
           alert("signup successfully")
           window.location.href = "login.html"
        }else{
            userar.push(user);
            console.log(userar);
           localStorage.setItem("userinfo",JSON.stringify(userar))
           alert("signup successfully")
           window.location.href = "login.html"
        }
    }
}
function show(ev){
    ev.preventDefault();
    if (document.getElementById("btn").className == "fa-regular fa-eye-slash") {
        document.getElementById("btn").className = "fa-regular fa-eye"
        pass.type = "text"
    }else{
        document.getElementById("btn").className = "fa-regular fa-eye-slash"
        pass.type="password"
    }
}
function show2(ev){
    ev.preventDefault();
    if (document.getElementById("bt").className == "fa-regular fa-eye-slash") {
        document.getElementById("bt").className = "fa-regular fa-eye"
        c_pass.type="text"
    }else{
        document.getElementById("bt").className = "fa-regular fa-eye-slash"
        c_pass.type="password"
    }
}
function log(ev){
    ev.preventDefault();
    window.location.href = "login.html"
}