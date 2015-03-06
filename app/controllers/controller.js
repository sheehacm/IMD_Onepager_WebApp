
//This changes the active Category
$(document).on('click', '.category', function (){
	$('.category').each(function(){
		if(this.id = "active"){
    		$(this).removeAttr('id');
    	}
	});	
    this.id = "active";
    setIcons();
    setIconOpacity();
});



//Displays the Splash window for the selected icon
$(document).on('click', '.categoryType', function (){
	//display splash page and sets properties
	if ($(this).css("opacity") !== "0.5"){
		$('.splashIcons').css("visibility", "visible");
		$('.splashIcon').attr('src', this.src);
		$('.splashIcon').attr('name', this.name);
		$('.splashIcon').attr('title', this.title);
		$('#iconTitle').html(this.name);
		$('#iconCat').html(this.title);
	}	
});



//Events after selected from splash screen
$(document).on('click', '.select', function (){
	//sets selected icon
	var selected = $('.splashIcon').attr('src');
	var name = $('.splashIcon').attr('name');
	var title = $('.splashIcon').attr('title');
	//array for selected list
	var selectedList = [
		$('#one'),
		$("#two"),
		$("#three"),
		$("#four")
	];
	var i;

	//sets the icon in selected List
	for (i = 0; i < selectedList.length; ++i) {
		//if the image is the white box, the selected image replaces it
    	if (selectedList[i].attr('src') === "../assets/newbuttons/white_button_glow.png"){
			selectedList[i].attr('src', selected);
			selectedList[i].attr('name', name);
			selectedList[i].attr('title', title);
		}

		//if the image is an X box, the whitebox replaces it
		if (selectedList[i].next().attr('src') === "../assets/newbuttons/white_button_top_X.png"){
			selectedList[i].next().attr('src', "../assets/newbuttons/white_button_glow.png");
			selectedList[i].next().css('visibility', "visible");
			{break};
		}
	}

	setIconOpacity();	

	//close splash screen
	$('.splashIcons').css("visibility", "hidden");	
});



//When an icon from the selected category is selcted this function removes it from the list
$(document).on('click', '.selectedIcons', function (){
	
	//array of elements from the selected category
	var selectedList = [
		$('#one'),
		$("#two"),
		$("#three"),
		$("#four")
	];

	//variable to set the selected element
	var selected = $(this);
	var i;
	var s;

	//for loop sets the appropiate properties
	for (i = 0; i < selectedList.length; ++i) {
		//if the icon is the white box or the xbox, the name and title attributes become equal to "none"
		if (selectedList[i].attr('src') === "../assets/newbuttons/white_button_top_X.png" || selectedList[i].attr('src') === "../assets/newbuttons/white_button_glow.png"){
			selectedList[i].attr('name', 'none');
			selectedList[i].attr('title', 'none');
		}

		//if the selected element equals the element in the array list s equals the position in the array and the loop breaks
		if (selected.attr('src') === selectedList[i].attr('src')){
			s = i;
			break;
		}
	}

	//if the selected button is not the white boc or x box...
	if (selected.attr('src') !== "../assets/newbuttons/white_button_top_X.png" && selected.attr('src') !== "../assets/newbuttons/white_button_glow.png"){
		
		//for all elements after selected element, the element attributes equals the attributes of the next element in the array
		for (s; s < selectedList.length; ++s) {
			if (selectedList[s].attr('src') !== "../assets/newbuttons/white_button_glow.png"){
				selectedList[s].attr('src', selectedList[s].next().attr('src'));
				selectedList[s].attr('name', selectedList[s].next().attr('name'));
				selectedList[s].attr('title', selectedList[s].next().attr('title'));
			}
		}

		//for each element, if it equals "whitebox" the following becomes the "xbox", if it is the "xbox" then the following also becomes "xbox"
		for (i = 0; i < selectedList.length; ++i) {
			if(selectedList[i].attr('src') === "../assets/newbuttons/white_button_glow.png"){
				selectedList[i].next().attr('src', "../assets/newbuttons/white_button_top_X.png");
			}
			if(selectedList[i].attr('src') === "../assets/newbuttons/white_button_top_X.png"){
				selectedList[i].next().attr('src', "../assets/newbuttons/white_button_top_X.png");
			}
		}
		
		//if the last icon is not "whitebox" or "xbox" then it becomes a "whitebox"
		if(selectedList[3].attr('src') !== "../assets/newbuttons/white_button_top_X.png" && selectedList[3].attr('src') !== "../assets/newbuttons/white_button_glow.png"){
				selectedList[3].attr('src', "../assets/newbuttons/white_button_glow.png");
				selectedList[3].attr('name', "none");
				selectedList[3].attr('title', "none");
		}

		//these next 2 if statements hides the appropiate "xboxs" 
		if(selectedList[1].attr('src') === "../assets/newbuttons/white_button_top_X.png" || selectedList[1].attr('src') === "../assets/newbuttons/white_button_glow.png"){
			selectedList[2].css('visibility', "hidden");
			selectedList[3].css('visibility', "hidden");
		}

		if(selectedList[2].attr('src') === "../assets/newbuttons/white_button_glow.png"){
			selectedList[3].css('visibility', "hidden");
		}
	}	

	setIconOpacity();	
});	



//Removes the Splash Screen
$(document).on('click', '.splashIcons', function (){
	$('.splashIcons').css("visibility", "hidden");
});



//This sets the opacity for the icons
function setIconOpacity(){
	//array for selected list
	var selectedList = [
		$('#one'),
		$("#two"),
		$("#three"),
		$("#four")
	];

	//array for category list
	var categoryList = [
		$('#0'),
		$('#1'),
		$('#2'),
		$('#3'),
		$('#4'),
		$('#5')
	];

	var i;
	var set;

	//sets all opacity to normal
	for (i = 0; i < categoryList.length; ++i) {
			categoryList[i].css('opacity', "initial");
	}

	//if the name and title of the two arrays are the same then the opacity is set to 0.5
	for (i = 0; i < selectedList.length; ++i) {
		var selected = selectedList[i].attr('name');
		var title = selectedList[i].attr('title');
		var c;

		if (set == true) break;

		for (c = 0; c < categoryList.length; ++c) {
			if (categoryList[c].attr('name') === selected && categoryList[c].attr('title') === title){
				categoryList[c].css('opacity', "0.5");
				set == true;
			}
		}	
	}	
}



//This sets the icons for the different categorys
function setIcons(){
	var one = $('#0');
	var two = $('#1');
	var three = $('#2');
	var four = $('#3');
	var five = $('#4');
	var six = $('#5');

	var array = [one, two, three, four, five, six];
	var i;

	if ($("[title= 'academic']").attr('id') === "active"){
		//image  sources
		one.attr('src', "../assets/newbuttons/Strengths/Academic/english-writing.png");
		two.attr('src', "../assets/newbuttons/Strengths/Academic/geography.png");
		three.attr('src', "../assets/newbuttons/Strengths/Academic/language.png");
		four.attr('src', "../assets/newbuttons/chemistrys.png");
		five.attr('src', "../assets/newbuttons/Strengths/Academic/math_2.png");
		six.attr('src', "../assets/newbuttons/Strengths/Academic/art-music.png");
		five.css("visibility", "visible");
		six.css("visibility", "visible");

		//image names
		one.attr('name', "Writing & English");
		two.attr('name', "Geography");
		three.attr('name', "Language");
		four.attr('name', "Science");
		five.attr('name', "Math");
		six.attr('name', "Art & Music");

		//image titles
		for (i = 0; i < array.length; ++i) {
			array[i].attr('title', "Academic");
		}
	}

	if ($("[title= 'extra_curricular']").attr('id') === "active"){
		//image  sources
		one.attr('src', "../assets/newbuttons/Strengths/Extra_Curricular/clubss.png");
		two.attr('src', "../assets/newbuttons/Strengths/Extra_Curricular/musics.png");
		three.attr('src', "../assets/newbuttons/Strengths/Extra_Curricular/outdoor_activity.png");
		four.attr('src', "../assets/newbuttons/Strengths/Extra_Curricular/scouts.png");
		five.css("visibility", "hidden");
		six.css("visibility", "hidden");
		//five.attr('src', "../assets/newbuttons/Strengths/Academic/math_2.png");
		//six.attr('src', "../assets/newbuttons/Strengths/Academic/art-music.png");

		//image names
		one.attr('name', "Clubs");
		two.attr('name', "Music");
		three.attr('name', "Outdoor Activity");
		four.attr('name', "Scouts");

		//image titles
		for (i = 0; i < array.length; ++i) {
			array[i].attr('title', "Extra Curricular");
		}
	}		

	if ($("[title= 'social']").attr('id') === "active"){
		//image  sources
		one.attr('src', "../assets/newbuttons/Strengths/Social/coach.png");
		two.attr('src', "../assets/newbuttons/Strengths/Social/extended_familys.png");
		three.attr('src', "../assets/newbuttons/Strengths/Social/familys.png");
		four.attr('src', "../assets/newbuttons/Strengths/Social/friendss.png");
		five.attr('src', "../assets/newbuttons/Strengths/Social/new_friend.png");
		six.attr('src', "../assets/newbuttons/Strengths/Social/teacher.png");
		five.css("visibility", "visible");
		six.css("visibility", "visible");

		//image names
		one.attr('name', "Coaches");
		two.attr('name', "Extended Family");
		three.attr('name', "Immediate Family");
		four.attr('name', "Friends");
		five.attr('name', "New Freinds");
		six.attr('name', "Teachers");

		//image titles
		for (i = 0; i < array.length; ++i) {
			array[i].attr('title', "Relationships");
		}
	}
}

