let receiptinfo =JSON.parse(localStorage.getItem("receipt"));
 console.log(receiptinfo);
 console.log(receiptinfo.date);
 console.log(receiptinfo.hostelprice);
 console.log(receiptinfo.hostel);
 console.log(receiptinfo.room_no);
let nam = document.getElementById("nam")
let price = document.getElementById("price")
let host = document.getElementById("hos")
let room = document.getElementById("room")
let date = document.getElementById("date")
let  receiptcontent = document.getElementById("receipt").innerHTML
   nam.innerHTML = receiptinfo.username
   price.innerHTML = "₦" + receiptinfo.hostelprice
   host.innerHTML = receiptinfo.hostel
   room.innerHTML = "room-no" +"" +receiptinfo.room_no
   date.innerHTML = receiptinfo.date
function print(){
    
  const printWindow = window.open("", "", "width=400,height=600");
  printWindow.document.write('<link rel="stylesheet" href="receipt.css" type="text/css" />');

  printWindow.document.write(document.getElementById("receipt").innerHTML);
  printWindow.print();

  printWindow.close();

  window.location.href = "student.html"


}