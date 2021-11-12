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


// Hier zit stap 8 in de functie geïntegreerd.
// async function countrySearch() {
//     const listOfCountries = document.getElementById('list-of-countries');
//     try {
//         const allCountries = await axios.get('https://restcountries.com/v2/all');
//
//         const oneCountry = allCountries.data[10].name;
//         const stringPopulation = `Has a population of ${allCountries.data[10].population} people`;
//         const urlFlag = allCountries.data[10].flag;
//
//         console.log(allCountries.data[10].region);
//
//         return listOfCountries.innerHTML = `
//         <li>
//             <img src="${urlFlag}" class="mini-flag">
//             <h3 class="${allCountries.data[10].region}">${oneCountry}</h3>
//             <p>${stringPopulation}</p>
//         </li>
//         `;
//
//         // console.log(allCountries.data);
//     } catch(e) {
//         console.error(e);
//     }
// }
//
// countrySearch();


/* Poging met afhankelijk van regio een kleur aan de naam van het land geven - ik liep vast */

// async function countrySearch() {
//     const listOfCountries = document.getElementById('list-of-countries');
//     try {
//         const allCountries = await axios.get('https://restcountries.com/v2/all');
//
//         const oneCountry = allCountries.data[5].name;
//         const stringPopulation = `Has a population of ${allCountries.data[5].population} people`;
//         const urlFlag = allCountries.data[5].flag;
//         const whatRegion = allCountries.data[5].region;
//         const isAfrica = "africa";
//         const isAmericas = "americas";
//         const isAsia = "asia";
//         const isEurope = "europe";
//         const isOceania = "oceania";
//
//         if (whatRegion === "africa") {
//             <h3 class="${isAfrica}">${oneCountry}</h3>
//         }
//
//         return listOfCountries.innerHTML = `
//         <li>
//             <img src="${urlFlag}" class="mini-flag">
//
//             <p>${stringPopulation}</p>
//         </li>
//         `;
//         // console.log(allCountries.data);
//     } catch(e) {
//         console.error(e);
//     }
// }

/* Stap 10 - map methode */
async function countrySearch(everyCountry) {
    const listOfCountries = document.getElementById('list-of-countries');
    try {
        const allCountries = await axios.get('https://restcountries.com/v2/all');

        //console.log(allCountries.data[10].region);
        const createListOfCountries = everyCountry.map((countryObject) => {
            const oneCountry = countryObject.name;
            const stringPopulation = `Has a population of ${countryObject.population} people`;
            const urlFlag = countryObject.flag;

            return `
            <li>
                <img src="${urlFlag}" class="mini-flag">
                <h3 class="${countryObject.region}">${oneCountry}</h3>
                <p>${stringPopulation}</p>
            </li>
            `;
        });
        listOfCountries.innerHTML = `${createListOfCountries.join('')}`;
         // console.log(allCountries.data);
    } catch(e) {
        console.error(e);
    }
}

countrySearch(allCountries);

/* Stap 11 - data sorteren */
// async function sortByPopulation() {
//     // const listOfCountries = document.getElementById('list-of-countries');
//     try {
//         const allCountries = await axios.get('https://restcountries.com/v2/all');
//         const countryPopulation = allCountries.data.population;
//         //const populationCountryOne = allCountries.data[0].population;
//         countryPopulation.sort((a, b) => {
//             if (a > b) {
//                 return 1;
//             }
//             if (a < b) {
//                 return -1;
//             }
//             return 0;
//         })
//         console.log(allCountries);
//         //console.log(allCountries.data[10].region);
//
//     } catch(e) {
//         console.error(e);
//     }
// }
//
// sortByPopulation();
