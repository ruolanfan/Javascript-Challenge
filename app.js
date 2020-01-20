// from data.js
var tableData = data;

// YOUR CODE HERE!


tbody = d3.select("tbody")

var tr = tbody.append('tr');

tableData.forEach(x => {
    tr.append('td').text(item.datetime);
    tr.append('td').text(item.city);
    tr.append('td').text(item.state);
    tr.append('td').text(item.country);
    tr.append('td').text(item.shape);
    tr.append('td').text(item.durationMinutes);
    tr.append('td').text(item.comments);
});

