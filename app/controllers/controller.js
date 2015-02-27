$(document).on('click', '.category', function (){
	$('.category').each(function(){
		if(this.id = "active"){
    		$(this).removeAttr('id');
    	}
	});
	
    this.id = "active";
});