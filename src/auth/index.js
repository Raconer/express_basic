let AuthMapper = require("../../mapper/AuthMapper");

module.exports = class AuthService{
    constructor(){
        this.authMapper = new AuthMapper();
    
    }
    
    
    selectList(callback) {
        this.authMapper.getList(null, function(data){
            callback(data);
        });
       
    };   
}