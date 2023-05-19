document.getElementById("dropdown").style.display = "none"

let hostel = JSON.parse(localStorage.getItem("hostel_room"));
console.log(hostel);
let locate = document.getElementById("propertyaddress").value;
let title = document.getElementById("title").value;
let price = document.getElementById("rentalprice").value;
let photos = document.getElementById("propertyphotos");
let description = document.getElementById("propertydescription").value;
let images = document.getElementById("propertyimage")
let reader = new FileReader();
let image = []


let newhostel = {
   title: "",
   thumsnail: "",
   image:"",
   description: "",
   location: "",
   price: "",
   no_of_rooms: "",
   room_number: "" 
}
     
function choosephoto(){
   let data = photos.files[0]
   console.log(data)
   reader.addEventListener("load", function(){
      let shown = reader.result;
       console.log(shown);
       newhostel.thumsnail = shown
   })
   if(data){
    reader.readAsDataURL(data)
   }

}

function chooseimage(ev){
    let files = ev.target.files
        console.log(files);
   for (let i = 0; i < files.length; i++) {
         let reader = new FileReader
         reader.readAsDataURL(files[i])
      reader.addEventListener("load", function(){
         image.push(reader.result)
     
     })
   }
   
}


function post(e) {
   e.preventDefault();
  newhostel.image = image 
  newhostel.title = document.getElementById("title").value;
  newhostel.description = document.getElementById("propertydescription").value;
  newhostel.location = document.getElementById("propertyaddress").value;
  newhostel.price = document.getElementById("rentalprice").value;
  newhostel.no_of_rooms = document.getElementById("rooms").value;

  
   console.log(newhostel);
   console.log(hostel);
      hostel.push(newhostel)
      console.log(hostel);
     localStorage.setItem("hostel_room", JSON.stringify(hostel)); 
     
}



function home(ev) {
   ev.preventDefault();
   window.location.href = "hostel.html" 
}
function back() {
 document.getElementById("dropdown").style.display = "none"
}
function drop() {
   document.getElementById("dropdown").style.display = "block" 
   document.getElementById("dropdown").style.transition = "2s" 
}