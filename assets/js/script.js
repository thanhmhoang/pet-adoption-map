
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
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6ImMwYTcwMDNmOTIxYTllNGI5MzcyODNhMTg1YWExNTI3ODgzZWZmNWRhYjZkNDJiZjgyZWJhZTIxMTYyMzI0M2Q0YzY1ZWVlNDk2ZDU4MDlhIiwiaWF0IjoxNjgxNDM1NTk0LCJuYmYiOjE2ODE0MzU1OTQsImV4cCI6MTY4MTQzOTE5NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.dsUi4-n96euhkj5MSgJDXvnHkZW-YVtQer8m2--P3oUhyZjjEJ2kt_OwA0Xd2AtLSWog43lCL-JvUXyvtfAt1RzHn9B4HNrSfHkqaZnX5t8sIbvjduHthdcqQmQpu0yPYJrknyNgINBtT_9b3piyeErydQ-2xLGBwgHD9fv3FOIAHd-VCCmUqX8179o-uAm40qFVGJeMNnMLr6BXR7adW-kPVa1YjjdPDr4rXCphH62ZSF6nT7Lx9kBOfkbU64E4vo5GPfgTjQ77UYwFetCc8zZiJ9FogxzLYvYZbbUCHGw0_hO_RF-fZC2QPlFoBinSHe5jXFP869fHJ96TtMo8Kg'
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
