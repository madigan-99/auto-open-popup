var ur = prompt("What is the url?");
var end = prompt("end?");


var stuName = []; 


if (end === null) {
	end = "";
};
if (ur !== null) {
	stuName.forEach(function(item, index, array) {
			var temp = ur + item + end;
			window.open(temp);
	});
	
}

