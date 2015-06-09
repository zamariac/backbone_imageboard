$(document).ready(function(){
	// var todoList = new imageCollection();
	// todoList.fetch();

	$('#dropdown').hide();

	$('#plus').click(function(e){
		e.preventDefault();
		// $('#dropdown').show();

		if ($('#dropdown').is(":visible")){
			$('#dropdown').hide()
		}

		else {

			$('#dropdown').show()

		}

	});

	var imageTemplate = _.template($('#list-template').html());
	
	$('#image').click(function(e){
		e.preventDefault();
		
	

		var newDisplay = new Image({
			url:$('input').val(),
			caption:$('textarea').val()
		})

	})



});