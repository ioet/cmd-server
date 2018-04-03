var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");

var models = require('express-cassandra')

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions = {}

jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
jwtOptions.secretOrKey = process.env.JWT_SECRET;

passport.use(process.env.SA_ROLE, new JwtStrategy(jwtOptions, (jwt_payload, next) => {
    
    const { email } = jwt_payload

    models.instance.Users.findOne({ email: email }, (err, user) => {
      if(user && user.role === process.env.SA_ROLE) next(null, user);
      next(null,false)
    })
  })
)
