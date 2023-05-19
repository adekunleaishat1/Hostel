let input = document.getElementById("file-input");
let img = document.getElementById("img");
img.style.display = "none"
let getuser = JSON.parse(localStorage.getItem("currentuser"))
 console.log(getuser);
let nam = document.getElementById("nam");
let emal = document.getElementById("emal");
let phone = document.getElementById("phone");
let user = document.getElementById("user");
let reader = new FileReader();
  

nam.innerHTML = getuser.name
emal.innerHTML = getuser.email
phone.innerHTML = "welcome to your dashboard " + getuser.name

if(!getuser){
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
      let imgSrc = img.src
      getuser.profile_image = imgSrc;
       localStorage.setItem("currentuser", JSON.stringify(getuser))
       console.log(getuser);
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
    input.click();
    img.style.display = "block"
 }
