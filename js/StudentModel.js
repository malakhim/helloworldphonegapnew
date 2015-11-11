var StudentModel = function(){
	// Open database
	try{
		this.db = window.sqlitePlugin.openDatabase({name:"student"});
	}
	catch(iException){
		this.db = false;
	}

	// Get student list
	this.retrieveStudentList = function(iCallback){
		if(this.db){
			this.db.transaction(function(iTx){
				iTx.executeSql("SELECT * FROM STUDENTS", [],
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
								message: 'No student available.'});
							}
					},
					function(){
						iCallback({
							success: false,
							message: 'Failed to retrieve student records.',
						});
					}
				);
			});
		}
	}
}