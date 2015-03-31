var button;

addEventListener('load', initiate); 
function initiate(){
 button = document.getElementById('button');
 button.addEventListener('click', getLocation); 
};


function getLocation(){
 var geoconfig = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 6000 // -- период устаревания данных пользователя. (берет из кэша)
 };
 navigator.geolocation.getCurrentPosition(showInfo, showError, geoconfig); // -- showInfo - ф-я, в которую передаются текущие коорд. пользователя
};

function showInfo(position){
 var location = document.getElementById('location');
 var mapurl = 'http://maps.google.com/maps/api/staticmap?center=' + 
     position.coords.latitude + ',' + 
     position.coords.longitude + 
     '&zoom=12&size=400x400&sensor=false&markers=' + 
     position.coords.latitude + ',' + 
     position.coords.longitude;

 var link = 
     'http://maps.google.com/maps/api/geocode/json?latlng=' +
     position.coords.latitude + ',' + 
     position.coords.longitude + 
     '&sensor=false&language=ru';
 var data = '<img src="' + mapurl + '"/><br>';
 data += 'Широта:' + position.coords.latitude + '</br>';
 data += 'Долгота: ' + position.coords.longitude + '<br>';
 data += 'Точность: ' + position.coords.accuracy + '<br>';
 data += '<a href = "' + link + '"target ="_blank">Узнай больше</a>';
 location.innerHTML = data;
};

function showError(error){
 alert('Error: ' + error.code + ' | ' + error.message);
};

