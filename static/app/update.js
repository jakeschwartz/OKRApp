

$.couch.db("objkeys").openDoc($("#docid").val(),{
	success:
		function step3(data) {
		
		$("#delete").click(function() {
			var doc = {
				_id: data._id,
				_rev: data._rev
			};
			$.couch.db("objkeys").removeDoc(doc, {
				success: function(data){
					console.log(data);
				},
				error: function(status){
					console.log(status);
				}
			});
		
		
		});
		
		
		
		$("#submit").click(function() {
			var doc = {
				"_id":data._id,
				"_rev": data._rev,
				"division" : data.division,
				"owner" : data.owner,
				"period": $("#period").val(),
				"objective-1": {
					"goal": data["objective-1"].goal,
					"kr1": $("#objective-1-kr input:eq(0)").val(),
					"kr2": $("#objective-1-kr input:eq(1)").val(),
					"kr3": $("#objective-1-kr input:eq(2)").val(),
					"kr4": $("#objective-1-kr input:eq(3)").val()
				},
				"objective-2": {
					"goal": data["objective-2"].goal,
					"kr1": $("#objective-2-kr input:eq(0)").val(),
					"kr2": $("#objective-2-kr input:eq(1)").val(),
					"kr3": $("#objective-2-kr input:eq(2)").val(),
					"kr4": $("#objective-2-kr input:eq(3)").val()
				},
				"objective-3": {
					"goal": data["objective-3"].goal,
					"kr1": $("#objective-3-kr input:eq(0)").val(),
					"kr2": $("#objective-3-kr input:eq(1)").val(),
					"kr3": $("#objective-3-kr input:eq(2)").val(),
					"kr4": $("#objective-3-kr input:eq(3)").val()
				},
				"objective-4": {
					"goal": data["objective-4"].goal,
					"kr1": $("#objective-4-kr input:eq(0)").val(),
					"kr2": $("#objective-4-kr input:eq(1)").val(),
					"kr3": $("#objective-4-kr input:eq(2)").val(),
					"kr4": $("#objective-4-kr input:eq(3)").val()
				}
			
			};
			$.couch.db("objkeys").saveDoc(doc,{
		    	success: function(data) {
		       		console.log(data);
		       		window.location.reload()
		    	},
		    	error: function(status) {
		        	console.log(status);
		   	 	}
			});
		});
	}
});



	


