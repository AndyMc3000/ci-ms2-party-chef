var map;
var InfoObj = [];
var centerCoords = {
    lat: 53.286462626348,
    lng: -8.193259451610158
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
    {
        placeName: 'Kinsale Kitchen',
        address1: 'Kinsale Hotel & Spa',
        address2: 'Rathmore',
        address3: 'Kinsale',
        address4: 'Co.Cork',
        postcode: 'P07 DZ12',
        tel: '021-433 7899',
        email: 'kinsaleh@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 51.70434100233279,
            lng: -8.461776888984756
        }],
        type: 'kitchen'
    },  
    {
        placeName: 'Limerick Kitchen',
        address1: 'Limerick Strand Hotel',
        address2: 'Ennis Road',
        address3: '',
        address4: 'Limerick',
        postcode: 'P06 DZ10',
        tel: '022-411 7899',
        email: 'limerick@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 52.667714528656184,
            lng: -8.631411410288878
        }],
        type: 'kitchen'
    },  
    {
        placeName: 'Clare Kitchen',
        address1: 'Beech Park House',
        address2: 'Deerpark',
        address3: 'Bunratty',
        address4: 'Co.Clare',
        postcode: 'P01 DZ15',
        tel: '022-412 7999',
        email: 'clare@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 52.72717028463899,
            lng: -8.81756971849219
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Galway (South) Kitchen',
        address1: 'Coach House Hotel',
        address2: 'Oran More',
        address3: 'Oranmore',
        address4: 'Co.Galway',
        postcode: 'P21 DZ23',
        tel: '027-429 8999',
        email: 'galwaysouth@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 53.27738494987443,
            lng: -8.928646226449871
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Galway (North) Kitchen',
        address1: 'Beech House',
        address2: 'Lisheenanoran',
        address3: 'Corrandulla',
        address4: 'Co.Galway',
        postcode: 'P29 DZ37',
        tel: '029-439 9999',
        email: 'galwaynorth@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 53.38261116368219,
            lng: -9.039895637855418
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Galway (East) Kitchen',
        address1: 'Shearwater House',
        address2: 'Marina Point',
        address3: 'Ballinasloe',
        address4: 'Co.Galway',
        postcode: 'P31 DZ42',
        tel: '039-539 1999',
        email: 'galwayeast@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 53.34116398252102,
            lng: -8.218571592594921
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Dublin (City) Kitchen',
        address1: 'The Marker Hotel',
        address2: 'Grand Canal Square',
        address3: 'Dublin Docklands',
        address4: 'Dublin',
        postcode: 'P01 DZ01',
        tel: '01-532 1888',
        email: 'dublincity@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 53.34670302605734,
            lng: -6.240413700964763
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Dublin (West) Kitchen',
        address1: 'The 12th Lock Boutique Hotel',
        address2: 'The Royal Canal',
        address3: 'Blanchardstown',
        address4: 'Dublin 15',
        postcode: 'P02 DZ99',
        tel: '01-566 5788',
        email: 'dublinwest@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 53.38621312882772,
            lng: -6.367385138369657
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Kildare Kitchen',
        address1: 'The Keadeen Hotel',
        address2: 'Curragh Road',
        address3: 'Newbridge',
        address4: 'Co.Kildare',
        postcode: 'P42 DZ98',
        tel: '041-588 5799',
        email: 'kildare@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 53.18889168951526,
            lng: -6.809530108431771
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Kerry Kitchen',
        address1: 'Castlerosse Park Resort',
        address2: 'Ballydowney',
        address3: 'Killarney',
        address4: 'Co.Kerry',
        postcode: 'P42 DZ98',
        tel: '031-788 0799',
        email: 'kerry@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 52.07053481702905,
            lng: -9.539468293100018
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Sligo Kitchen',
        address1: 'Strandhill Lodge',
        address2: 'Larass',
        address3: 'Strandhill',
        address4: 'Co.Sligo',
        postcode: 'P92 DY38',
        tel: '061-888 4799',
        email: 'sligo@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 54.27254843980587,
            lng: -8.596064398365096
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Kilkenny Kitchen',
        address1: 'The Club House Hotel,',
        address2: '22 & 23 Lower',
        address3: 'Patrick St',
        address4: 'Kilkenny',
        postcode: 'P32 DB38',
        tel: '091-777 5799',
        email: 'kilkenny@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 52.64977486985807,
            lng: -7.2517969130956175
        }],
        type: 'kitchen'
    },
    {
        placeName: 'Roscommon Kitchen',
        address1: 'Hodson Bay Hotel',
        address2: 'Hodson Bay',
        address3: 'Athlone',
        address4: 'Co.Roscommon',
        postcode: 'P11 DG72',
        tel: '067-665 6769',
        email: 'roscommon@partychef.ie',
        image: 'https://i.ibb.co/xq9Y2X4/chef-2-icon-iconarchive.png',
        LatLng: [{
            lat: 53.47537213829264,
            lng: -7.9916637210453025
        }],
        type: 'kitchen'
    },
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = '<div class="container infoContainer">' +   
                            '<div class="infoHeading">' +
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
                            '<li><h5>' + 
                            markersOnMap[i].address1 + 
                            '</h5></li>' + 
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
                            '<li class="telField"><strong>Tel: ' + 
                            markersOnMap[i].tel + 
                            '</strong></li>' + 
                            '<li><strong>Email: </strong><a style="color:white" href=mailto:"' +  
                            markersOnMap[i].email + 
                            '">' + 
                            markersOnMap[i].email +
                            '</a></li>' + 
                            '</ul>' +
                            '</div>';

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
        zoom: 7.4,
        center: centerCoords
    });
    addMarkerInfo();
}
