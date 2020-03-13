$(document).off('click', '#trash' );
$(document).on('click', '#trash', function (foo) {
var el = $(this).val();
console.log(products[el].sku + " " + el);
products.splice(el, 1);
printList();
localStorage.setItem('product_data', JSON.stringify(products));
});
var lStorage = 	localStorage.getItem('product_data');
console.log(full_name);
$("#submitEmail").on('click', function() {
  var full_name = document.getElementById("full_name").value;
  var email = document.getElementById('email').value;
$.ajax({
            type: "POST",
            url: "php/productSubmit.php",
            data: { lStorage:lStorage,
            full_name: full_name,
            email: email
            },
            success: function(data){
              $('#submit-modal').modal('hide');
              window.location.href = "http://localhost:8888/mamp/#/order-submit";
            }
        });
	return;
 });
