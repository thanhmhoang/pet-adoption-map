const petFinderKey = 'yEEAKZnWUKCg2CCaVX98cN18Lui10BkVFGpCfhgdxfuWc1tsyX';
const petFinderSecret = 'x2edze7geTJFCAYnPtTRRp0w7ADCnSzwyFhl2A5O';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6ImM5OTEwNGQ5MDgyNTIwNmNlMjc2N2ViMWViNTc4NTg1NDFhNWY4MmMwZDc5NmE2MWM5ZTE4NDZhODMwNzgyYTc1YTE5YTY4OWFjM2Y5NDY0IiwiaWF0IjoxNjgxNDk3NzU4LCJuYmYiOjE2ODE0OTc3NTgsImV4cCI6MTY4MTUwMTM1OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.HzgfblUOPvMZ4yjRI_3BMvlep58UccG-KNWn9h09x9Bb4kIsC4YQaEOHI1w8Tj3L-3MZIetz4belQpEmFgrYNtLDLyRbYizFR23_5J01xeoC195ADRG7EUj_qsT1O-tnNObyGVrktLmwQm9dhRzKbndPjS-CyN3-PXl9q2ptNNGaBfV-qZajB1g1QmF6uu2guXz-5v5QAQPrHQU8pr01ch1SfJwOYJFgbovmALv7fXT-usrt04aVGUBMXg1cNiKYDrprHG0JVp1Kb-rHPKQUHI4brBm61ckIVYMmUCqXu13JgdD4_yBiwWVMTaWmZiSSoH4pLagEUt7hzmc8--jmCw'
function getApi() {
  const urlParams = new URLSearchParams(window.location.search)
  const speciesInput = urlParams.get('animals')
  const locationInput = urlParams.get('search-bar')
  const genderInput = urlParams.get('gender')
  console.log(speciesInput)
  console.log(locationInput)
  console.log(genderInput)

  let requestUrl = 'https://api.petfinder.com/v2/animals?';
  if (speciesInput && speciesInput !== '') {
    requestUrl += `type=${speciesInput}`;
  }
  if (genderInput && genderInput !== '') {
    requestUrl += `&gender=${genderInput}`;
  }
  if (locationInput && locationInput !== '') {
    requestUrl += `&location=${locationInput}`;
  }

  fetch(requestUrl, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
  })
    .then(response => {
      return response.json()
    })
    .then(data => {
      console.log(data)
      const pets = data.animals;
      const petList = document.getElementById('results-box');

      petList.innerHTML = '';

      if (pets.length === 0) {
        petList.innerHTML = '<p>No pets found.</p>';
      } else {
        pets.forEach(pet => {
          const petItem = document.createElement('div');
          petItem.classList.add('pet-item');

          const petName = document.createElement('h2');
          petName.textContent = pet.name;
          petItem.appendChild(petName);

          const petImg = document.createElement('img');

          if (pet.photos[0]?.medium) {
            petImg.src = pet.photos[0].medium;
          } else {
            petImg.src = './assets/images/cat-dog stock.jpg';
          }

          //petImg.src = pet.photos[0]?.medium || 'myownphoto';

          petImg.alt = pet.name;
          petItem.appendChild(petImg);

          const petDesc = document.createElement('p');
          petDesc.textContent = pet.description;
          petItem.appendChild(petDesc);
          const petInfo = document.createElement('ul');
          const petAge = document.createElement('li');
          petAge.innerHTML = `<strong>Age:</strong> ${pet.age}`;
          petInfo.appendChild(petAge);
          const petBreed = document.createElement('li');
          petBreed.innerHTML = `<strong>Breed:</strong> ${pet.breeds.primary}`;
          petInfo.appendChild(petBreed);
          const petSize = document.createElement('li');
          petSize.innerHTML = `<strong>Size:</strong> ${pet.size}`;
          petInfo.appendChild(petSize);
          const petEmail = document.createElement('li');
          if (pet.contact.email) {
            petEmail.innerHTML = `<strong>Email:</strong> ${pet.contact.email}`;
          } else {
            petEmail.innerHTML = 'Sorry, no email was provided';
          }
          const petLocation = document.createElement('li');
          if (pet.contact.address.city && pet.contact.address.state) {
            petLocation.innerHTML = `<strong>Location:</strong> ${pet.contact.address.city}, ${pet.contact.address.state}`;
          } else {
            petLocation.innerHTML = 'Sorry, no location was provided';
          }
          petInfo.appendChild(petLocation);

          petInfo.appendChild(petEmail);
          const petPhone = document.createElement('li');
          if (pet.contact.phone) {
            petPhone.innerHTML = `<strong>Phone:</strong> ${pet.contact.phone}`;
          } else {
            petPhone.innerHTML = 'Sorry, no number was provided';
          }
          petInfo.appendChild(petPhone);

          petItem.appendChild(petInfo);
          petList.appendChild(petItem);

        });
      }
    })
    .catch(error => console.error(error));
}

getApi();
