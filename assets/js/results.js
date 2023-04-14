const petFinderKey = 'yEEAKZnWUKCg2CCaVX98cN18Lui10BkVFGpCfhgdxfuWc1tsyX';
const petFinderSecret ='x2edze7geTJFCAYnPtTRRp0w7ADCnSzwyFhl2A5O';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6ImMwYTcwMDNmOTIxYTllNGI5MzcyODNhMTg1YWExNTI3ODgzZWZmNWRhYjZkNDJiZjgyZWJhZTIxMTYyMzI0M2Q0YzY1ZWVlNDk2ZDU4MDlhIiwiaWF0IjoxNjgxNDM1NTk0LCJuYmYiOjE2ODE0MzU1OTQsImV4cCI6MTY4MTQzOTE5NCwic3ViIjoiIiwic2NvcGVzIjpbXX0.dsUi4-n96euhkj5MSgJDXvnHkZW-YVtQer8m2--P3oUhyZjjEJ2kt_OwA0Xd2AtLSWog43lCL-JvUXyvtfAt1RzHn9B4HNrSfHkqaZnX5t8sIbvjduHthdcqQmQpu0yPYJrknyNgINBtT_9b3piyeErydQ-2xLGBwgHD9fv3FOIAHd-VCCmUqX8179o-uAm40qFVGJeMNnMLr6BXR7adW-kPVa1YjjdPDr4rXCphH62ZSF6nT7Lx9kBOfkbU64E4vo5GPfgTjQ77UYwFetCc8zZiJ9FogxzLYvYZbbUCHGw0_hO_RF-fZC2QPlFoBinSHe5jXFP869fHJ96TtMo8Kg'
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
