function startTime() {
		var today = new Date();

		var hours = today.getHours();
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();

		minutes = checkTime(minutes);
  	seconds = checkTime(seconds);

		document.getElementById('hour-display').innerHTML = hours + ':' + minutes + ':' + seconds;

		var t = setTimeout(startTime, 500);

	}

	function checkTime(i) {
  	if (i < 10) {i = "0" + i};
  	return i;
	}
	
	$(document).ready(function(){
		var today = new Date();

		var hours = today.getHours();
		
		if (hours >= 11 && hours <= 15) {
			$('#fade-out').hide(function(){
				$('h3').html('Good Afternoon, Melliana');
				$('#fade-out').fadeIn(750);
			});

			$('#afternoon').html('"Keep Up the Good Work !"');
		};

		if (hours >= 16 && hours <= 20) {
			$('#fade-out').hide(function(){
				$('h3').html('Good Evening, Melliana');
				$('#fade-out').fadeIn(750);
			});

			$('#evening').html('"how was your day ? Hope you have a great day !"');
		};

		if (hours >= 21 && hours <= 23) {
			$('#fade-out').hide(function(){
				$('h3').html('Good Night, Melliana');
				$('#fade-out').fadeIn(750);
			});

			$('#night').html('"Sleep tight, have a good rest"');

		}

		if (hours >= 0 && hours <= 10) {
			$('h3').hide(function(){
				$('h3').html('Good Morning, Melliana');
				$('h3').fadeIn(750);
			});

			$('#morning').html('"Morning Sunshine, hope you have a gret day !"');
		};

	});
