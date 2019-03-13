/* JSON Products */

/* Each one has own JSON file */

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
getProducts(); // Calls function. 

// New function for new json file.

function getBrands() {
	fetch('json/brand.json')
	  .then(function(response) {
	  return response.json();
	})
	  .then(function(brands) {
		  console.log(brands);
		  renderBrand(brands);
	});
}
getBrands();

// Selects the id in the html. 

function renderFunctionBar(products) {
  var elem = document.querySelector("#item-count");

  elem.innerHTML = products.length + " ITEM(S)";
}

function renderProduct(products) {
  var productsElem = document.querySelector(".products");
  var html = "";
  for (var i=0; i < products.length; i++) { // Loop to repeat the process. 
	  var product = products[i];
	  html += '<div class="product"><img src="' + product.image + '"><span class="product-title"><a href="">' + product.navn + ' </a></span><div class="clearfix"></div><span class="product-price">' + product.pris + '</span><div class="clearfix"></div><button>ADD TO CART</button></div>';
	} // Html plus string concat. 
	
  productsElem.innerHTML = html; // Writes it on the html. 
}

function renderBrand(brands) {
  var brandElem = document.querySelector("#brands-list");
  var html = "";
  for (var i=0; i < brands.length; i++) {
	  var brand = brands[i];
	  html += '<li><a href="">' + brand.brand + '</a></li>';
  }
  brandElem.innerHTML = html;
}

function getCategories() {
	fetch('json/kategori.json')
	  .then(function(response) {
	  return response.json();
	})
	  .then(function(categories) {
		  console.log(categories);
		  renderCategory(categories);
	});
}
getCategories();

function renderCategory(categories) {
	var categoryElem = document.querySelector("#category-list");
	var html = "";
	for (var i=0; i < categories.length; i++) {
		var category = categories[i];
		html += '<li><a href="">' + category.navn + '</a></li>';
	}
	categoryElem.innerHTML = html;
}