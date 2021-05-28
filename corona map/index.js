function updateMap()
{
    fetch("/real.json")
    .then(respose => respose.json())
    .then(yo => {
         yo.data.forEach(element => {
            latitude= element.latitude;
            longitude= element.longitude;
             k= element.confirmed;
            
            if(k >255){
                color= "rgb(255,0,0)";
            }
            else{
                color= `rgb(${k},0,0)`;
            }
            // maker 
            new mapboxgl.Marker({
                draggable:false,
                color: "rgb(255,0,0)"
                
            })
            .setLngLat([longitude,latitude])
            .addTo(map)            
            
        });
    })
}

updateMap();