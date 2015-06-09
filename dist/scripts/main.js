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





});