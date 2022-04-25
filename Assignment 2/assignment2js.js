function createTable()
{
    var rows = document.getElementById('rows').value;
    var columns = document.getElementById('columns').value;
    //grab form data/user input from HTML file and assign it to variables

    var theader = '<table id= "gentable" border="1">\n';
    //create the CSS style for the generated table;

    var tbody = '';

    for( var i=1; i<=rows;i++)
    {
        //For int i < number of rows specified in form, run for loop
        tbody += '<tr>';
        //create a single <tr> or row header for number of rows specifed
        for( var j=1; j<= columns;j++)
        {
            //run for loop after row is created for each column specified by user input in form
            tbody += '<td>';
            //add a <td> or table data header
            tbody +=  i + ',' + j;
            //add 'row, column' to table data
            tbody += '</td>'
            //close <td> or table data header

        }
        tbody += '</tr>\n';
        //close <tr> or row header
    }
    var tfooter = '</table>';
    //close <table> header

    document.getElementById('customtableHolder').innerHTML = theader + tbody + tfooter;
    //Generate a table structured via concatenation in pre-generated <div> by vars defined earlier in file 
}

function pregenTable()
{
    var rows = 15;
    var columns = 15;
    //grab form data/user input from HTML file and assign it to variables

    var theader = '<table id= "gentable" border="1">\n';
    //create the CSS style for the generated table;

    var tbody = '';

    for( var i=1; i<=rows;i++)
    {
        //For int i < number of rows specified in form, run for loop
        tbody += '<tr>';
        //create a single <tr> or row header for number of rows specifed
        for( var j=1; j<= columns;j++)
        {
            //run for loop after row is created for each column specified by user input in form
            tbody += '<td>';
            //add a <td> or table data header
            tbody +=  i + ',' + j;
            //add 'row, column' to table data
            tbody += '</td>'
            //close <td> or table data header

        }
        tbody += '</tr>\n';
        //close <tr> or row header
    }
    var tfooter = '</table>';
    //close <table> header

    document.getElementById('customtabledHolder').innerHTML = theader + tbody + tfooter;
    //Generate a table structured via concatenation in pre-generated <div> by vars defined earlier in file 
}