
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpY2tlbmNoYW1wNzEiLCJhIjoiY2xnNnlzeXRsMDh2OTNlcGEwNTIxemJlYiJ9.uV30dsqz49aMZVVR3s6mrg';
        const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

  // Code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements

  $( "#search-list" ).each(function( index ) {
    var userSearch = $(this).parent().attr("id")
    var searchHistory =localStorage.getItem(userSearch)
    $(this).val(textValue)
  });

  // Code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements
  
  function storeSearch () {
    var savedSearch = JSON.parse(localStorage.getItem('savedText'));
  
    if (savedSearch === null) {
      savedSearch = []
      console.log('No searches saved.');
    }
      savedSearch.push("localstorage events")
      console.log(savedSearch)
      localStorage.setItem("savedText", JSON.stringify(savedSearch))
    }

  storeSearch();

