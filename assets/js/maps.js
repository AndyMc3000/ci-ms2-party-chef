var map;
var InfoObj = [];
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
            lat: 51.90473191472518,
            lng: -8.455334277325122
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Cork (South) Kitchen',
        address1: 'Hayfield Manor Hotel',
        address2: 'Perrott Ave',
        address3: 'College Rd',
        address4: 'Cork',
        postcode: 'P19 DZ32',
        tel: '021-436 7892',
        email: 'corksouth@partychef.ie',
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
        var contentString = '<div class="infoHeading">' +
                            '<h3>' + 
                            markersOnMap[i].placeName + 
                            '</h3>' + 
                            '</div>' +
                            '<div class="infoimage">' +
                            '<img src=' +
                            markersOnMap[i].image +
                            '>' + 
                            '</img>' +
                            '</div>' +
                            '<ul class="infoWindowList">' + 
                            '<li><h4>' + 
                            markersOnMap[i].address1 + 
                            '</h4></li>' + 
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
                            '<li><strong>' + 
                            markersOnMap[i].tel + 
                            '</strong></li>' + 
                            '<li>Email: <a href=mailto:"' +  
                            markersOnMap[i].email + 
                            '">' + 
                            markersOnMap[i].email +
                            '</a></li>' + 
                            '</ul>';
        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener('click', function() {
            closeOtherInfo();
            infowindow.open(marker.get('map'), marker);
            InfoObj[0] = infowindow;
        });
    }
}

function closeOtherInfo() {
    if( InfoObj.length > 0 ) {
        InfoObj[0].set("marker", null);
        InfoObj[0].close();
        InfoObj[0].length = 0;
    }    
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6.5,
        center: centerCoords
    });
    addMarkerInfo();
}
