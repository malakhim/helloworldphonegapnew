var StudentController = function() {
	 // Get the model object
	 this.model = new StudentModel();
	 // Get the student list
	 this.getStudentList = function(iCallback) { 
	 	this.model.retriveStudentList(function(iResults) {
	 		// Just pass on the result object as we don't need any manipulation right now
	 		iCallback(iResults);
	 	});
	 };
 };