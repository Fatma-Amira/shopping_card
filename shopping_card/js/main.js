//Variables Globales
const likeBtn = Array.from(document.querySelectorAll(".fa-heart-o"));
const minusBtn = Array.from(document.querySelectorAll(".fa-minus-square"));
const plusBtn = Array.from(document.querySelectorAll(".fa-plus-square"));
const Quantity = Array.from(document.querySelectorAll(".quantity"));
const price = Array.from(document.querySelectorAll(".price"));
const removeBtn = Array.from(document.querySelectorAll(".fa-trash"));
const totalPrice = document.querySelector(".totalPrice");
const nbproducts= document.querySelector(".panier");

// Function

//Change Color Function
function changeColor(el) {
  if (el.target.style.color !== "red") {
    el.target.style.color = "red";
  } else {
    el.target.style.color = "#7dc023";
  }
}
// updateTotal
function updateTotal() {
  let total = 0;
  for (let i = 0; i < Quantity.length; i++) 
  {
    total = total + Quantity[i].innerText * price[i].innerText ;
  }
  totalPrice.innerText = total;
}


// plus btn 
function increment(el) {
  el.target.previousElementSibling.innerText =
    Number(el.target.previousElementSibling.innerText) + 1;
  updateTotal();
  updatecart()
}

//Minus btn
function decrement(el) {
  if (Number(el.target.nextElementSibling.innerText) < 1) {
    el.target.nextElementSibling.innerText = 0;
    return;
  } else {
    el.target.nextElementSibling.innerText =
      Number(el.target.nextElementSibling.innerText) - 1;
  }
  updateTotal();
  updatecart()
}
//funtion updatecart
function updatecart(){
  let nbreproducts = 0;
  for (let i = 0; i < Quantity.length; i++) {
    nbreproducts = nbreproducts + Number (Quantity[i].innerText) ;
  }
  nbproducts.innerText = nbreproducts;
  }



//  addEventListener

for (let i = 0; i < plusBtn.length; i++) {
  //Like Btn
  likeBtn[i].addEventListener("click", changeColor);

  // Plus Btn
  plusBtn[i].addEventListener("click", increment);

  //Minus btn

  minusBtn[i].addEventListener("click", decrement);

  //remove btn

  removeBtn[i].addEventListener("click",function removeElement(el) {
    el.target.parentElement.parentElement.remove();
    Quantity[i].innerText = 0;
    updateTotal();
    updatecart()
  });
 
}


