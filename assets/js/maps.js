var map;
var InfoOgj = [];
var centerCoords = {
    lat: 53.430659171975954,
    lng: -7.946188576924455
};

var icons = {
    kitchen: {
        icon: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
    },
};

var markersOnMap = [
    {
        placeName: 'Cork (North) Kitchen',
        address1: 'Unit 3',
        address2: 'Blackpool Retail Park',
        address3: 'Blackpool',
        address4: 'Co.Cork',
        postcode: 'P19 DZ32',
        tel: '021-435 7892',
        email: 'corknorth@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 51.91754579951517,
            lng: -8.472666050361664
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Cork (South) Kitchen',
        address1: 'Unit 3',
        address2: 'Blackpool Retail Park',
        address3: 'Blackpool',
        address4: 'Co.Cork',
        postcode: 'P19 DZ32',
        tel: '021-435 7892',
        email: 'corknorth@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 51.891463947246024,
            lng: -8.48991998978755
        }],
        type: 'kitchen'
    },
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = '<h3>' + 
                            markersOnMap[i].placeName + 
                            '</h3>' + 
                            '<div class="infoimage">' +
                            '<img src=' +
                            markersOnMap[i].image +
                            '>' + 
                            '</img>' +
                            '</div>' +
                            '<ul>' + 
                            '<li>' + 
                            markersOnMap[i].address1 + 
                            '</li>' + 
                            '<li>' + 
                            markersOnMap[i].address2 + 
                            '</li>' + '<li>' + 
                            markersOnMap[i].address3 + 
                            '</li>' + 
                            '<li>' + 
                            markersOnMap[i].address4 + 
                            '</li>' + 
                            '<li>' + 
                            markersOnMap[i].postcode + 
                            '</li>' + 
                            '<li>' + 
                            markersOnMap[i].tel + 
                            '</li>' + 
                            '<li>' + 
                            markersOnMap[i].email + 
                            '</li>' + 
                            '</ul>';
        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6.5,
        center: centerCoords
    });
    addMarkerInfo();
}
