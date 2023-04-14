
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

const petFinderKey = 'yEEAKZnWUKCg2CCaVX98cN18Lui10BkVFGpCfhgdxfuWc1tsyX';
const petFinderSecret ='x2edze7geTJFCAYnPtTRRp0w7ADCnSzwyFhl2A5O';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6ImM5OTEwNGQ5MDgyNTIwNmNlMjc2N2ViMWViNTc4NTg1NDFhNWY4MmMwZDc5NmE2MWM5ZTE4NDZhODMwNzgyYTc1YTE5YTY4OWFjM2Y5NDY0IiwiaWF0IjoxNjgxNDk3NzU4LCJuYmYiOjE2ODE0OTc3NTgsImV4cCI6MTY4MTUwMTM1OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.HzgfblUOPvMZ4yjRI_3BMvlep58UccG-KNWn9h09x9Bb4kIsC4YQaEOHI1w8Tj3L-3MZIetz4belQpEmFgrYNtLDLyRbYizFR23_5J01xeoC195ADRG7EUj_qsT1O-tnNObyGVrktLmwQm9dhRzKbndPjS-CyN3-PXl9q2ptNNGaBfV-qZajB1g1QmF6uu2guXz-5v5QAQPrHQU8pr01ch1SfJwOYJFgbovmALv7fXT-usrt04aVGUBMXg1cNiKYDrprHG0JVp1Kb-rHPKQUHI4brBm61ckIVYMmUCqXu13JgdD4_yBiwWVMTaWmZiSSoH4pLagEUt7hzmc8--jmCw'
function getApi() {
  const speciesInput = document.querySelector('#animals').value;
  const locationInput = encodeURIComponent(document.querySelector('#search-bar').value);
  const genderInput = document.querySelector('#gender').value;
  

  let requestUrl = window.location.href.split('index')[0]+'/second-page.html?';
  if (speciesInput && speciesInput !== '') {
    requestUrl += `type=${speciesInput}`;
  }
  if (genderInput && genderInput !== '') {
    requestUrl += `&gender=${genderInput}`;
  }
  if (locationInput && locationInput !== '') {
    requestUrl += `&location=${locationInput}`;
  }
  window.location.href=requestUrl
}    
