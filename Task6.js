// 6. Geolocation=============

function getUserLocation() {
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;

        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
      },
      function (error) {
        console.log('Error retrieving location:', error);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

getUserLocation();