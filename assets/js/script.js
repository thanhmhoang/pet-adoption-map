
// mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpY2tlbmNoYW1wNzEiLCJhIjoiY2xnNnlzeXRsMDh2OTNlcGEwNTIxemJlYiJ9.uV30dsqz49aMZVVR3s6mrg';
//     const map = new mapboxgl.Map({
//     container: 'map', // container ID
//     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//     style: 'mapbox://styles/mapbox/streets-v12', // style URL
//     center: [-74.5, 40], // starting position [lng, lat]
//     zoom: 9 // starting zoom
// });



var pf = new petfinder.Client({apiKey: "H1zZ78gYCiKq46kUPJnIyVFzyMzZUUZsjPEXGgl1GZNVoync7C", secret: "TdqKye1nvcjk7DuqueR6Av1KteGdSCChuqnZe68t"});

pf.organization.search({location: "Seattle, WA"})
  .then(function (response) {
    for (let i = 0; i < response.data.organizations.length; i++) {
    console.log(response.data.organizations[i]);
    }
  });
  
//apiKey: H1zZ78gYCiKq46kUPJnIyVFzyMzZUUZsjPEXGgl1GZNVoync7C
//Secret: TdqKye1nvcjk7DuqueR6Av1KteGdSCChuqnZe68t

    
