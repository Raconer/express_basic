const mybatisMapper = require('mybatis-mapper');
mybatisMapper.createMapper([ './mapper/xml/AuthMapper.xml' ]); 
let getQuery = require('../db/index');
let format = {language: 'sql', indent: '  '};

module.exports = class AuthMapper{
    getList(param, callback){
        var param = {};  
        var query = mybatisMapper.getStatement('authMapper', 'getList', param, format);
     
        getQuery(query, (err, results) =>{
           callback(results);
        });
    }
}