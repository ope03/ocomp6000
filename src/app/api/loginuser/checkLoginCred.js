var mysql = require('mysql2/promise');



export default async function checkLoginCredentials(username, password) { //async function awaits to be called upon
    
    var con = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "mydb"
    });
    try {
        console.log("connected!") //attempt to connect successful
        const [result] = await con.execute("SELECT * FROM users WHERE username = ? AND password = ?", [username, password]); //runs query on db and store in result
        console.log(result.length);
        if (result.length > 0) { return true; } else { return false; } //if is satisifed login is true else falsee
    } catch (err) { console.log(err);
        console.log('Login Not Successful due to error'); return false; } //error message
    finally {
        await con.end(); //closes connection to database
    }

};

