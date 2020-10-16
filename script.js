
var discnt = 0; // no default percent discount

var coupons = new Array ( // place to put coupon codes
"coup1", // 1st coupon value - comma seperated
"coup2", // 2nd coupon value - add all you want
"coup3" // 3rd coupon value
);
var coupdc = new Array ( // place to put discounts for coupon vals
5,
10,
15
);
var coupval = "paradise10"; // what user entered as coupon code

function ChkCoup () { // check user coupon entry
var i;
discnt = 0; // assume the worst
for (i=0; i<coupons.length; i++) {
if (coupval == coupons[i]) {
discnt = coupdc[i]; // remember the discount amt
alert ("Valid coupon number! \n\n" + discnt +
"% discount now in effect.");
return;
}
}
alert ("'" + coupval + "' is not a valid code!");
}

function Dollar (val) { // force to valid dollar amount
var str,pos,rnd=0;
if (val < .995) rnd = 1; // for old Netscape browsers
str = escape (val*1.0 + 0.005001 + rnd); // float, round, escape
pos = str.indexOf (".");
if (pos > 0) str = str.substring (rnd, pos + 3);
return str;
}

function ReadForm (obj1) { // apply the discount
var amt,des;
amt = obj1.baseamt.value*1.0; // base amount
des = obj1.basedes.value; // base description

if (discnt > 0) { // only if discount is active
amt = Dollar (amt - (amt * discnt/100.0));
des = des + ", " + discnt + "% dis, COUP = " + coupval;
}

obj1.amount.value = Dollar (amt);
obj1.item_name.value = des;
}








// Get the modal

var modal = document.getElementById('myModal');


// Get the image and insert it inside the modal - use its "alt" text as a caption

var img = document.getElementById('myImg');

var modalImg = document.getElementById("img01");

var captionText = document.getElementById("caption");

img.onclick = function(){

   modal.style.display = "block";

   modalImg.src = this.src;

   captionText.innerHTML = this.alt;

}


// Get the span element that closes the modal

var span = document.getElementsByClassName("close")[0];


// When the user clicks on span (x), close the modal

span.onclick = function() { 

   modal.style.display = "none";

}

document.addEventListener('DOMContentLoaded', function() { var elems = document.querySelectorAll('.carousel'); var instances = M.Carousel.init(elems, options); }); // Or with jQuery $(document).ready(function(){ $('.carousel').carousel(); }); 


