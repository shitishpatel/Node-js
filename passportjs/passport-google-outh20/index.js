const express =require('express');
const passport=require('passport');
const googleStrategy=require("passport-google-oauth20");
const app = express();
passport.use(new googleStrategy({
    clientID:"1014418637775-5gc6c43rql2m4tnh05fie2om9jbqln1f.apps.googleusercontent.com",
clientSecret : "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",
callbackURL :"/auth/google/callback"

},(accessToken,refreshToken,profile,done)=>{
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
}))

app.get("/auth/google",passport.authenticate("google",{
    scope:["profile","email"]
}))

app.get("auth/google/callback",passport.authenticate("google"))

const port=process.env.PORT || 3000;
app.listen(port);




clientID="1014418637775-5gc6c43rql2m4tnh05fie2om9jbqln1f.apps.googleusercontent.com"
clientSecret = "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"
callbackURL ="/auth/google/callback"
