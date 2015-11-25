var ToDoView = function() {
	// Get the controller object
	this.controller = new ToDoController();
	// Get the student list
	this.controller.getAllItems(function(iResults) {
		if(iResults.success) {
			var records = iResults.data;
			for(var counter=0; counter<records.length; counter++) {
				$('#container').append('<li id="'+records.item(counter).ID+'">' + records.item(counter).todo+'</li>');
			}
		}
		else {
			$('#container').html(''+iResults.todo+'');
		}
	});
};