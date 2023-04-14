const petFinderKey = 'yEEAKZnWUKCg2CCaVX98cN18Lui10BkVFGpCfhgdxfuWc1tsyX';
const petFinderSecret ='x2edze7geTJFCAYnPtTRRp0w7ADCnSzwyFhl2A5O';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6IjBmNjM5ZmEwNjEwN2VjNTc0NjM4ODUyYWRhYjc5YzcyODMwMGY1N2E2ZWM3OTJlNjVkM2E0Y2FjZTFmNjhhYjI3ZGI2YmJjM2IxMzA3OWFlIiwiaWF0IjoxNjgxNDMyMzc4LCJuYmYiOjE2ODE0MzIzNzgsImV4cCI6MTY4MTQzNTk3OCwic3ViIjoiIiwic2NvcGVzIjpbXX0.IPIPE4TQkHw9NZ4uFZUv3QXfx34at2CPKcgOvlwyP7iXdKBEJJ7vERJpLhYsgV_TyqvDQzO9cg6K2Y9SJDM_o1weffMbNrOGHVRswZKb39b7IpojUQSRxpkwH7JO5eZ6y5tk0jejpqhPHjpRFAYSqB4I3UltOQT4_JPqHWsu8_OdMQsh82CqkIW1K5lmSwElzr4e5Timk1C4QiVoZsotBLL19vaVc9nIGBuyjXFfVsxMVS9lw671mGDbagR1QDX3jid-FfqKEjaxwXu24CY-IY11-Ponkt3V3g_DF4th7GLvUdI-j2kpF5VY1Q2sFTTPeH-X4sb1Z3V1DYOHqU-xww'
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
          petItem.appendChild(petInfo);
          petList.appendChild(petItem);
        });
      }
    })
    .catch(error => console.error(error));
}

getApi();
