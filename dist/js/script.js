/* Gallery */ 

var galleryTimer = setInterval(next, 2500);
var index = 0;
var newPhoto;

function next(){
	if(index<1){
		index++;
	}else{
		index=0;
	}
	
	change();

}

function change(){
  newPhoto="images/page-photos/gallery"+index+".jpg";
  document.querySelector("#gallery").setAttribute("src", newPhoto);
}