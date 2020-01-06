"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Alexa
   Date:   1/6/2020

*/

//determine the current date and time
var thisTime = new Date();
var timeStr = thisTime.toLocaleString();
document.getElementById("timeStamp").innerHTML = timeStr;

//determine skymap that will show on webpage for current date and time
var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = ((2*thisMonth)+thisHour)%24;
var imgStr = "<img src='sd_sky" + mapNum + ".png' />"

//insert HTML code for the inline image of the skymap
document.getElementById("planisphere").insertAdjacentHTML('afterBegin', imgStr);