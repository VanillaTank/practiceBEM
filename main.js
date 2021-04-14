// class SwapiService {

//     _apiBase = 'https://swapi.dev/api';

//     async getResource (url) {
//       const res = await fetch(`${this._apiBase}${url}`)
//       if (!res.ok) {
//         throw new Error(`Could not fetch ${url}, received ${res.status}`)
//       }
//       return await res.json();
//     }
//     async getAllPeople () {
//       const res = await this.getResource(`/people/`);
//       return res.results;

//     }
//     async getPerson (id) {
//       return this.getResource(`/people/${id}`)
//     }
//     async getAllPlanets() {
//       const res = await this.getResource(`/planets/`)
//       return res.results
//     }
//     async getPlanet (id) {
//       return this.getResource(`/planets/${id}`)
//     }
//     async getAllStarships() {
//       const res = await this.getResource(`/starships/`)
//       return res.results
//     }
//     async getStarship (id) {
//       return this.getResource(`/starships/${id}`)
//     }
//   }

//   const output = document.querySelector('.swapiDiv')


//   const swapi = new SwapiService
//   swapi.getPlanet(9).then((p) => {
//     output.innerHTML = p.name
//   })

// async function postData(url) {
//   const res = await fetch(url, {
//     mode: 'no-cors'
//   });
//   if (!res.ok) {
//     throw new Error(`Could not fetch ${url}, received ${res.status}`)
//   }
//   return await res.json();
// }

// postData('http://localhost:5500/api/posts')
//   .then((data) => {
//     console.log(dat 

const inputs = [...document.querySelectorAll('input')];
inputs.forEach( item => {
  item.addEventListener('invalid', (evt) => {
    if(item.validity.valueMissing) {
      item.setCustomValidity('Значение тютю(')
    }

  })
})