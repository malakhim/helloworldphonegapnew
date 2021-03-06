// Class defined using a singleton
var TodoModel = function(){
	this.db = new DatabaseUtility();

	this.createTodo = function(todoText){
		this.db.setRow(todoText);
	};

	this.getAll = function(iCallback){
		this.db.retrieveToDoList(iCallback);
	}
}