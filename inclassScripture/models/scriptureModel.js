/*for the example of an actual database 
const {Pool} = require("pg");
const conn = "something";
pool = Pool({connectionString: conn});
*/
//model handles the database. this is where you make your
//actual fetch, ajax, jquery call

//callback allows for the async to work
function getAllScriptures(callback) {
    //this is pretending a bad thing happens for the database
    const badThings = false;
    if (badThings == true) {
        err = "Error in getting scriptures"
        callback(err, null);
    }
 /* if this were an actual database, this would be about how to do it:
    pool.query("SELECT id, book, chapter, verse FROM scripture", function(err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result.rows);
        }
    });
    */
        const scriptures = [
            {id: 1, book: "Helaman", chapter: 5, verse: 12},
            {id: 2, book: "John", chapter: 13, verse: 14},
            {id: 3, book: "Ether", chapter: 12, verse: 6}
        ]  
       
      //this calls the anonymous function in the getAllScriptures in the controller and 
      //passes it the data
      callback(null, scriptures);
   
}
module.exports = {
    getAllScriptures: getAllScriptures
}