let hostel = JSON.parse(localStorage.getItem("hostel"));
let locate = document.getElementById("propertyaddress").value;
let title = document.getElementById("title").value;
let price = document.getElementById("rentalprice").value;
let photos = document.getElementById("propertyphotos");
let description = document.getElementById("propertydescription").value;
let images = document.getElementById("propertyimage")
let reader = new FileReader();
     

function chooseimage(){
   let data = images.files
   console.log(data)
   reader.addEventListener("load", function(){
       result = reader.result
       console.log(result);
   })
   if(data){
    reader.readAsDataURL(data)
    
   }

}
function choosephoto(){
   let data = photos.files[0]
   console.log(data)
   reader.addEventListener("load", function(){
      const show = reader.result
       console.log(show);
   })
   if(data){
    reader.readAsDataURL(data)
   }

}



console.log(title);
function post(e) {
   e.preventDefault();
   // let file = document.getElementById("propertyimages").files
   // let formObject = {}
   // let imageURL = URL.createObjectURL(file);
   // formObject.imageURLs = [imageURL];
   // formObject.imageURLs.push(imageURL)

   // imagearr = [formObject]

  
   let newhostel = {
      title:document.getElementById("title").value,
      thumbsnail:show,
      images:data,
      description:document.getElementById("propertydescription").value,
      location: document.getElementById("propertyaddress").value,
      price: document.getElementById("rentalprice").value
   }
   console.log(newhostel);
   // if(hostel == null){
   //    hostel = []
   //    hostel.push(newhostel)
   //    console.log(hostel);
   //    console.log(newhostel);
   //    localStorage.setItem("hostel", JSON.stringify(hostel));
   // } else{
   // hostel.push(newhostel)
   // console.log(hostel);
   // localStorage.setItem("hostel", JSON.stringify(hostel));
   // }
   
}


function home(ev) {
   ev.preventDefault();
   window.location.href = "hostel.html" 
}