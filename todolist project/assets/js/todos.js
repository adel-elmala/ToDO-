// check the todos
$("ul").on("click","li",function(){
	$(this).toggleClass("chechked");

})

// click on x to delete the todo
$("ul").on("click","span",function(event){

	$(this).parent().fadeOut(400,function(){
		$(this).remove();
	})
	event.stopPropagation();


});
// get the text from the input
$("input[type='text']").keypress(function(event){
	// when hitting enter key 
	if(event.which === 13){
		// storing the vlaue intered by user into the textbox
	 var newToDo = $(this).val();
	 // creating new ToDo item
	 $("ul").append("<li><span><i class='fa fa-trash' ></i></span> "+ newToDo +"</li>");
	 // setting the value of text box to be empty after hitting enter 
	 $(this).val("");
	}
})
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})