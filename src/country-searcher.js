console.log("Werkt het?")

import axios from 'axios';

// https://restcountries.com/v2/name/peru

async function getInformationOneCountry() {
    const countryBlock = document.getElementById('country-information');
    try {
        const specificCountry = await axios.get('https://restcountries.com/v2/name/nederland');
        console.log(specificCountry);
        // console.log(specificCountry.data[0].name);
        // console.log(specificCountry.data[0].population);
        const dataSpecificCountry = specificCountry.data[0];

        const urlFlag = dataSpecificCountry.flag;
        const countryName = dataSpecificCountry.name;
        const regionName = dataSpecificCountry.region;
        const countryPopulation = dataSpecificCountry.population;
        const countryCapital = dataSpecificCountry.capital;
        const countryCurrency = dataSpecificCountry.currencies[0].name;

        return countryBlock.innerHTML = `
        <img src="${urlFlag}" class="flag">
        <h3>${countryName}</h3>
        <p>${countryName} is situated in ${regionName}. It has a population of ${countryPopulation}.
        The capital is ${countryCapital} and you can pay with ${countryCurrency}'s.</p>
        `;

    } catch(e) {
        console.error(e);
    }
}

getInformationOneCountry();


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
