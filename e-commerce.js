var total=1.0;


function reply_click(val){
    var price=parseFloat(val);
    total+=price;
    document.getElementById("total").innerHTML= '<i  class="fa fa-shopping-basket fa-lg"> </i>' +total.toFixed(2) + "USD";
}
