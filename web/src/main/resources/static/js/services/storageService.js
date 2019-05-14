app.service('storageService', function($q, factory) {
	var self = this;	
	var path = "files";
	self.getB64 = (file)=>{		
		return $q(function(resolve, reject) {			
			factory.get(path+'/stringb64', file).then(function mySuccess(data) {			
				resolve(data);
			}, function myError(errResponse) {
				reject(errResponse);
			});			
		});
	};
	
	self.download = (file)=>{		
		return $q(function(resolve, reject) {			
			factory.get(path+'/download', file).then(function mySuccess(data) {						
				resolve(data);
			}, function myError(errResponse) {
				reject(errResponse);
			});			
		});
	};
	
	self.save = (file)=>{		
		return $q(function(resolve, reject) {	
			let fd = new FormData();
			
			fd.append('file',file.file)
			fd.append('folder',file.folder);
			factory.postFile(path+'/save', fd).then(function mySuccess(data) {		
				resolve(data);
			}, function myError(errResponse) {
				reject(errResponse);
			});			
		});
	};
	
	self.saveFiles = (file)=>{		
		return $q(function(resolve, reject) {	
			let fd = new FormData();
			angular.forEach(file.files, function(file){
				fd.append('files',file);
			});
			fd.append('folder',file.folder);
			fd.append('userId', file.userId);
			factory.postFile(path+'/saveFiles', fd).then(function mySuccess(data) {		
				resolve(data);
			}, function myError(errResponse) {
				reject(errResponse);
			});			
		});
	};
	
	self.update = file => {
		return $q(function(resolve, reject) {	
			let fd = new FormData();
			fd.append('file',file.file);
			fd.append('folder',file.folder);
			fd.append('oldFolder', file.oldFolder);
			fd.append('oldFileName', file.oldFileName);
			factory.postFile(path+'/update', fd).then(function mySuccess(data) {		
				resolve(data);
			}, function myError(errResponse) {
				reject(errResponse);
			});			
		});
	};
	
	self.delFile = (data)=>{
		return $q(function(resolve, reject) {			
			factory.delet(path+'/delete', data).then(function mySuccess(data) {						
				resolve(data);
			}, function myError(errResponse) {
				reject(errResponse);
			});			
		});
	};
	
});