$(document).off('click', '#trash' );
$(document).on('click', '#trash', function (foo) {
var el = $(this).val();
console.log(products[el].sku + " " + el);
products.splice(el, 1);
printList();
localStorage.setItem('product_data', JSON.stringify(products));
});
var lStorage = 	localStorage.getItem('product_data');
var full_name = document.getElementById('name').value;
var email = document.getElementById('email').value;
$("#submitEmail").on('click', function() {
  console.log("hello");
$.ajax({
            type: "POST",
            url: "php/productSubmit.php",
            data: { lStorage:lStorage,
            full_name: full_name,
            email: email
            },
            success: function(data){
              //window.location.href = "php/productSubmit.php";
            }
        });
	return;
});
        
    
