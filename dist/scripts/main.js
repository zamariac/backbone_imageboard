$(document).ready(function(){

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
	var imageList = new ImageCollection();
		imageList.fetch();
		
	var imageTemplate = _.template($('#list-template').html());
	
	$('#image').click(function(e){
		e.preventDefault();
		
	

		var newDisplay = new image({

			url:$('input').val(),
			caption:$('textarea').val()
		})

		if(newDisplay.isValid()){
			console.log(newDisplay);
			imageList.add(newDisplay);
			newDisplay.save();

		}

			newDisplay.save();

	});

		imageList.on('add', function(model){

			console.log(model.attributes);
			var imageHtml = imageTemplate(model.attributes);
			console.log(imageHtml);

			$('#imagePlace').append(imageHtml);
		})



});