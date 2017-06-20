/*funcion initMap, inicializamos nuestro mapa mostrandolo en el div con id map*/
function initMap(){
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5, /*representa el nivel de profundidad de nuestro papa, entre mas zoom mas localizado se vera.*/
        center: {lat: -9.1191427, lng: -77.0349046},/*contiene la longitud y latitud en q queremos q se muestre nuestro mapa*/
        mapTypeControl: false,
        zoomControl: false,
        streetViewControl: false
    });
/*dentro de initmap*/
function buscar(){
    if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
/*getCurrenPosition: permite al usuario obtener su ubicacion actual.
funcionExito: seejecuta solo cuando el usuario comparte su ubicación.
funcionError: se ejecuta cuando se produce un error en la geolocalizacion.*/
    }
}
document.getElementById("encuentrame").addEventListener("click", buscar);
var latitud, longitud;
/*obtendremos nuestra latitud o longitud y ademas crearemos un marcador de nuestra ubicacion*/
var funcionExito = function(posicion){
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;
    var miUbicacion = new google.maps.Marker({
        position: {lat:latitud, lng:longitud},
        animation: google.maps.Animation.DROP,
        map: map
    });
    map.setZoom(17);
    map.setCenter({lat:latitud, lng:longitud});
}
var funcionError = function (error){
    alert("Tenemos un problema con encontrar tu ubicación");
}
}



/*function initdMap() {
        //get api uses
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        //waypoints to add
        var waypts = [{ location: { lat: 41.94, lng: 1.56 }, stopover: true }, { location: { lat: 41.99, lng: 1.53 }, stopover: true }, { location: { lat: 41.98, lng: 1.52 }, stopover: true }];

        //api map
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 6,
            center: { lat: waypts[0].location.lat, lng: waypts[0].location.lng }
        });
        //add map
        directionsDisplay.setMap(map);

        // set the new
        //new Array(waypts[0].location.lat,waypts[0].location.lng)
        directionsService.route({
            origin: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },//db waypoint start
            destination: { lat: waypts[0].location.lat, lng: waypts[0].location.lng },//db waypoint end
            waypoints: waypts,
            travelMode: google.maps.TravelMode.WALKING
        }, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Ha fallat la comunicació amb el mapa a causa de: ' + status);
            }
        });
    }*/

