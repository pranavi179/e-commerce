var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');
var crypto = require('crypto');
var bodyParser = require('body-parser'), bcrypt = require('bcrypt');
// const MongoStore = require('connect-mongo')(session);
// const session = require('express-session');
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
  }

});


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required : true
  },

  image:{
    type:String,
    required : true
  },

  price:{
    type:String,
    required : true
  }
});


var User = mongoose.model("User", userSchema);

var Product = mongoose.model("Product", productSchema);

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
  // console.log("PASSSSSSSSSSSSSSSS", doc.password, data.password )
 // console.log(doc.password);
 // user_n= doc.password;
// localstorage.setItem(token:"hashvalue");




// console.log("///////////",doc.username);
        // test a matching password

       

// bcrypt.hash(data.password, 10, function(err, hash) {
//           if (err) {
//             console.log("Error in hashing")
//           };



//         console.log(doc.password)
//         console.log(hash);


        // if(doc.password==hash){
        //   res.send("Success");
        // }
        // else{
        //   res.send("failedd");
        // }




    bcrypt.compare(data.password, doc.password, function(err, isMatch) {
      console.log("ERRRRRRRRRRRRRRRRRRRRORRRRRRRRRRRRr", err, isMatch)
          if (err) {console.log("error",err);}
           if(isMatch){
            console.log("Match");
            res.send("Matched")
            // res.send("Signed in");
          }
          else{
            res.send("Didn't match");
            console.log("Doesn't match")
          }
    });
    });

});
 
// });


app.post("/addproduct", (req, res) => {
  let data = req.body;
       var myData = new Product(data);
         myData.save()
         .then(item => {
         res.send("item saved to database");
         })
         .catch(err => {
         res.status(400).send("unable to save to database");
        })
  });

app.post("/adduser", (req, res) => {
  let data = req.body;

   

      // hash the password along with our new salt
      bcrypt.hash(data.password, 10, function(err, hash) {
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

app.post("/getproduct",(req,res)=>{
  // let data =req.body;

// Product.findOne({ title: data.title },function (err, doc){
Product.findOne().sort({$natural: -1}).limit(1).exec(function(err, doc){
    if(err){
        console.log(err);
    }
    else{
        res.send(doc);
    }
});
// Product.findOne({ name: "shirt" },function (err, doc){
// console.log();

// console.log(adam);s
// res.send(doc.price);
});


// })

// })

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(session({
//     secret: 'my-secret',
//     resave: false,
//     saveUninitialized: true,
//     store: new MongoStore({ mongooseConnection: db })
// }));

app.use(express.static(path.join(__dirname, 'public')));

// app.use(session({
//     secret: 'Insert randomized text here',
//     resave: false,
//     saveUninitialized: false
// }));

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



