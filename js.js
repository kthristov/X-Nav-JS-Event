
box = document.getElementById("box");

box.addEventListener("input", function(){
	console.log(box.value)
    document.body.style.backgroundColor = box.value ;
});
