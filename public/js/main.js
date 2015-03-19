$(function(){
  $('.menutop:eq(0)').bind("mouseover", function(){
   $('.menutop a').css({ "background": "yellow"});
  });
 $('rixen:eq(0)').bind('mouseover', function(){
   $('header').css('background', 'yellow');
  }); 
  
 $('zna:eq(0)').bind('mouseover', function(){
   $('body').css('background', 'yellow');
 }); 

 $('chat:eq(0)').bind('mouseover', function(){
   $('body').css('background', 'yellow');
 });

 $('a.btn.btn-default:eq(0)').bind("click", function() {
   alert( "Version 0.1" );  
 });    
 
 $('a.btn.btn-default:eq(1)').bind("click", function() {
   alert( "Test" );  
 });     

});

