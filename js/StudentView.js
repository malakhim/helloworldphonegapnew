var StudentView = function() {
	// Get the controller object
	this.controller = new StudentController();
	// Get the student list
	this.controller.getStudentList(function(iResults) {
		if(iResults.success) {
			var records = iResults.data;
			for(var counter=0; counter<records.length; counter++) {
				$('#container').append('<li id="'+records.item(counter).ID+'">' + records.item(counter).NAME+'</li>');
			}
		}
		else {
			$('#container').html(''+iResults.message+'');
		}
	});
};

a random crap of text lines