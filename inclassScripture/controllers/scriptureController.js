//controller deals with the user

//connect with the model 
const model = require("../models/scriptureModel.js")
function getAllScriptures(request, response) {
    
    //database calling is expensive and we don't want to wait for it
    //we have to make it async
    model.getAllScriptures(function(err, scripture) {
        if(err) {
            const data = {
                success: false,
                message: err
            };
            response.status(500).json(data);
        }else {
        const data = {
            success: true,
            scriptures: scriptures
        };
        
        response.json(data);
        }
    });
}
//how to export the function
module.exports = {
    getAllScriptures: getAllScriptures
}

