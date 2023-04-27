let username = document.getElementById("username");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let c_pass = document.getElementById("c_pass");
let phone = document.getElementById("phone");
let arr= JSON.parse(localStorage.getItem("agent"))
function sign(ev) {
    ev.preventDefault();
    let info = {
        name:username.value,
        email:email.value,
        phonenumber:phone.value,
        password:pass.value,
        c_password:c_pass.value
    }
    if (pass.value != c_pass.value) {
      alert("password doesn't match")  
      return;
    }else if(pass.value == "" || username.value == "" || phone.value == ""|| email.value == ""){
        alert("input field cannot be empty");
        return;
    }else{
        if(arr == null){
           let arr =[]
            arr.push(info);
            localStorage.setItem("agent",JSON.stringify(arr));
            alert("signup successfully");
            window.location.href = "login2.html"
            console.log(arr)  
        }else{
            arr.push(info);
            localStorage.setItem("agent",JSON.stringify(arr));
            alert("signup successfully")
            window.location.href = "login2.html"
            console.log(arr)
        }
        
    }
}
function log(ev) {
    ev.preventDefault();
    window.location.href ="login2.html"
}



function show(ev){
    ev.preventDefault();
    if (document.getElementById("btn").className == "fa-regular fa-eye-slash") {
        document.getElementById("btn").className = "fa-regular fa-eye"
        password.type = "text"
    }else{
        document.getElementById("btn").className = "fa-regular fa-eye-slash"
        password.type="password"
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