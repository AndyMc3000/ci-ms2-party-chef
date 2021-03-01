function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        mapId: "cae23a2b5aab6c26",
        zoom: 6.5,
        center: {
            lat: 53.430659171975954,
            lng: -7.946188576924455
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [{
        lat: 51.91754579951517,
        lng: -8.472666050361664
    }, {
        lat: 41.084045,
        lng: -73.874256
    }, {
        lat: 40.754932,
        lng: -73.984016
    }];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}