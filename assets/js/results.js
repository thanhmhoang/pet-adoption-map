const petFinderKey = 'yEEAKZnWUKCg2CCaVX98cN18Lui10BkVFGpCfhgdxfuWc1tsyX';
const petFinderSecret = 'x2edze7geTJFCAYnPtTRRp0w7ADCnSzwyFhl2A5O';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6ImVjZjljYzcyMWJjMGJmMTQwYjcwMDdkNTkwZDE0MDJmMTFjMWI5MGQ2ZGFlYjc3YTQxM2FlMjdlZDZlZDdmMzRiZDU4OTc4NDljYWU4ZGY4IiwiaWF0IjoxNjgxNDg5OTM5LCJuYmYiOjE2ODE0ODk5MzksImV4cCI6MTY4MTQ5MzUzOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.mtQsLCFO4S0FpaIFQcKFuAS4ybPGYDmSoyQGKQ4K5e7u3Dbai9LvAiUkCvUa05m4_0IlnsTkzf_P-ndOxf3Iz00-uclmz5QjtawbzZpul-g3-BdeaWugmYT-TpkY89LbPf_dxL3c-iaSR05LE0GuQ_ZgCU0yDi4GBVFT5LRU9Gbek7sd8Be6jy6CcOZCIZ3guOwJ8BwwecU2ISiQYlTG8AJyCwsKlLeJWVgjoG_zEJppIUv0iJn_zMEs6KtmJyXVfNqHikSWCvlNan5xQkLitoITs_MeKyHrNOIu4uediJBjY4yOig2sRX8xj1AbQzB5qQGlfciCD3bzXkxX0GYt5g'
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
