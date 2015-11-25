// Class defined using a singleton
var DatabaseUtility = new function() {

	// this.init = function(){
		// Open database
		try{
			this.db = window.openDatabase("todo","1.0","todo DB",10000000);
		}
		catch(iException){
			console.log(iException);
			this.db = false;
		}
	// }

	// this.init();

	// Create todo table if it doesn't exist
	this.db.transaction(function(iTx){
		tx.executeSql("CREATE TABLE IF NOT EXISTS " + "todo(ID INTEGER PRIMARY KEY ASC, todo TEXT, completed BOOLEAN",[]);
	});

	this.setRow = function(todoText){
		if(this.db){
			this.db.transaction(function(iTx){
				iTx.executeSql("INSERT INTO todo(todo, completed) VALUES (?,?)",[todoText,false]);
			});
		}
	}

	this.getRow = function(iCallback){
		if(this.db){
			this.db.transaction(function(iTx){
				iTx.executeSql("SELECT * FROM todo", [],
					function(iTx, iResults){
						if(iResults.rows.length > 0){
							iCallback({
								success: true,
								data: iResults.rows.item(0),
							});
						}
						else{
							iCallback({
								success: false,
								message: 'No todo item available.'});
							}
					},
					function(){
						iCallback({
							success: false,
							message: 'Failed to retrieve todo records.',
						});
					}
				);
			});
		}
	}

	this.getRows = function(iCallback){
		if(this.db){
			this.db.transaction(function(iTx){
				iTx.executeSql("SELECT  * FROM todo", [],
					function(iTx, iResults){
						if(iResults.rows.length > 0){
							iCallback({
								success: true,
								data: iResults.rows.item(0),
							});
						}
						else{
							iCallback({
								success: false,
								message: 'Item not found'});
							}
					},
					function(){
						iCallback({
							success: false,
							message: 'Failed to retrieve record.',
						});
					}
				);
			});
		}
	}	


	this.retrieveToDoList = function(iCallback){
		if(this.db){
			this.db.transaction(function(iTx){
				iTx.executeSql("SELECT * FROM todo", [],
					function(iTx, iResults){
						if(iResults.rows.length > 0){
							iCallback({
								success: true,
								data: iResults.rows,
							});
						}
						else{
							iCallback({
								success: false,
								message: 'No todo items available.'});
							}
					},
					function(){
						iCallback({
							success: false,
							message: 'Failed to retrieve records.',
						});
					}
				);
			});
		}
	}

	this.query = function(iCallback,queryTxt){
		if(this.db){
			this.db.transaction(function(iTx){
				iTx.executeSql(queryTxt,[],
					function(iTx, iResults){
						if(iResults.rows.length > 0){
							iCallback({
								success: true,
								data: iResults.rows,
							});
						}else{
							iCallback({
								success: false,
								message: 'No items found',
							});
						}
					},
					function(){
						iCallback({
							success: false,
							message: 'Query failed. Please check query.',
						});
					}
				);
			});
		}
	}
 };