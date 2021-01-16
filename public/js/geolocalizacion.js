function geoFindMe() {
var mymap = L.map('out').setView([43.2834, -2.96310], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 30,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiamFnb2JhIiwiYSI6ImNrazAxZTRiZzBjdncyeHJ1ZWtxOHY2N2gifQ.FvyM_hcjCIdgCliCYu2ftw'
}).addTo(mymap);
var marker = L.marker([43.2834, -2.96310]).addTo(mymap);
marker.bindPopup("<b>Nombre del bar/restaurante!</b><br>dirección del sitio.").openPopup();
}