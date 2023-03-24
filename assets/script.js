//Ecouter les évenements des flèches

//Avec les class
/* let table_arrow_left = document.getElementsByClassName("arrow_left");
let arrow_left = table_arrow_left[0];
let table_arrow_right = document.getElementsByClassName("arrow_right");
let arrow_right = table_arrow_right[0]; */

//Avec les ID
/* const arrow_left = document.getElementById("arrow_left");
const arrow_right = document.getElementById("arrow_right"); */

//Avec le query
const arrow_left = document.querySelector("#banner img.arrow_left");
const arrow_right = document.querySelector("#banner img.arrow_right");

arrow_right.addEventListener("click", slide_right);
arrow_left.addEventListener("click", slide_left);

//Définir les éléments du carrousel
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const nb_slides = slides.length;
let currently_slide = 0;
let bullet_parent = document.querySelector("#banner div.dots");
let img = document.querySelector("#banner img.banner-img");
let tag = document.querySelector("#banner p");
let bullets = document.getElementsByClassName("dot");

for (i = 0; i < nb_slides; i++) {
	let bullet = document.createElement("div");
	bullet.classList.add("dot");
		if (i == 0) {
		bullet.classList.add("dot_selected");
		} 
	bullet_parent.appendChild(bullet);
} 

//Modifier le carrousel
function move_slide(direction){
	bullets[currently_slide + direction].classList.add("dot_selected");
	slide_img = slides[currently_slide + direction]["image"];
	img.setAttribute("src", "./assets/images/slideshow/"+ slide_img)
	tag.innerHTML = slides[currently_slide + direction]["tagLine"];
	currently_slide= currently_slide + direction;
}

function slide_right(){
	
 	bullets[currently_slide].classList.remove("dot_selected");
	if (currently_slide == nb_slides -1){
		currently_slide = -1;
	}
	move_slide(1);
};

function slide_left(){
	bullets[currently_slide].classList.remove("dot_selected");
	if (currently_slide == 0){
		currently_slide = nb_slides;
	}
	move_slide(-1);
};




