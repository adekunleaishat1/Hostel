let input = document.getElementById("file-input");
let img = document.getElementById("img");
img.style.display = "none"
let currentuser = JSON.parse(localStorage.getItem("getuser"))
let nam = document.getElementById("nam");
let emal = document.getElementById("emal");
let phone = document.getElementById("phone");
let user = document.getElementById("user");
let reader = new FileReader();
  

nam.innerHTML = currentuser.name
emal.innerHTML = currentuser.email

if(!currentuser){
   window.location.href = "index.html"
}
function logt(ev){
   ev.preventDefault();
   localStorage.removeItem("getuser")
   Window.location.href = "index.html"
}

function chooseprofile() {
   let data = input.files[0]
   console.log(data)
   reader.addEventListener("load", function(){
       img.src = reader.result
       console.log(reader.result);
   })
   if(data){
    reader.readAsDataURL(data)
   }
}
function home(ev) {
    ev.preventDefault();
    window.location.href = "hostel.html" 
 }

 function upload() {
    input.click()
    user.style.display = "none"
    img.style.display = "block"
 }
