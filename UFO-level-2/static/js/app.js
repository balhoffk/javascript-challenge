// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
//append a table to your web page that adds new rows of data for each UFO sighting
function buildTable(data) {
	tbody.html("");
	data.forEach((dataRow) => {
		var row = tbody.append("tr");
		
		Object.values(dataRow).forEach((val) => {
			var cell = row.append("td");
			cell.text(val);
		});
	});
}

function Click() {
	//No refresh
	d3.event.preventDefault();
	
	//get datetime from filter
	var date = d3.select("#datetime").property("value");
	let filteredset = tableData;
	//If date entered, filter using date where datetime matches filter
	if(date) {
		filteredset = filtered.filter(row => row.datetime == date);
	}
	//build table using filteredset
	buildTable(filteredset);
}
d3.selectAll("#filter-btn").on("click", Click);

buildTable(tabledata);