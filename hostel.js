let getuser = JSON.parse(localStorage.getItem("currentuser"));
let display = document.getElementById("display");
let show_img = document.getElementById("showimg");
let room = document.getElementById("roomcont");
let explore = document.getElementById("explore");
let email = document.getElementById("email");
let nam = document.getElementById("name");
let phone = document.getElementById("phone");
let end_date = document.getElementById("end-date");
let start_date = document.getElementById("start-date");
let age = document.getElementById("age");
let date = document.getElementById("datee");
let nationality = document.getElementById("nationality");
let gender = document.getElementById("gender");
let hostels = JSON.parse(localStorage.getItem("hotel_room"))
let studentarr = JSON.parse(localStorage.getItem("student"))
let prodctarr = JSON.parse(localStorage.getItem("rooms"))
const roomBtn = document.createElement("button");
document.getElementById("payment_cont").style.display = "none"
document.getElementById("form").style.display = "none"
room.style.display = "none"
let index = 0
prodctarr = []
let hostel = [
  {
    title: "Johnrok Hostel",
    thumsnail: "2017-11-05.jpg",
    image: ["2017-11-05.jpg", "IMG_20221002_150411-scaled.jpg", "IMG_20221002_150415-scaled.jpg", "IMG_20221002_150422-scaled.jpg", "IMG_20221019_160958-scaled.jpg"],
    description: "A selfcon apartment that can be occupy by two student with a kitchen and toilet fully furnished. ",
    location: "Tanke junction opposite whiteny hotel ,Ilorin.",
    price: 170000,
    no_of_rooms: 80,
    room_number: ""
  },
  {
    title: "Delight Hostel",
    thumsnail: "2018-08-18.jpg",
    image: ["2018-08-18.jpg", "2019-09-21.jpg", "Hostel - 2.jpeg", "gallery9.jpeg", "nucleusimagery.blob.core.windows.jpg"],
    description: "A selfcon apartment that can be occupy by two student with a kitchen and toilet fully furnished.",
    location: "Ibadan alade street, Bodija.",
    price: 150000,
    no_of_rooms: 50,
    room_number: ""
  }, {
    title: "JMK Hostel",
    thumsnail: "IMG-20210711-WA0029.6a24b456.jpg",
    image: ["IMG-20210711-WA0029.6a24b456.jpg", "PREMIUM-EXECUTIVE-SINGLE-ROOM-A-1.jpeg", "ch-07.jpg", "ROOM-OF-3-B-1.jpeg", "filepict-1537522204.jpg"],
    description: "a miniflat apartment for student ,fully furnished room with modern equiptment ",
    location: "Abuja,along akure road Garki.",
    price: 250000,
    no_of_rooms: 100,
    room_number: ""
  }, {
    title: "JMK Hostel",
    thumsnail: "IMG-20210711-WA0029.6a24b456.jpg",
    image: ["IMG-20210711-WA0029.6a24b456.jpg", "PREMIUM-EXECUTIVE-SINGLE-ROOM-A-1.jpeg", "ch-07.jpg", "ROOM-OF-3-B-1.jpeg", "filepict-1537522204.jpg"],
    description: "a miniflat apartment for student ,fully furnished room with modern equiptment ",
    location: "Abuja,along akure road Garki.",
    price: 250000,
    no_of_rooms: 100,
    room_number: ""
  }, {
    title: "JMK Hostel",
    thumsnail: "IMG-20210711-WA0029.6a24b456.jpg",
    image: ["IMG-20210711-WA0029.6a24b456.jpg", "PREMIUM-EXECUTIVE-SINGLE-ROOM-A-1.jpeg", "ch-07.jpg", "ROOM-OF-3-B-1.jpeg", "filepict-1537522204.jpg"],
    description: "a miniflat apartment for student ,fully furnished room with modern equiptment ",
    location: "Abuja,along akure road Garki.",
    price: 250000,
    no_of_rooms: 100,
    room_number: ""
  }, {
    title: "JMK Hostel",
    thumsnail: "IMG-20210711-WA0029.6a24b456.jpg",
    image: ["IMG-20210711-WA0029.6a24b456.jpg", "PREMIUM-EXECUTIVE-SINGLE-ROOM-A-1.jpeg", "ch-07.jpg", "ROOM-OF-3-B-1.jpeg", "filepict-1537522204.jpg"],
    description: "a miniflat apartment for student ,fully furnished room with modern equiptment ",
    location: "Abuja,along akure road Garki.",
    price: 250000,
    no_of_rooms: 100,
    room_number: " "
  },

]
localStorage.setItem("hostel_room", JSON.stringify(hostel));
console.log(hostel);
function submit(index) {
  let prodctarr = JSON.parse(localStorage.getItem("rooms"));
  let studentarr = {
    name: nam.value,
    email: email.value,
    phonenumber: phone.value,
    age: age.value,
    nationality: nationality.value,
    date: date.value,
    startdate: start_date.value,
    enddate: end_date.value,
    gender: gender.value,
    hostel: prodctarr[index]
  };
  console.log(nam.value);
  console.log(email.value);
  console.log(age.value);
  console.log(nationality.value);
  console.log(date.value);
  console.log(gender.value);
  console.log(phone.value);
  
  if (
    phone.value == "" ||
    email.value == "" ||
    nam.value == "" ||
    age.value == "" ||
    nationality.value == "" ||
    gender.value == ""
  ) {
    alert("input field cannot be empty");
    return;
  } else {
    console.log(prodctarr[index])
    localStorage.setItem("student", JSON.stringify(studentarr));
    console.log(studentarr);
    alert("welcome to our hostel");
    window.location.reload();
    window.location.href = "payment.html";
  }
}




function show() {
  localStorage.setItem("hostel_room", JSON.stringify(hostel));
  for (let index = 0; index < hostel.length; index++) {
    const element = hostel[index];
    display.innerHTML += `
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
                  ${ "₦" +hostel[index].price + "/yearly"}
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
  console.log(hostel[i]);
  let  prodctarr = [];
  prodctarr.push(hostel[i]);
  console.log(prodctarr);
  localStorage.setItem("rooms", JSON.stringify(prodctarr));
    document.getElementById("content").style.display = "none"
    display.style.display = "none"
    room.style.display = "block"
    explore.style.display = "none"
    document.getElementById("bg_img").style.width = "100%"
    document.getElementById("bg_img").style.height = "60%"
    document.getElementById("bg_img").style.backgroundImage = `url(${hostel[i].thumsnail})`
    console.log(hostel[i].thumsnail);
    console.log(hostel[i].thumsnail);
    document.getElementById("bg_img").style.backgroundColor = "red"
    document.getElementById("bg_img").style.backgroundPosition = "center"
    document.getElementById("bg_img").style.backgroundSize = "cover"
    document.getElementById("bg_img").style.display = "flex"
    document.getElementById("bg_img").style.justifyContent = "center"
    document.getElementById("bg_img").style.alignItems = "center"
    document.getElementById("bg_img").style.textAlign = "center"

    document.getElementById("b_img").style.backgroundColor = "rgba(0, 0, 0, 0.747)"
    document.getElementById("b_img").style.width = "100%"
    document.getElementById("b_img").style.height = "100%"
    document.getElementById("b_img").style.display = "flex"
    document.getElementById("b_img").style.justifyContent = "center"
    document.getElementById("b_img").style.alignItems = "center"

    document.getElementById("b_text").innerHTML = hostel[i].title
    document.getElementById("b_text").style.color = "#FFCC99"
    document.getElementById("b_text").style.fontSize = "70px"
    document.getElementById("b_text").style.margin = "20px"

    document.getElementById("b_but").innerHTML =  "₦" + hostel[i].price + "/yearly"
    document.getElementById("b_but").style.fontSize = "20px"
    document.getElementById("b_but").style.border = "#FFCC99"
    document.getElementById("b_but").style.backgroundColor = "#FFCC99"
    document.getElementById("b_but").style.border = "rgb(243, 145, 9)"
    document.getElementById("b_but").style.width = "200px"
    document.getElementById("b_but").style.height = "50px"
    document.getElementById("b_but").style.borderRadius = "20px"
    document.getElementById("b_but").style.color = "black"
    document.getElementById("b_but").style.margin = "20px"

    document.getElementById("b_tex").style.fontSize = "40px"
    document.getElementById("b_tex").innerHTML = hostel[i].description
    document.getElementById("b_tex").style.color = "white"
    document.getElementById("b_tex").style.margin = "20px"


    document.getElementById("img1").src = hostel[i].image[1]
    document.getElementById("img2").src = hostel[i].image[2]
    document.getElementById("img3").src = hostel[i].image[3]
    document.getElementById("img4").src = hostel[i].image[4]
  
    let roomCount = hostel[i].no_of_rooms
    console.log(roomCount);
    for (let j = 1; j <= roomCount; j++) {
      const roomBtn = document.createElement("button");
      roomBtn.innerText = `Room ${j}`;
    
      if (hostel[i].room_number === j) {
        roomBtn.style.backgroundColor = "red";
      }
    
      roomBtn.addEventListener("click", () => {
        console.log(` ${j}`);
        hostel[i].room_number = j;
        console.log(prodctarr);
        roomBtn.style.backgroundColor = "red";
    
        localStorage.setItem("rooms", JSON.stringify(prodctarr));
      });
    
            roomBtn.style.width = "100px";
            roomBtn.style.height = "30px";
            roomBtn.style.backgroundColor = "blue";
            roomBtn.style.padding = "10px 20px";
            roomBtn.style.border = "none";
            roomBtn.style.color = "white";
            roomBtn.style.borderRadius = "5px";
  
      const container = document.getElementById("room-buttons-container");
      container.appendChild(roomBtn);
           
      container.style.width = "80%"; 
      container.style.height = "auto";
      container.style.display = "flex";
      container.style.justifyContent = "spacebetween";
      container.style.alignItems = "center";
      container.style.flexWrap = "wrap";
      container.style.gap = "10px";
    }
}

function agent(ev) {
  ev.preventDefault();
  window.location.href = "signup2.html"
}
function clickme() {
  // ev.preventDefault();
  let prodctarr = JSON.parse(localStorage.getItem("rooms"))
  console.log(prodctarr);

  if (prodctarr[index].room_number !== "" ) {
    alert("Successfully chose a room.");

    const roomBtn = document.createElement("button");
    roomBtn.style.backgroundColor = "red";
    document.getElementById("form").style.display = "block";
  } else {
    alert("Please go back and choose a room.");
    const roomBtn = document.createElement("button");
    roomBtn.style.backgroundColor = "initial";
    return;
  }
 
}