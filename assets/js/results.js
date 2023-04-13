const petFinderKey = 'yEEAKZnWUKCg2CCaVX98cN18Lui10BkVFGpCfhgdxfuWc1tsyX';
const petFinderSecret ='x2edze7geTJFCAYnPtTRRp0w7ADCnSzwyFhl2A5O';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6IjhlNzQ1MzI1NzhhODUzYjg2NTU2NjQ4Nzk0NjFlZWNiNTUzZDllNWNkMjc0ZjEwZWM1YzE1M2Q1ODY4MTg3YzZiMjU3Yjk5MzIwZmM5M2ViIiwiaWF0IjoxNjgxNDE4NzQ3LCJuYmYiOjE2ODE0MTg3NDcsImV4cCI6MTY4MTQyMjM0Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.qLVf78Uviwet5ksjDPuLYbvi0djHPDzj3NFfRmvF7ujPauzm34CJXEHWDSsmOp96KfQmlHHXcf1w6zzbspSLL7SISDSappxueQtNNMKku_optNwZbsQdKkGnR76DJSep7XKemJrMXbI2QkT7TohhA0Y41bYzOFfoRiZSN633s1AqRjjpuuiEz-T39xBnjmYvQp7CLCl9Cj-C0EzeaT4-ZmyIVhtBcsXpN_wLCVhNutjdmHCdJeWTbTEIuiWWJT93nggmmXKa7VMWe3JsT-eKUMnLBsTQ25wEaNKtfNXp7XC5EwNyNLeW5tQZgrJr4ZdASaulOakXTim5U7zMGdydeg'
function getApi() {
  const urlParams = new URLSearchParams(window.location.search)
  const speciesInput = urlParams.get('type')
  const locationInput = urlParams.get('search-text')
  const genderInput = urlParams.get('gender')

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

            if (pet.photos[0]) {
                
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

console.log(getApi)