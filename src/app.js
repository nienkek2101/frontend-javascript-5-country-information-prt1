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
// Poging 1 - deze werkt niet
// async function countrySearch(everyCountry) {
//     const listOfCountries = document.getElementById('list-of-countries');
//     try {
//         const allCountries = await axios.get('https://restcountries.com/v2/all');
//
//         //console.log(allCountries.data[10].region);
//         const createListOfCountries = everyCountry.map((countryObject) => {
//             const oneCountry = countryObject.name;
//             const stringPopulation = `Has a population of ${countryObject.population} people`;
//             const urlFlag = countryObject.flag;
//
//             return `
//             <li>
//                 <img src="${urlFlag}" class="mini-flag">
//                 <h3 class="${countryObject.region}">${oneCountry}</h3>
//                 <p>${stringPopulation}</p>
//             </li>
//             `;
//         });
//         listOfCountries.innerHTML = `${createListOfCountries.join('')}`;
//          // console.log(allCountries.data);
//     } catch(e) {
//         console.error(e);
//     }
// }
//
// countrySearch(allCountries);

//Poging 2 - deze werkt
// async function countrySearch() {
//     const listOfCountries = document.getElementById('list-of-countries');
//     try {
//         const result = await axios.get('https://restcountries.com/v2/all');
//         const allCountries = result.data;
//         console.log(allCountries);
//
//         //console.log(allCountries.data[10].region);
//         const createListOfCountries = allCountries.map((countryObject) => {
//             const oneCountry = countryObject.name;
//             const stringPopulation = `Has a population of ${countryObject.population} people`;
//             const urlFlag = countryObject.flag;
//
//             return `
//             <li>
//                 <img src="${urlFlag}" class="mini-flag">
//                 <h3 class="${countryObject.region}">${oneCountry}</h3>
//                 <p>${stringPopulation}</p>
//             </li>
//             `;
//         });
//         listOfCountries.innerHTML = `${createListOfCountries.join('')}`;
//         // console.log(allCountries.data);
//     } catch(e) {
//         console.error(e);
//     }
// }
//
// countrySearch();

/* Stap 11 - data sorteren */
// Poging 1
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

// Poging 2 - deze werkt
// async function sortByPopulation() {
//     try {
//         const allCountries = await axios.get('https://restcountries.com/v2/all');
//         const countryPopulation = allCountries.data;
//         //const populationCountryOne = allCountries.data[0].population;
//         countryPopulation.sort((a, b) => {
//             if (a.population > b.population) {
//                 return 1;
//             }
//             if (a.population < b.population) {
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


/* Stap 11 - deel 2 */

async function sortByPopulation() {
    const listOfCountries = document.getElementById('list-of-countries');
    try {
        const allCountries = await axios.get('https://restcountries.com/v2/all');
        const countryPopulation = allCountries.data;

        const sortedCountriesByPopulation = countryPopulation.sort((a, b) => {
            if (a.population > b.population) {
                return 1;
            }
            if (a.population < b.population) {
                return -1;
            }
            return 0;
        })

        const createListOfCountries = sortedCountriesByPopulation.map((countryObject) => {
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
        // console.log(allCountries);
    } catch(e) {
        console.error(e);
    }
}

sortByPopulation();

// Geprobeerd van asynchrone functie een normale functie te maken
// function countrySearch() {
//     const listOfCountries = document.getElementById('list-of-countries');
//     const allCountries = result.data;
//     console.log(allCountries);
//
//     const createListOfCountries = allCountries.map((countryObject) => {
//         const oneCountry = countryObject.name;
//         const stringPopulation = `Has a population of ${countryObject.population} people`;
//         const urlFlag = countryObject.flag;
//
//         return `
//         <li>
//             <img src="${urlFlag}" class="mini-flag">
//             <h3 class="${countryObject.region}">${oneCountry}</h3>
//             <p>${stringPopulation}</p>
//         </li>
//         `;
//     });
//     listOfCountries.innerHTML = `${createListOfCountries.join('')}`;
//     // console.log(allCountries.data);
// }
//
// countrySearch();