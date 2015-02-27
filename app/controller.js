$(document).on('click', '.category', function (){
	$('.category').each(function(){
    	$(this).removeAttr('id');
	});
	
    this.attr("id","active");
});