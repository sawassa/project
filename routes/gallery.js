exports.index = function(req, res){
 styles[2]= "stylesheets/gallery.css";
 console.log(styles[2]);
 scripts[0]= "js/gallery_alert.js";
 scripts[1]= "js/gallery_random_phrases.js";
 res.render('gallery');
};

