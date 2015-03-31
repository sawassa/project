exports.index = function(req, res){
 if (req.params.id){
  var index = req.params.id;
 } 
 else {
  var index = 'index';
 };

 var Maintexts = require('../models/maintexts').maintexts;
 Maintexts.findOne({'url':index}, function(err, text){
  if(!text){
   text = {
    'name': 'Добро пожаловать на сайт',
    'body': 'Извините, страница не найдена'
   }
  };
 styles[2]=''; 
 config=require('../config');
  res.render('index',{text:text});
 });
};

exports.add = function(req, res){
 var Maintexts = require('../models/maintexts').maintexts; // подключились к модели.коллекции
 var maintexts = new Maintexts({
  'name': 'Геолокация',
  'body': '<p>geo</p>',
  'url': 'geo'
 });

maintexts.save(function(){
  console.log('OK');
 });
 res.redirect('/'); // любая обработка формы должна завершаться перенаправлением
};