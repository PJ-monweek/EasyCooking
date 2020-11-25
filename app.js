var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var thaimenuRouter = require('./routes/thaimenu');
var chinesemenuRouter = require('./routes/chinesemenu');
var westernmenuRouter = require('./routes/westernmenu');
var koreanmenuRouter = require('./routes/koreanmenu');
var dessertRouter = require('./routes/dessert');
var t_padbasilRouter = require('./routes/t_padbasil');
var t_shrimpfriedriceRouter = require('./routes/t_shrimpfriedrice');
var t_tomyamkungRouter = require('./routes/t_tomyamkung');
var t_greencurryRouter = require('./routes/t_greencurry');
var t_padthaiRouter = require('./routes/t_padthai');
var t_stirfriedchilichickenRouter = require('./routes/t_stirfriedchilichicken');
var c_friedpoisianRouter = require('./routes/c_friedpoisian');
var c_fishmawsoupRouter = require('./routes/c_fishmawsoup');
var c_porkdumplingRouter = require('./routes/c_porkdumpling');
var c_shrimppottedvermicelliRouter = require('./routes/c_shrimppottedvermicelli');
var c_emperorbakedriceRouter = require('./routes/c_emperorbakedrice');
var c_braisedduckchestnutRouter = require('./routes/c_braisedduckchestnut');
var w_salmonsteakRouter = require('./routes/w_salmonsteak');
var w_bakedspinachcheeseRouter = require('./routes/w_bakedspinachcheese');
var w_honeymustardchickenRouter = require('./routes/w_honeymustardchicken');
var w_salmoncreampastaRouter = require('./routes/w_salmoncreampasta');
var w_hamcheesecroissantRouter = require('./routes/w_hamcheesecroissant');
var w_mashedpotatowithcheeseandbacon2Router = require('./routes/w_mashedpotatowithcheeseandbacon2');
var k_koreanfriedchickenRouter = require('./routes/k_koreanfriedchicken');
var k_kimbapRouter = require('./routes/k_kimbap');
var k_kimchijjigaeRouter = require('./routes/k_kimchijjigae');
var k_bibimbapRouter = require('./routes/k_bibimbap');
var k_tubukimchiRouter = require('./routes/k_tubukimchi');
var k_stirfriedkimchieggRouter = require('./routes/k_stirfriedkimchiegg');
var d_bualoyRouter = require('./routes/d_bualoy');
var d_pumpkincustardRouter = require('./routes/d_pumpkincustard');
var d_tubtimkrobRouter = require('./routes/d_tubtimkrob');
var d_khanomkhoRouter = require('./routes/d_khanomkho');
var d_lodchongRouter = require('./routes/d_lodchong');
var d_kanomchanRouter = require('./routes/d_kanomchan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/thaimenu', thaimenuRouter);
app.use('/chinesemenu', chinesemenuRouter);
app.use('/westernmenu', westernmenuRouter);
app.use('/koreanmenu', koreanmenuRouter);
app.use('/dessert', dessertRouter);
app.use('/t_padbasil', t_padbasilRouter);
app.use('/t_shrimpfriedrice', t_shrimpfriedriceRouter);
app.use('/t_tomyamkung', t_tomyamkungRouter);
app.use('/t_greencurry', t_greencurryRouter);
app.use('/t_padthai', t_padthaiRouter);
app.use('/t_stirfriedchilichicken', t_stirfriedchilichickenRouter);
app.use('/c_friedpoisian', c_friedpoisianRouter);
app.use('/c_fishmawsoup', c_fishmawsoupRouter);
app.use('/c_porkdumpling', c_porkdumplingRouter);
app.use('/c_shrimppottedvermicelli', c_shrimppottedvermicelliRouter);
app.use('/c_emperorbakedrice', c_emperorbakedriceRouter);
app.use('/c_braisedduckchestnut', c_braisedduckchestnutRouter);
app.use('/w_salmonsteak', w_salmonsteakRouter);
app.use('/w_bakedspinachcheese', w_bakedspinachcheeseRouter);
app.use('/w_honeymustardchicken', w_honeymustardchickenRouter);
app.use('/w_salmoncreampasta', w_salmoncreampastaRouter);
app.use('/w_hamcheesecroissant', w_hamcheesecroissantRouter);
app.use('/w_mashedpotatowithcheeseandbacon2', w_mashedpotatowithcheeseandbacon2Router);
app.use('/k_koreanfriedchicken', k_koreanfriedchickenRouter);
app.use('/k_kimbap', k_kimbapRouter);
app.use('/k_kimchijjigae', k_kimchijjigaeRouter);
app.use('/k_bibimbap', k_bibimbapRouter);
app.use('/k_tubukimchi', k_tubukimchiRouter);
app.use('/k_stirfriedkimchiegg', k_stirfriedkimchieggRouter);
app.use('/d_bualoy', d_bualoyRouter);
app.use('/d_pumpkincustard', d_pumpkincustardRouter);
app.use('/d_tubtimkrob', d_tubtimkrobRouter);
app.use('/d_khanomkho', d_khanomkhoRouter);
app.use('/d_lodchong', d_lodchongRouter);
app.use('/d_kanomchan', d_kanomchanRouter);

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