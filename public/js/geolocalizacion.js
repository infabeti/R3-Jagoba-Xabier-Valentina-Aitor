function geolocalizacion(coord1,coord2,nombre,dir,div) {
		$("#"+div).css({"width":"400px","height":"400px"});
		var mapa = L.map(div).setView([coord1,coord2], 17);
		var nom=$("#"+nombre).html();
		var direccion=$("#"+dir).html();

		L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			maxZoom: 23,
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1,
			accessToken: 'pk.eyJ1IjoiamFnb2JhIiwiYSI6ImNrazAxZTRiZzBjdncyeHJ1ZWtxOHY2N2gifQ.FvyM_hcjCIdgCliCYu2ftw'
		}).addTo(mapa);
		var marker = L.marker([coord1,coord2]).addTo(mapa);
		marker.bindPopup("<b>"+nom+"</b><br>"+direccion).openPopup();
}