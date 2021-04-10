function fetchCountries(queryCounrty) {
  const baseUrl = 'https://restcountries.eu/rest/v2/';

return fetch(baseUrl + `name/${queryCounrty}`)
  .then(res => res.json())
  .catch(err => err);
}

export default fetchCountries;