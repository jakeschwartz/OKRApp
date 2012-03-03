//document ready

$(document).ready(function(){
	//on click next step button
	$.couch.session({
    success: function(data) {
        console.log(data);
        $("#name").val(data.userCtx.name);
    	}
	});
	
	
	$("#obj-submit").click(function(event){
		var info = {
			"owner": $("#name").val(),
			"period": $("input:radio[name='period']:checked").val(),
			"division": "Executive Office",
			"objective-1": {
				"goal" : $("#objective-1").val()
			},
			"objective-2": {
				"goal" : $("#objective-2").val()
			},
			"objective-3": {
				"goal": $("#objective-3").val()
			},
			"objective-4": {
				"goal": $("#objective-4").val()
			},
		};
		$.couch.db("objkeys").saveDoc(info, {
			success: function(data) {
				console.log(data);
		    	window.location.href = data.id;
		 	},
		    error: function(status) {
		        console.log(status);
		    }
		});
	
	});

});
