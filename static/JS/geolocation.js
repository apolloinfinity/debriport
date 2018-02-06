var loc = document.getElementById('myloc');
var getLoc = document.getElementById('getLoc');

getLoc.addEventListener("click", myLocation);

function myLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition);
    console.log('myLocation function is working.')
  } else {
    loc.innerHTML = 'Location tracking not possible';
  }
}

function showPosition(position) {
  loc.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude;
  console.log('showPosition function is working.')
}