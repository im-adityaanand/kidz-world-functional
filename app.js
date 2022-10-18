let cartItems = 0;

let clickCount = {
    c1: 0,
    c2: 0,
    c3: 0,
    c4: 0,
    c5: 0,
    c6: 0,
    c7: 0,
    c8: 0,
    c9: 0,
    c10: 0,
    c11: 0,
    c12: 0,
    c13: 0,
    c14: 0,
}

let result = []
let totalPrice = 0;

function addClick(){
    cartItems++;
    let content = this.parentNode.parentNode.innerHTML;
    let price = this.parentNode.innerHTML;

    document.querySelector(".cart-items").textContent = "Cart items (" + cartItems + ")";
    let title = content.slice(content.search("<h4>")+4, content.search("</h4>"));
    totalPrice += parseFloat(price.slice(price.search(">")+2, price.search("</p>")));

    let card = this.parentNode.parentNode.classList[1];
    clickCount[card] += 1;

    let check = false;

    result.forEach(function(item, index){
        if(item.slice(item.search(":")+2, item.search(" -")) === title){
            check = true;
            result[index] = "Item name: " + title + " - Quantity: " + clickCount[card];
        }
    });

    if(check == false){
        result.push("Item name: " + title + " - Quantity: " + clickCount[card]);
    } 
}

function cartClick(){
    // result.forEach(function(item){
    //     console.log(item);
    // });
    console.log(result);

    let cents = (totalPrice*100)%100;
    let dollars = Math.floor(totalPrice*100/100);
    let priceText ="The total amount is " + dollars + "$  and " + cents + " cents";
    console.log(priceText);

    window.open(`https://wa.me/919000000000/?text=${result} ${priceText}`);
}

document.querySelectorAll(".add-button").forEach(function(e){
    e.onclick = addClick;
});
