// create variables to pull values from form field and submit button
var input = document.querySelector('#city-type');
var submit = document.querySelector('#submit-btn');
// var img = document.querySelector('#planet');


// listen for the click or keyup event 
$(input).keyup(changeThePhoto );
$(submit).click(changeThePhoto);

function changeThePhoto(event){
	
	// check the value of the input
	var value = $(input).val(); // depending on the value
	value = value.toLowerCase().trim(); // changes to lowercase
	
	if(value === 'nyc') {
		$(document.body).addClass('nyc');
	} else if (value === 'sf') {
		$(document.body).addClass('sf');
	} else if (value === 'sydney') {
		$(document.body).addClass('sydney');
	} else if (value === 'austin'){
		$(document.body).addClass('austin');
	} else if (value === 'la'){
		$(document.body).addClass('la');
	} else {
		
	}
}