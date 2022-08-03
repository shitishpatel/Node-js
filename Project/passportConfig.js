// const passport = require("passport");
const LocalStrategy=require('passport-local').Strategy;
const {student} = require("./db/db");
exports.initializingPassport = (passport)=>{

  passport.use(new LocalStrategy(
    function(username, password, done) {
      student.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        bcrypt.compare(password,user.password,(err,match)=>{
          if(err){
            return done(null,false);
          }
          if(!match){
            return done(null,false);
          }
          if(match){
            return done(null,user);
          }
        })
      });
    }
  ));


      passport.serializeUser((user,done)=>done(null,user.id));

      passport.deserializeUser(async (id,done)=>{
        try{
            const user= await student.findById(id);
            done(null,user);
        }catch(error){
            done(error,false);
        }
      });
};
