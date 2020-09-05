function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(13.724618, 100.584682),
        zoom: 15,
        zoomControl: false,
        streetViewControl: false,
        mapTypeId: 'custom_style'
    }

    var featureOpts = [ //สร้างฟังก์ชั่นการเปลั่ยน stle google map เป็นโหมดมืด
        { //copy stle มาจาก mapstyle
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#242f3e"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#263c3f"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6b9a76"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#38414e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#212a37"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9ca5b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#746855"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#1f2835"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#f3d19c"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2f3948"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#d59563"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#515c6d"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#17263c"
                }
            ]
        }
    ];
    var styledMapOptions = { name: 'Custom Style' };
    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    map.mapTypes.set('custom_style', customMapType);

    // MARKER
    var image = 'beachflag.png';
    var marker = new google.maps.Marker({
        position : new google.maps.LatLng(13.724618, 100.584682),
        map : map,
        title : 'Bangkok', //พอเอาเมาส์ไปชี้ ที่ marker จะแสดงคำว่า bangkok
        draggable: true,
        icon : image,
        animation: google.maps.Animation.BOUNCE //marker เด้งๆๆๆ
    });

    // mark.setMap(null); //เซตค่าให้ marker หายไป
    
    // INFO WINDOW
    var infowindow = new google.maps.InfoWindow({content: 'Hello Bangkok!, I am here.'});
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });


    // marker.setMap(null);

}