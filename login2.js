let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let arr= JSON.parse(localStorage.getItem("agent"))
let getagent = JSON.parse(localStorage.getItem("currentagent"))
 function login(ev) {
    ev.preventDefault();
    getagent= arr.find((curr)=>curr.email == mail.value && curr.password == pass.value)
     if(getagent){
      localStorage.setItem("currentagent",JSON.stringify(getagent))
      window.location.href =""
      console.log(getagent);
     alert("login successfully")
     }else{
        alert("user is not found");
        return
     }
 }


 function sign(ev) {
    ev.preventDefault();
    window.location.href = "signup2.html"
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