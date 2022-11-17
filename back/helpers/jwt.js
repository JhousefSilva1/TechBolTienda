'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'pragol2021Monithor';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        email: user.email,
        password: user.password,
        iat: moment().unix(),//inicio de token
        exp: moment().add(1,'day').unix()//tiempo de expiracion del token
    }

    return jwt.encode(payload,secret);//se ecripta con la contraseña
}