// let prodctarr = JSON.parse(localStorage.getItem("rooms"))
let studentarr =JSON.parse(localStorage.getItem("student"))
console.log(studentarr);
let receiptinfo =JSON.parse(localStorage.getItem("receipt"));
const paymentForm = document.getElementById('paymentForm');
console.log(studentarr.name);
document.getElementById("price").innerHTML = "₦" + studentarr.hostel.price
document.getElementById("nam").innerHTML = studentarr.hostel.title
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_a937907ad423ac18d530d435f6861d460d4ad42c', // Replace with your public key
    email: studentarr.email,
    amount: studentarr.hostel.price + 00,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
      if (response.status === 'success') {
        let receiptinfo = {
          username:studentarr.name,
          hostel: studentarr.hostel.title,
          room_no: studentarr.hostel.room_number,
          hostelprice: studentarr.hostel.price,
          date: studentarr.date
        }
        localStorage.setItem("receipt", JSON.stringify(receiptinfo))
         window.location.href = "receipt.html";
      } else {
        alert("Payment was not successful. Please try again.");
      }



    }
  });

  handler.openIframe();
}


