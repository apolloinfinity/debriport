
// var getLoc = document.getElementById('getLocButton');
// //
// getLocButton.addEventListener("click", alert("Works"));
//
// function myLocation(){
//   if(navigator.geolocation){
//     navigator.geolocation.getCurrentPosition(showPosition);
//     console.log('myLocation, function is working.')
//   } else {
//     loc.innerHTML = 'Location tracking not possible';
//   }
// }
// function showPosition(position) {
//   loc.innerHTML = "Longitude: " + position.coords.longitude + "<br> Latitude: " + position.coords.latitude;
//   console.log('showPosition function is working.')
// }

  // Google Geocode API
  //Youtube tutorial API geolocation
// function initMap() {
//         var uluru = {lat: 25.363, lng: 131.044};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 4,
//           center: uluru
//         });
//         var marker = new google.maps.Marker({
//           position: uluru,
//           map: map
//         });
//       }

  //Traversy Media turorial
  //Call Geocode
//   geocode();
//
// function geocode(){
//   var axios = 'https://unpkg.com/axios/dist/axios.min.js';
//   var location = '1829 Fillmore Ave CA';
//   axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
//     params:{
//       address:location,
//       key:'AIzaSyAdzQzWD3FMw1jS5EoFM1zxeY9juTb731c'
//     }
//   })
//   .then(function(response){
//   console.log(response);
// })
//   .catch(function(error){
//     console.log(error);
//   });
// }

//Put this script tag into the html for JSON/Ajax callback function
//<script src="https://unpkg.com/axios/dist/axios.min.js"></script>

// Final result after many turorials
    var watchID;
    var geo;    // for the geolocation object
    var map;    // for the google map object
    var mapMarker;  // the google map marker object

    // position options
    var MAXIMUM_AGE = 200; // miliseconds
    var TIMEOUT = 300000; //5 minutes
    var HIGHACCURACY = true;

    function getGeoLocation() {
        try {
            if( !! navigator.geolocation ) return navigator.geolocation;
            else return undefined;
        } catch(e) {
            return undefined;
        }
    }

    function show_map(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var latlng = new google.maps.LatLng(lat, lon);

        if(map) {
            map.panTo(latlng);
            mapMarker.setPosition(latlng);
        } else {
            var myOptions = {
                zoom: 18,
                center: latlng,

                // mapTypeID --
                // ROADMAP displays the default road map view
                // SATELLITE displays Google Earth satellite images
                // HYBRID displays a mixture of normal and satellite views
                // TERRAIN displays a physical map based on terrain information.
                mapTypeId: google.maps.MapTypeId.HYBRID
            };
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
            map.setTilt(0); // turns off the annoying default 45-deg view

            mapMarker = new google.maps.Marker({
                position: latlng,
                title:"You are here."
            });
            mapMarker.setMap(map);
        }
    }

    function geo_error(error) {
        stopWatching();
        switch(error.code) {
            case error.TIMEOUT:
                alert('Geolocation Timeout');
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Geolocation Position unavailable');
                break;
            case error.PERMISSION_DENIED:
                alert('Geolocation Permission denied');
                break;
            default:
                alert('Geolocation returned an unknown error code: ' + error.code);
        }
    }

    function stopWatching() {
        if(watchID) geo.clearWatch(watchID);
        watchID = null;
    }

    function startWatching() {
        watchID = geo.watchPosition(show_map, geo_error, {
            enableHighAccuracy: HIGHACCURACY,
            maximumAge: MAXIMUM_AGE,
            timeout: TIMEOUT
        });
    }

    window.onload = function() {
        if((geo = getGeoLocation())) {
            startWatching();
        } else {
            alert('Geolocation not supported.')
        }
    }



//
//Dropdown Code for the add location button for app
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}




//
    //Pop up modal code for submit button
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtnModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
