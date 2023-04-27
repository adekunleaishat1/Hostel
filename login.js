let mail = document.getElementById("mail");
let password = document.getElementById("password");
let userar = JSON.parse(localStorage.getItem("userinfo"))
function log(ev) {
    ev.preventDefault();
    let getuser= userar.find((curr)=>curr.email == mail.value && curr.password == password.value)
       if(getuser){
          alert("login successfully")
          localStorage.setItem("currentuser", JSON.stringify(getuser))
          window.location.href ="hostel.html"
       }else{
         alert("user not found")
         return;
       }
    
}
function signup(ev) {
    ev.preventDefault();
    localStorage.setItem("userinfo",JSON.stringify(userar))
    window.location.href = "signup.html"
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
