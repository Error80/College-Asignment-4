const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageList = ["images/pic1.jpg","images/pic2.jpg","images/pig3.jpg","images/pic4.jpg","images/pic5.jpg"]

/* Declaring the alternative text for each image file */
const imageAltText = ["A baby's eye", "A rock wall", "Purple Flowers", "Hieroglyphs from Ancient Egypt","A Moth"]

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', imageList[0]);
newImage.setAttribute('alt', imageAltText[0]);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
