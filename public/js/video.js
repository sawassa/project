var mmedia;
var play;
var maxim
var bar;
var progress;
var mute;
var volume;
var loop;

addEventListener('load', initiate); //-- не грузить js, пока не загрузится содержимое страницы - аналог bind

function initiate(){
 maxim = 400; // --max ширина для прогрессбара = ширине nar
 mmedia = document.getElementById('media'); 
 bar = document.getElementById('bar');
 progress = document.getElementById('progress');
 volume = document.getElementById('volume');
 play = document.getElementById('play');
 mute = document.getElementById('mute');
 play.addEventListener('click', push); 
 mute.addEventListener('click', sound); 
 bar.addEventListener('click', move); 
 volume.addEventListener('change', level); 
};

function push(){
 if (!mmedia.paused && !mmedia.ended){
  mmedia.pause();
  play.value = 'play';
  clearInterval(loop);
 }
 else{
  mmedia.play();
  play.value = 'pause';
  loop = setInterval(status, 1000);
 }
}

function move(e){
 if(!mmedia.paused && !mmedia.ended){
 var mouseX = e.pageX - bar.offsetLeft;
 var newTime = mouseX * mmedia.duration / maxim;
 mmedia.currentTime = newTime;
 progress.style.width = mouseX + 'px';
 }
}

function sound(){
 if(mute.value == 'mute'){
  mmedia.muted = true;
  mute.value = 'sound';
 } else {
  mmedia.muted = false;
  mute.value = 'mute';
 }
}

function level(){
 mmedia.volume = volume.value;
}

function status(){
 if(!mmedia.ended){
  var size = parseInt(mmedia.currentTime * maxim / mmedia.duration);
  progress.style.width = size + 'px';
 } else {
  progress.style.width = 0;
  play.value = 'play';
  clearInterval(loop);
 }
}

