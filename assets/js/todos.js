//check off specific todos by clicking

// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)")
// 	$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 	});
// 	else{
// 		$(this).css({
// 			color: "gray",
// 			textDecoration: "line-through"
// 	});
// 	}
	
// });


$("ul").on("click" , "li",function(){  // When an li is clicked inside of a ul
	$(this).toggleClass("completed");
});

// click on X to delet tudo
// bubble problem
$("ul").on("click" , "span" ,function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();  //we used this.remove instead of (this).parent().remove() coz currently our object is the parent itself
	});  //removing parent of span which is an li
	event.stopPropagation(); // to stop bubble problem	
});

$("input[type='text']").keypress(function(event){
	if(event.which ===13){         //event.which gives the ASCII value of the key pressed
		var tudoText = $(this).val(); //val() gives the value of the object
		$(this).val("");
		//create a li and add it to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + tudoText + "</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})
