function myFunction() {
	var words = document.getElementById("name");
    var image = document.getElementById("pic");
    if (image.src.match("pig.png")){
    	image.src= "pong.png";
    	words.innerHTML = "Pong";
    	console.log("hello");
    }
    else{
    	image.src= "pig.png";
    	words.innerHTML = "Pig";
    	console.log("done");
    }
 }
 function myFunctionAgain() {
	var word = document.getElementById("names");
    var images = document.getElementById("pics");
    if (images.src.match("obama.png")){
    	images.src= "snow.png";
    	word.innerHTML= "Snow";
    	console.log("hello");
    }
    else{
    	images.src= "obama.png";
    	word.innerHTML = "Obamicon";
    	console.log("done");
    }
 }
 