$(document).off('click', '#trash' );
$(document).on('click', '#trash', function (foo) {
var el = $(this).val();
console.log(products[el].sku + " " + el);
products.splice(el, 1);
printList();
localStorage.setItem('product_data', JSON.stringify(products));
});
var lStorage = 	localStorage.getItem('product_data');
$("#submitEmail").click(function () {
$.ajax({
            type: "POST",
            url: "php/productSubmit.php",
            data: { lStorage:lStorage },
            success: function(data){
              window.location.href = "php/productSubmit.php";
            }
        });
	return;
});
        
    
