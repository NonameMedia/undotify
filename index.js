var undotify = function(path, obj) {
	if(path) {
		path = path.split('.');
		path.forEach(function(key) {
			obj = obj[key];
		});
	}

	return obj;
};
