// Class defined using a singleton
var ToDoController = function() {
	 // Get the model object
	 this.model = new ToDoModel();
	 // Get todo list
	 // this.getToDoList = function(iCallback) { 
	 // 	this.model.retrieveToDoList(function(iResults) {
	 // 		// Just pass on the result object as we don't need any manipulation right now
	 // 		iCallback(iResults);
	 // 	});
	 // };

	 // DB Migration, in order to ensure database is always filled
	 this.initialize = function(){
	 	// Items we wish to ensure are always in the database at initialisation
		var toDoItems = ["Create Todo List","Create Database"];

		// Insert items
		var index;
		for(index = 0; index < toDoItems.length, index++){
			// TODO: Check if items exist already
			this.model.createTodo(toDoItems[index]);
		}
	}

	this.getAllItems = function(iCallback){
		this.model.getAll(iCallback);
	}
 };