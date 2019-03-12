/* JSON Products */

function getProducts() {
	  fetch('json/produkter.json')
		.then(function(response) {
		return response.json();
	  })
		.then(function(products) {
			console.log(products);
			renderProduct(products);
			renderFunctionBar(products);
		
	  });
}

function renderFunctionBar(products) {
	var elem = document.querySelector("#item-count");

	elem.innerHTML = products.length + " ITEM(S)";
}

function renderProduct(products) {
	var productsElem = document.querySelector(".products");
	var html = "";
	for (var i=0; i < products.length; i++) {
		var product = products[i];
		html += '<div class="product"><img src="' + product.image + '"><span class="product-title"><a href="">' + product.navn + ' </a></span><div class="clearfix"></div><span class="product-price">' + product.pris + '</span><div class="clearfix"></div><button>ADD TO CART</button></div>';
	}
	productsElem.innerHTML = html;
}


getProducts();

