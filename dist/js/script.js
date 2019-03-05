/* Gallery */ 

var galleryTimer = setInterval(next, 2500);
var index = 0;
var newPhoto;

function next(){
	if(index<5){
		index++;
	}else{
		index=0;
	}
	
	change();

}

function change(){
  newPhoto="images/gallery"+index+".jpg";
  document.querySelector("#gallery").setAttribute("src", newPhoto);
}