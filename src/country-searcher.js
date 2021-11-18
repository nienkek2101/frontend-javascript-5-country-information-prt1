// console.log("Werkt het?")

import axios from 'axios';

// DATA OPHALEN STAPPENPLAN
// 1. installeer en importeer axios
// ---- zoek in de API documentatie het juiste endpoint
// 2. asynchrone functie schrijven
// 3. try - chatch block
// 4. In het try block gaan we ons GET-request maken met axios
// 5. Resultaat loggen
// 6. Probeer een console.log() met de naam van het land maken
// 7. Probeer een console.log() met de populatie van het land maken

// DINGEN OP DE PAGINA WEERGEVEN
// 1. 'anker'-element in het HTML-bestand plaatsen (met ID!)
// 2. Sla de referentie naar dit element op in het JS-bestand
// 3. Gebruik .innerHTML om een stukje data op de pagina te laten zien

// https://restcountries.com/v2/name/peru

/* Stappen uit werkcollege - deel 1*/
// async function getInformationOneCountry() {
//     const countryBlock = document.getElementById('country-information');
//     try {
//         const specificCountry = await axios.get('https://restcountries.com/v2/name/nederland');
//         console.log(specificCountry);
//         // console.log(specificCountry.data[0].name);
//         // console.log(specificCountry.data[0].population);
//         const dataSpecificCountry = specificCountry.data[0];
//
//         const urlFlag = dataSpecificCountry.flag;
//         const countryName = dataSpecificCountry.name;
//         const regionName = dataSpecificCountry.region;
//         const countryPopulation = dataSpecificCountry.population;
//         const countryCapital = dataSpecificCountry.capital;
//         const countryCurrency = dataSpecificCountry.currencies[0].name;
//
//         return countryBlock.innerHTML = `
//         <img src="${urlFlag}" class="flag">
//         <h3>${countryName}</h3>
//         <p>${countryName} is situated in ${regionName}. It has a population of ${countryPopulation}.
//         The capital is ${countryCapital} and you can pay with ${countryCurrency}'s.</p>
//         `;
//
//     } catch(e) {
//         console.error(e);
//     }
// }
//
// getInformationOneCountry();

// ---------------------------------

/* invoerveld + zoeken specifiek land */
// 1. Schrijf een functie die het land zoekt
// 2. Maak een invoerveld
// 3. Maak een zoek button
// 4. Wanneer er op de button wordt geklikt, moet een array functie (denk find) uitgevoerd worden,
// die zoekt naar het woord(land) dat in het invoerveld getypt is.
// 5. Dan moet de informatie van het gevonden land weergegeven worden op de pagina, zoals in
// eerste gedeelte van de opdracht


/* Deel 2 - zoekfunctie integreren*/

// FUNCTIE ZOEKBALK - poging 1 - lukt nog niet
// function searchCountry() {
//     const searchForm = document.getElementById('search-country-form');
//     // searchButton.addEventListener('click');
//     return searchForm.innerHTML = `
//     <form>
//         <input type="text" />
//         <button type="submit">
//             Zoek
//         </button>
//     </form>
//     `
// }
//
// searchCountry();

// FUNCTIE ZOEKBALK - poging 2 - lukt nog niet
// async function searchCountry() {
//     const searchForm = document.getElementById('search-country-form');
//     const form = document.getElementById('form');
//     const country = document.getElementById('input-field');
//     try {
//
//         form.addEventListener('submit');
//         const specificCountry = await axios.get('https://restcountries.com/v2/name/${country}');
//         console.log(specificCountry);
//
//         // searchButton.addEventListener('click');
//         return searchForm.innerHTML = `
//         <form id="form">
//             <input type="text" id="input-field" placeholder="Type hier de naam van het land" />
//             <button type="submit">
//                 Zoek
//             </button>
//         </form>
//         `
//
//     } catch(e) {
//         console.error(e);
//     }
// }
//
// searchCountry();

/* Functie zoekbalk - DEZE WERKT */
const searchForm = document.getElementById('search-country-form');
searchForm.addEventListener('submit', getInformationOneCountry);
// searchForm.reset();


async function getInformationOneCountry(event) {
    event.preventDefault();
    // searchForm.reset();
    const countryBlock = document.getElementById('country-information');
    // let errorMessage.innerHTML = "";
    const errorMessage = document.getElementById('error-message');
    errorMessage.innerHTML = "";

    try {
        const country = document.getElementById('input-field').value;
        const specificCountry = await axios.get(`https://restcountries.com/v2/name/${country}`);
        // console.log(specificCountry);

        const dataSpecificCountry = specificCountry.data[0];

        const urlFlag = dataSpecificCountry.flag;
        const countryName = dataSpecificCountry.name;
        const regionName = dataSpecificCountry.subregion;
        const countryPopulation = dataSpecificCountry.population;
        const countryCapital = dataSpecificCountry.capital;
        const countryCurrency = dataSpecificCountry.currencies[0].name;
        const countryLanguage = dataSpecificCountry.languages[0].name;

        return countryBlock.innerHTML = `
        <img src="${urlFlag}" class="flag">
        <h3>${countryName}</h3>
        <p>${countryName} is situated in ${regionName}. It has a population of ${countryPopulation}.</p>
        <p>The capital is ${countryCapital} and you can pay with ${countryCurrency}'s. </p>
        <p>They speak ${countryLanguage}.</p>
        `;
        // errorMessage.clear;
    } catch(e) {
        console.log("dit is een ongeldige naam");
        return errorMessage.innerHTML = `
        <p>Dit is een ongeldige naam</p>
        `
        console.error(e);
    }
}

// getInformationOneCountry();


// ARRAY METHODE DIE UITGEVOERD MOET WORDEN ASL ER OP ZOEK WORDT GEKLIKT
// const findInfoSingleCountry = watzetikhierneer.find((infoCountries) => {
//     return const foundCountry = (infoCountries.data[i].name === {countrynameuitinvoerveld});
// })