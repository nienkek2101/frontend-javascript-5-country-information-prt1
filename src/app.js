import axios from 'axios';
// import {listeners} from "../dist/index.d56a3cb1";

console.log('Hallo daar!');

// async function fetchJoke() {
//     try {
//         const result = await axios.get('https://api.chucknorris.io/jokes/random');
//         console.log(result);
//     } catch(e) {
//         console.error(e);
//     }
// }
//
// fetchJoke();

async function countrySearch() {
    const listOfCountries = document.getElementById('list-of-countries');
    try {
        const allCountries = await axios.get('https://restcountries.com/v2/all');
        const oneCountry = allCountries.data[5].name;
        const stringPopulation = `Has a population of ${allCountries.data[5].population} people`;
        return listOfCountries.innerHTML = `
        <li>
            <h3>${oneCountry}</h3>
            <p>${stringPopulation}</p>
        </li>
        `;
        // console.log(allCountries.data);
    } catch(e) {
        console.error(e);
    }
}

countrySearch();