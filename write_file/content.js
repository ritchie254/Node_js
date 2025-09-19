const {readFile, writeFile} = require('fs')


writeFile('./names.txt', "richard", (err, result) => {
	if (err){
		console.log(err)
		return;
	}
	readFile('./names.txt', 'utf8', (err, result) =>{
		if (err){
			console.log(err)
			return;
		}
		//const nam = result;
		writeFile('./names.txt', '\nsamo', {flag:'a'}, (err, result) => {
			if (err){
				console.log(err)
				return;
			}
			console.log(result);
			})
		})
	})
