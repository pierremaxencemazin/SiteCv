window.onload = init;

/** 
 * 
 * Variable Global
 */
let li ;
let titre ;
let item1 ;
let item2 ;
let item3 ;

function init() {

	/**
	 * 
	 * Initialisation des variables
	 */

	li = document.getElementsByTagName('li');
	titre = document.getElementsByClassName('titre');
	item1 = document.getElementById('item1');
	item2 = document.getElementById('item2');
	item3 = document.getElementById('item3');
	

	titre[0].onclick = function(){
		if(hasClass(item1,"ac_hidden")){
			item1.classList.remove("ac_hidden");
			item2.classList.add("ac_hidden");
			item3.classList.add("ac_hidden");
		}else{
			item1.classList.add("ac_hidden");
		}
	}

	titre[1].onclick = function(){
		if(hasClass(item2,"ac_hidden")){
			item1.classList.add("ac_hidden");
			item2.classList.remove("ac_hidden");
			item3.classList.add("ac_hidden");
		}else{
			item2.classList.add("ac_hidden");
		}
	}

	titre[2].onclick = function(){
		if(hasClass(item3,"ac_hidden")){
			item1.classList.add("ac_hidden");
			item2.classList.add("ac_hidden");
			item3.classList.remove("ac_hidden");
		}else{
			item3.classList.add("ac_hidden");
		}
	}
}
//TODO Tradution de la fonction Jquery en Vanilla
// $(document).ready(function() {
//   $("#accordion section h1").click(function(e) {
//     $(this).parents().siblings("section").addClass("ac_hidden");
//     $(this).parents("section").removeClass("ac_hidden");

//     e.preventDefault();
//   });
// });

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}