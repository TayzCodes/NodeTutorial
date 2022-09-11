var configValues = require("./config");

module.exports = {
    getDbConnectionString : function(){
        return "mongodb+srv://"+configValues.uname + ":" + configValues.pwd + "@cluster0.28gy0rm.mongodb.net/nodetodosample";
    }
}

// mongodb+srv://<user_name>:<pass_word>@cluster0.28gy0rm.mongodb.net/myFirstDatabase

