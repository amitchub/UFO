// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // first clear out existing data
    // loop through each opject in the data
    // apend the row and cells for each value in the row
    //Lop through each field in the dataRow and add each value to a table cell (td)
    tbody.html('');
    data.forEach((dataRow) => {
        let row = tbody.append('tr');
        Object.values(dataRow).forEach((val) => {
            // add each value to a cell in the table, table data tag <td>
            let cell = row.append('td');
            // extract only the text of the value
            cell.text(val);
        });
    });
};


function handleClick() {
    // grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // check to see if data was entered and tilder the data using that date
    // apply ;filter to the table data to only keep rows wuth datetime values match
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // rebuild the table using the filtered data
    // if not data entered, table will be orgininal data
    buildTable(filteredData);
};

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);


// build the table  when the page loads
buildTable(tableData);