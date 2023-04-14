
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
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6ImVjZjljYzcyMWJjMGJmMTQwYjcwMDdkNTkwZDE0MDJmMTFjMWI5MGQ2ZGFlYjc3YTQxM2FlMjdlZDZlZDdmMzRiZDU4OTc4NDljYWU4ZGY4IiwiaWF0IjoxNjgxNDg5OTM5LCJuYmYiOjE2ODE0ODk5MzksImV4cCI6MTY4MTQ5MzUzOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.mtQsLCFO4S0FpaIFQcKFuAS4ybPGYDmSoyQGKQ4K5e7u3Dbai9LvAiUkCvUa05m4_0IlnsTkzf_P-ndOxf3Iz00-uclmz5QjtawbzZpul-g3-BdeaWugmYT-TpkY89LbPf_dxL3c-iaSR05LE0GuQ_ZgCU0yDi4GBVFT5LRU9Gbek7sd8Be6jy6CcOZCIZ3guOwJ8BwwecU2ISiQYlTG8AJyCwsKlLeJWVgjoG_zEJppIUv0iJn_zMEs6KtmJyXVfNqHikSWCvlNan5xQkLitoITs_MeKyHrNOIu4uediJBjY4yOig2sRX8xj1AbQzB5qQGlfciCD3bzXkxX0GYt5g'
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
