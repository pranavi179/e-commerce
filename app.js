var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var crypto = require('crypto');
var bodyParser = require('body-parser'), bcrypt = require('bcrypt');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required : true
  },

  password:{
    type:String,
    required : true
  },

salt:{

  type:String,
},

  hash:{
    type:String,

  }

});



var User = mongoose.model("User", userSchema);
//Get the default connection
var db = mongoose.connection;



//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/signin", (req, res) => {
//  res.render(__dirname + "/views/signin.ejs");
// });


// userSchema.body-parser('save', function(next) {
//     var user = this;
//     console.log("///////");
//     // only hash the password if it has been modified (or is new)
//     if (!user.isModified('password')) return next();

//     // generate a salt
//     bcrypt.genSalt(function(err, salt) {
//         if (err) return next(err);

//         // hash the password along with our new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);

//             // override the cleartext password with the hashed one
//             console.log(hash);
//             user.password = hash;
//             next();
//         });
//     });
// });






// app.use("/signup", (req, res) => {
//  res.render(__dirname + "/views/signup.ejs");
// });

app.post("/login", (req,res) =>{

  // console.log("heloooooo");
let data= req.body;
// console.log(data);
// console.log(data.username);
User.findOne({ username: data.username },function (err, doc){
 // console.log(doc.password);
 // user_n= doc.password;
// localstorage.setItem(token:"hashvalue");

// console.log("///////////",doc.password);
        // test a matching password
    bcrypt.compare(doc.password, data.password, function(err, isMatch) {
          if (err) {console.log("error",err);}
          else{
            console.log("Match");
            res.send("Signed in");

          }
    });

});
 
});






app.post("/adduser", (req, res) => {
  let data = req.body;

   bcrypt.genSalt(function(err, salt) {
      if (err){
        console.log("ERRRRRRRRRRRRRRRRRRRRor");
      };

      // hash the password along with our new salt
      bcrypt.hash(data.password, salt, function(err, hash) {
          if (err) {
            console.log("Error in hashing")
          };

          // override the cleartext password with the hashed one
          console.log("Hash", hash);
          data.password = hash;
          console.log("DAta", data)
         var myData = new User(data);
         myData.save()
         .then(item => {
         res.send("item saved to database");
         })
         .catch(err => {
         res.status(400).send("unable to save to database");
         });
      });
  });
 });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



