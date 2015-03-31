var directionsDisplay;
var directionService = new google.maps.DirectionsService(); 
var map;

addEventListener('load', initiate); 

function initiate(){
 directionsDisplay = new google.maps.DirectionsRenderer();
 var city = new google.maps.LatLng(53.88, 27.58);
 var mapOptions = {
  zoom: 10,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  center: city
 };
 map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
 directionsDisplay.setMap(map);
 var go = document.getElementById('go');
 go.addEventListener('click', calcRoute); 
};

function calcRoute(){
 var start = document.getElementById('start').value;
 var finish = document.getElementById('finish').value;
 var request ={
  origin: start,
  destination: finish,
  travelMode: google.maps.DirectionsTravelMode.DRIVING
 };
 directionService.route(request, function(responce,status){
  if(status = google.maps.DirectionsStatus.OK){
   directionsDisplay.setDirections(responce);
  }
 })
};