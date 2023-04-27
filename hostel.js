let getuser = JSON.parse(localStorage.getItem("currentuser"));
let display = document.getElementById("display") ;
let show_img =document.getElementById("showimg");
let room = document.getElementById("roomcont");
let explore = document.getElementById("explore");
let email = document.getElementById("email");
let nam = document.getElementById("name");
let phone = document.getElementById("phone");
let end_date = document.getElementById("end-date");
let start_date = document.getElementById("start-date");
let age = document.getElementById("age");
let date = document.getElementById("date");
let nationality = document.getElementById("nationality");
let arrr =JSON.parse(localStorage.getItem("student"))
document.getElementById("form").style.display= "none"
let arr = JSON.parse(localStorage.getItem("product")); 
room.style.display = "none"
 let hostel = [
    {
       title:["Johnrok Hostel"],
       thumsnail:["2017-11-05.jpg"],
       image:["2017-11-05.jpg","IMG_20221002_150411-scaled.jpg","IMG_20221002_150415-scaled.jpg","IMG_20221002_150422-scaled.jpg","IMG_20221019_160958-scaled.jpg"],
       description:["A selfcon apartment that can be occupy by two student with a kitchen and toilet fully furnished. "],
       location:["Tanke junction opposite whiteny hotel ,Ilorin."],
       price:["₦170,000/yearly"]
    },
    {
      title:["Delight Hostel"],
      thumsnail:["2018-08-18.jpg"],
      image:["2018-08-18.jpg","2019-09-21.jpg","Hostel - 2.jpeg","gallery9.jpeg","nucleusimagery.blob.core.windows.jpg"],
      description:["A selfcon apartment that can be occupy by two student with a kitchen and toilet fully furnished."],
      location:["Ibadan alade street, Bodija."],
      price:["₦150,000/ yearly"]
   },{
    title:["JMK Hostel"],
    thumsnail:["IMG-20210711-WA0029.6a24b456.jpg"],
    image:["IMG-20210711-WA0029.6a24b456.jpg","PREMIUM-EXECUTIVE-SINGLE-ROOM-A-1.jpeg","ch-07.jpg","ROOM-OF-3-B-1.jpeg","filepict-1537522204.jpg"],
    description:["a miniflat apartment for student ,fully furnished room with modern equiptment "],
    location:["Abuja,along akure road Garki."],
    price:["₦250,000/yearly"]
 },{
    title:["JMK Hostel"],
    thumsnail:["IMG-20210711-WA0029.6a24b456.jpg"],
    image:["IMG-20210711-WA0029.6a24b456.jpg","PREMIUM-EXECUTIVE-SINGLE-ROOM-A-1.jpeg","ch-07.jpg","ROOM-OF-3-B-1.jpeg","filepict-1537522204.jpg"],
    description:["a miniflat apartment for student ,fully furnished room with modern equiptment "],
    location:["Abuja,along akure road Garki."],
    price:["₦250,000/yearly"]
 },{
    title:["JMK Hostel"],
    thumsnail:["IMG-20210711-WA0029.6a24b456.jpg"],
    image:["IMG-20210711-WA0029.6a24b456.jpg","PREMIUM-EXECUTIVE-SINGLE-ROOM-A-1.jpeg","ch-07.jpg","ROOM-OF-3-B-1.jpeg","filepict-1537522204.jpg"],
    description:["a miniflat apartment for student ,fully furnished room with modern equiptment "],
    location:["Abuja,along akure road Garki."],
    price:["₦250,000/yearly"]
 },{
    title:["JMK Hostel"],
    thumsnail:["IMG-20210711-WA0029.6a24b456.jpg"],
    image:["IMG-20210711-WA0029.6a24b456.jpg","PREMIUM-EXECUTIVE-SINGLE-ROOM-A-1.jpeg","ch-07.jpg","ROOM-OF-3-B-1.jpeg","filepict-1537522204.jpg"],
    description:["a miniflat apartment for student ,fully furnished room with modern equiptment "],
    location:["Abuja,along akure road Garki."],
    price:["₦250,000/yearly"]
 },
   
 ]
  function submit(ev) {
    ev.preventDefault();
    room.style.display = "block"
    let studentarr = {
        name:nam.value,
        email:email.value,
        phonenumber:phone.value,
        age:age.value,
        nationality:nationality.value,
        date:date.value,
        startdate:start_date.value,
        enddate:end_date.value,
     }
    arrr.push(studentarr);
    localStorage.setItem("student",JSON.stringify(studentarr));
    console.log(nam.value);
    console.log(nationality.value);
  }
  


 function show(){
   for (let index = 0; index <hostel.length; index++) {
       const element = hostel[index];
     display.innerHTML +=  `
       <div class="container1">
         <div class="im">
           <img src="${hostel[index].thumsnail}">
         </div>
         <div class="container2" id="container2">
           <div class="con">
               <h1 class="title">${hostel[index].title}</h1>
               <p class="descrp">${hostel[index].description}</p>
              <div class="location">
                    <i class="fa fa-location-dot"></i>
                 <span class="locate">${hostel[index].location}</span>
              </div>   
              <div class="fle">
                 <div class="price2">
                   ${hostel[index].price}
                 </div>
                 <button onclick="view(${index})" id="view">view</button>
              </div>
            </div>
         </div>  
       </div>
     `
   }
   }
   show()

   function view(i) {
    document.getElementById("content").style.display="none"
    display.style.display="none"
    room.style.display= "block"
    explore.style.display = "none"
    console.log(hostel[i]) 
    document.getElementById("bg_img").style.width = "100%"
    document.getElementById("bg_img").style.height = "60%"
    document.getElementById("bg_img").style.backgroundImage = `url(${hostel[i].thumsnail[0]})`
    console.log(hostel[i].thumsnail);
    console.log(hostel[i].thumsnail[0]);
    document.getElementById("bg_img").style.backgroundColor="red"
    document.getElementById("bg_img").style.backgroundPosition = "center"
    document.getElementById("bg_img").style.backgroundSize = "cover"
    document.getElementById("bg_img").style.display = "flex"
    document.getElementById("bg_img").style.justifyContent = "center"
    document.getElementById("bg_img").style.alignItems = "center"
    document.getElementById("bg_img").style.textAlign = "center"

    document.getElementById("b_img").style.backgroundColor="rgba(0, 0, 0, 0.747)"
    document.getElementById("b_img").style.width="100%"
    document.getElementById("b_img").style.height="100%"
    document.getElementById("b_img").style.display = "flex"
    document.getElementById("b_img").style.justifyContent = "center"
    document.getElementById("b_img").style.alignItems = "center"

    document.getElementById("b_text").innerHTML= hostel[i].title
    document.getElementById("b_text").style.color = "#FFCC99"
    document.getElementById("b_text").style.fontSize= "70px"
    document.getElementById("b_text").style.margin= "20px"
    
    document.getElementById("b_but").innerHTML= hostel[i].price
    document.getElementById("b_but").style.fontSize= "20px"
    document.getElementById("b_but").style.border= "#FFCC99"
    document.getElementById("b_but").style.backgroundColor= "#FFCC99"
    document.getElementById("b_but").style.border= "rgb(243, 145, 9)"
    document.getElementById("b_but").style.width= "200px"
    document.getElementById("b_but").style.height= "50px"
    document.getElementById("b_but").style.borderRadius= "20px"
    document.getElementById("b_but").style.color= "black"
    document.getElementById("b_but").style.margin= "20px"

    document.getElementById("b_tex").style.fontSize= "40px"
    document.getElementById("b_tex").innerHTML= hostel[i].description
    document.getElementById("b_tex").style.color= "white"
    document.getElementById("b_tex").style.margin= "20px"


    document.getElementById("img1").src = hostel[i].image[1]
    document.getElementById("img2").src = hostel[i].image[2]
    document.getElementById("img3").src = hostel[i].image[3]
    document.getElementById("img4").src = hostel[i].image[4]
   }
function agent(ev) {
   ev.preventDefault();
   window.location.href="signup2.html" 
}

function clickme(ev) {
   ev.preventDefault();
   document.getElementById("form").style.display = "block"
}