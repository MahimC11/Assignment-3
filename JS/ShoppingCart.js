var quantity = 0;

function add(n){
  quantity += n;
  document.getElementById("quantity").innerHTML = quantity;
}

function remove(n){
  if(quantity > 0){
    quantity -= n;
    document.getElementById("quantity").innerHTML = quantity;
  }

}