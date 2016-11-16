/* this is a comment! */

var alan=
{
	name: Alex,
	age: 30,
	profile:"http://www.amazon.com"
	img:""
}

var brad ={
	name: Brad,
	age: 30,
	profile:"http://www.yelp.com"
	img:""
}

var carl={
	name: Carl,
	age: 30,
	profile:"http://www.facebook.com"
	img:""
}


var zombies= [alan, brad, carl];

function NextImage()
{
zombies++
if(zombies==zombies.length)
	zombies=0

document.images["Image"].src = img[imgNumber]


//Figure out:
//buttons, clicking links
//objects
//arrays








imgNumber++
if (imgNumber == img.length)
    imgNumber = 0
document.images["Image"].src = img[imgNumber]
console.log("This Worked!")

likesNumber++
if (likesNumber == likes.length)
    likesNumber = 0
document.getElementById("info").innerHTML = likes[likesNumber]
console.log("This worked twice!")

linksNumber++
if (linksNumber == links.length)
   linksNumber= 0
document.getElementById("Yes").href = links[linksNumber]

}




}




