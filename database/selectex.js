var con = require('./mydb');

con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    console.log(result[2].address);
    // for example, take the 3rd address from the result array
  });

/* this is a select example, it uses the db module I made #humblebrag
the output looks something like this
[
  RowDataPacket { id: 1, name: 'Company Inc', address: 'Highway 37' },
  RowDataPacket { id: 2, name: 'John', address: 'Highway 71' },
  RowDataPacket { id: 3, name: 'Peter', address: 'Lowstreet 4' },
  RowDataPacket { id: 4, name: 'Amy', address: 'Apple st 652' },
  RowDataPacket { id: 5, name: 'Hannah', address: 'Mountain 21' },
  RowDataPacket { id: 6, name: 'Michael', address: 'Valley 345' },
  RowDataPacket { id: 7, name: 'Sandy', address: 'Ocean blvd 2' },
  RowDataPacket { id: 8, name: 'Betty', address: 'Green Grass 1' },
  RowDataPacket { id: 9, name: 'Richard', address: 'Sky st 331' },
  RowDataPacket { id: 10, name: 'Susan', address: 'One way 98' },
  RowDataPacket { id: 11, name: 'Vicky', address: 'Yellow Garden 2' },
  RowDataPacket { id: 12, name: 'Ben', address: 'Park Lane 38' },
  RowDataPacket { id: 13, name: 'William', address: 'Central st 954' },
  RowDataPacket { id: 14, name: 'Chuck', address: 'Main Road 989' },
  RowDataPacket { id: 15, name: 'Viola', address: 'Sideway 1633' },
  RowDataPacket { id: 16, name: 'Michelle', address: 'Blue Village 1' },
  RowDataPacket { id: 17, name: 'Michelle', address: 'Blue Village 1' }
] 
the require works because my module is in the same directory, I don't 
have to use the absolute path, you can run it from this folder or the 
root
*/