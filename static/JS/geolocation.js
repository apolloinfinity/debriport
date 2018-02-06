// var loc = document.getElementById('myloc');
// var getLoc = document.getElementById('getLoc');
//
// getLoc.addEventListener("click", myLocation);
//
// function myLocation(){
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition);
//     console.log('myLocation function is working.')
//   } else {
//     loc.innerHTML = 'Location tracking not possible';
//   }
// }
//
// function showPosition(position) {
//   loc.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude;
//   console.log('showPosition function is working.')
// }

function initMap() {
        var uluru = {lat: 25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
