
var val;
function getcal(x) {
    val = x;
    var quantity = prompt("Please enter the quantity (in gms and ml)")
    var ans = Math.round(quantity * val);
    alert("you have consumed " + ans + " gms of calories")
}
function getpro(x) {
    val = x;
    var quantity = prompt("Please enter the quantity (in gms and ml)")
    var ans = Math.round(quantity * val);
    alert("you have consumed " + ans + " gms of protein")
}

function cart(){
    var al = "one item added to the cart"
    alert(al);
}