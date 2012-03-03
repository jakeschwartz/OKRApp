
	$(document).ready(function(){ 	
		     $('#submit').click(function(event){
				console.log($('#kr1').val());
		 		event.preventDefault();
		 		var goal = $('#goal').val();
		 		var kr = $('#kr1').val();
		 		var quantGoal = $('#qg1').val();
		 		var quantGoalTerm =  $('#term1').val();   		
		 		var info = {
		 			"goal": goal, 
		 			'kr1': {
		 				'text': kr,
		 				"date":$('#date1').val()
		 			},
		 			'kr2': {
		     				'text': $('#kr2').val(),
		     				'quantGoal': $('#qg2').val(),
		     				'quantGoalTerms': $('#terms2').val(),
		     				'date': $('#date2').val()
		     			},
		     		'kr3': {
		     				'text': $('#kr3').val(),
		     				'quantGoal': $('#qg3').val(),
		     				'quantGoalTerms': $('#terms3').val(),
		     				'date': $('#date3').val()
		     			},
		     		'kr4': {
		     				'text': $('#kr4').val(),
		     				'quantGoal': $('#qg4').val(),
		     				'quantGoalTerms': $('#terms4').val(),
		     				'date': $('#date4').val()
		     			},
		     		"type":"objective"
		 		};
		 		$.couch.db("okrapp").saveDoc(info, {
		    		success: function(data) {
		       		 console.log(data);
		       		 window.location.href = data.id;
		    	},
		    		error: function(status) {
		        	console.log(status);
		    	}
				});
		 		
		 });
		 
		 	
	$.couch.db("okrapp").view("OKRs/objectives", {
    	success: function(data) {
        console.log(data);
        console.log(data.rows[0].key);
        for (i=0; i<data.rows.length; i++) {
    	$("body").append(data.rows[i].value + "<br>")
		}
     	},
    	error: function(status) {
        console.log(status);
    	},
    	reduce: false
    	 
	});
	
	
  						
});