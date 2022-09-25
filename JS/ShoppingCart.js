var quantity = 0;
document.getElementById("hidden").style.display="none"
document.getElementById("empty").style.display="block"

function add(n){
  quantity += n;
  document.getElementById("quantity").innerHTML = quantity;
  window.quantity = quantity;
  console.log(quantity);
}

function remove(n){
  if(quantity > 0){
    quantity -= n;
    document.getElementById("quantity").innerHTML = quantity;
    window.quantity = quantity;
    console.log(quantity);
  }

}

var modal = document.getElementById("cartModal");

var btn = document.getElementById("cartBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function reset(){
  quantity = 0;
  window.quantity = quantity;
  console.log(quantity)
  document.getElementById("quantity").innerHTML = quantity;
  updateCart()
}


//This function updates the cart and also changes the quantity from an int into currency
function updateCart() {
    if (quantity > 0){
      document.getElementById("empty").style.display="none"
      document.getElementById("cartQuantity").innerHTML = quantity;
      var cost1 = quantity * 125
      var USD = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
      })
      var cost = USD.format(cost1)
      console.log(cost)
      document.getElementById("cost").innerHTML = cost;
      document.getElementById("hidden").style.display="block"
    } else if (quantity == 0){
        document.getElementById("empty").style.display="block"
        document.getElementById("hidden").style.display="none"
    }
  }
