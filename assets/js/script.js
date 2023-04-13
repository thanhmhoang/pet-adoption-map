

const petFinderKey = 'yEEAKZnWUKCg2CCaVX98cN18Lui10BkVFGpCfhgdxfuWc1tsyX';
const petFinderSecret ='x2edze7geTJFCAYnPtTRRp0w7ADCnSzwyFhl2A5O';
const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ5RUVBS1puV1VLQ2cyQ0NhVlg5OGNOMThMdWkxMEJrVkZHcENmaGdkeGZ1V2MxdHN5WCIsImp0aSI6IjhlNzQ1MzI1NzhhODUzYjg2NTU2NjQ4Nzk0NjFlZWNiNTUzZDllNWNkMjc0ZjEwZWM1YzE1M2Q1ODY4MTg3YzZiMjU3Yjk5MzIwZmM5M2ViIiwiaWF0IjoxNjgxNDE4NzQ3LCJuYmYiOjE2ODE0MTg3NDcsImV4cCI6MTY4MTQyMjM0Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.qLVf78Uviwet5ksjDPuLYbvi0djHPDzj3NFfRmvF7ujPauzm34CJXEHWDSsmOp96KfQmlHHXcf1w6zzbspSLL7SISDSappxueQtNNMKku_optNwZbsQdKkGnR76DJSep7XKemJrMXbI2QkT7TohhA0Y41bYzOFfoRiZSN633s1AqRjjpuuiEz-T39xBnjmYvQp7CLCl9Cj-C0EzeaT4-ZmyIVhtBcsXpN_wLCVhNutjdmHCdJeWTbTEIuiWWJT93nggmmXKa7VMWe3JsT-eKUMnLBsTQ25wEaNKtfNXp7XC5EwNyNLeW5tQZgrJr4ZdASaulOakXTim5U7zMGdydeg'
function getApi() {
  const speciesInput = document.querySelector('#species').value;
  const locationInput = encodeURIComponent(document.querySelector('#search-text').value);
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

