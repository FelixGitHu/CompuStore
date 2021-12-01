let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Total $${total}`;
}

function pay() {
    window.alert(product.join(", \n"));
}