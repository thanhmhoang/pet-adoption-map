
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
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6IjBmNjM5ZmEwNjEwN2VjNTc0NjM4ODUyYWRhYjc5YzcyODMwMGY1N2E2ZWM3OTJlNjVkM2E0Y2FjZTFmNjhhYjI3ZGI2YmJjM2IxMzA3OWFlIiwiaWF0IjoxNjgxNDMyMzc4LCJuYmYiOjE2ODE0MzIzNzgsImV4cCI6MTY4MTQzNTk3OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.IPIPE4TQkHw9NZ4uFZUv3QXfx34at2CPKcgOvlwyP7iXdKBEJJ7vERJpLhYsgV_TyqvDQzO9cg6K2Y9SJDM_o1weffMbNrOGHVRswZKb39b7IpojUQSRxpkwH7JO5eZ6y5tk0jejpqhPHjpRFAYSqB4I3UltOQT4_JPqHWsu8_OdMQsh82CqkIW1K5lmSwElzr4e5Timk1C4QiVoZsotBLL19vaVc9nIGBuyjXFfVsxMVS9lw671mGDbagR1QDX3jid-FfqKEjaxwXu24CY-IY11-Ponkt3V3g_DF4th7GLvUdI-j2kpF5VY1Q2sFTTPeH-X4sb1Z3V1DYOHqU-xww'
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
