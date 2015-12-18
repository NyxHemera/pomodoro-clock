$( document ).ready(function() {
	var breaklength = 5;
	var sessionlength = 25;
	var timeleft = 120;
	var currenttime = 0;
	var diff = 103;
	var d = new Date();
	
	var timeup = false;
	var timerstarted = false;
	var issession = true;
	
	var myVar = setInterval(function(){ timeUpdate() }, 1000);

	function sessionManager() {
				
		//set minutes
		if(timeleft / 60 > 0){
			var minutes = Math.floor(timeleft / 60);
			if(minutes < 10){
				$('#minutes').text("0" + minutes + ":");
			}else{
				$('#minutes').text(minutes + ":");
			}
		}else{
			$('#minutes').text("00:");
		}

		//set seconds
		if(timeleft - (minutes*60) > 0){
			var seconds = Math.floor(timeleft % 60);
			if(seconds < 10){
				$('#seconds').text("0" + seconds);
			}else{
				$('#seconds').text(seconds);
			}
		}else{
			$('#seconds').text("00");
		}

		timeleft--;

		if(timeleft < 0) {
			issession = false;
			timeleft = (breaklength * 60);
			$('.timer-type').text("Break");
		}
	}
	
	function breakManager() {

		//set minutes
		if(timeleft / 60 > 0){
			var minutes = Math.floor(timeleft / 60);
			if(minutes < 10){
				$('#minutes').text("0" + minutes + ":");
			}else{
				$('#minutes').text(minutes + ":");
			}
		}else{
			$('#minutes').text("00:");
		}

		//set seconds
		if(timeleft - (minutes*60) > 0){
			var seconds = Math.floor(timeleft % 60);
			if(seconds < 10){
				$('#seconds').text("0" + seconds);
			}else{
				$('#seconds').text(seconds);
			}
		}else{
			$('#seconds').text("00");
		}

		timeleft--;

		if(timeleft < 0) {
			issession = true;
			timeleft = (sessionlength * 60);
			$('.timer-type').text("Session");
		}
	}
	
	function timeUpdate() {
		
		if(timerstarted){
			if(issession){
				sessionManager();
			}else{
				breakManager();
			}
			
		}
		
	}


	$("#inc-break").on( "click", function() {
		breaklength++;
		$('#breaklength').text(breaklength);
	});
	
	$("#dec-break").on( "click", function() {
		if(breaklength > 0) {
			breaklength--;
			$('#breaklength').text(breaklength);
		}
	});
	
	$("#inc-session").on( "click", function() {
		sessionlength++;
		$('#sessionlength').text(sessionlength);
		
		//if setting the initial time, change the time showing on the timer
		if(!timerstarted) {
			$('#minutes').text(sessionlength + ":");
		}
	});
	
	$("#dec-session").on( "click", function() {
		if(sessionlength > 0) {
			sessionlength--;
			$('#sessionlength').text(sessionlength);
		}
		
		//if setting the initial time, change the time showing on the timer
		if(!timerstarted) {
			$('#minutes').text(sessionlength + ":");
		}
	});
	
	$(".container-timer").on( "click", function() {
		timeleft = (sessionlength * 60);
		$('.timer-type').text("Session");
		timerstarted = true;
	});
	
});