const l_CardList = ["Pigni", "Burpig", "Inferhog", "Blazoar", "Kidsune", "Bonfiox", "Honobi", "Kyuenbi", "Nanomite", "Decimite", "Meganite", "Giganite", "Sapoling", "Forush", "Timbro", "Mammotree", "Minstar", "Trickstar", "Princestar", "Kingstar", "Shellow", "Clamigo", "Aquariff", "Fistronk", "Wurmgle", "Pupazz", "Mothini", "Royalama", "Nocti", "Lunight", "Vampicant", "Dracunix", "Minotos", "Drilceros", "Grizzaw", "Jelicleen", "Wispo", "Mummog", "Helio", "Pixy", "Flory", "Magnoria", "Werboo", "Flami", "Angez", "Moskit", "Kyrone", "Twofrost", "Threeze", "Hydroid", "Drakon", "Bogon", "Hydron", "Raizon", "Tortugor", "Lupup", "Luphire", "Lucinder", "Lucadence", "Gupi", "Sharfin", "Gilgabass", "Jigajawr", "Batrang", "Dusko", "Wolgin", "Jacktern", "Tetron", "Raxx", "Gannon", "GigatronX", "Clawop", "Clawdos", "Clawaken", "Clawcifear", "Sunflork", "Scarlios", "Scarkgorus", "Crobib", "Crosilisk", "Crorathian", "Nimblis", "Nimboculo", "Nimbustrike", "Esmeri", "Esmerock", "Esmerdios", "Litspire", "Voltrex", "Crablox", "Clawvenger", "Flambrolly", "Lumie", "Seedant", "Budwing", "Buzzeed", "Beakai", "Talontsu", "Talonika", "Talonryu", "Kataryu", "Katengu", "Mufflin", "Muffleur", "Mufflimax", "Anguifish", "Amneshark", "Amnesilla", "Frizard", "Gekoflare", "Terradrakon", "Flamchik", "Pyropeck", "Poseia", "Posteed", "Poseigon", "Poseidrake", "Sludglop", "Sludgetox", "Toxigoop", "Toximuck"];
const l_GhostCardList = ["Blazoar", "Kyuenbi", "Giganite", "Mammotree", "Kingstar", "Fistronk", "Royalama", "Dracunix", "Magnoria", "Hydroid", "Drakon", "Bogon", "Hydron", "Raizon", "Lucadence", "Jigajawr", "Jacktern", "GigatronX", "Clawcifear", "Katengu"];

const l_RarityList = ["Basic", "First Edition", "Silver", "Gold", "EX", "Full Art", "Foil Basic", "Foil First Edition", "Foil Silver", "Foil Gold", "Foil EX", "Foil Full Art"];
const l_GhostRarityList = ["Normal", "Foil"];

const l_GhostTypeList = ["Light", "Dark"];

const l_BasicPackList = ["Pigni", "Kidsune", "Nanomite", "Sapoling", "Minstar", "Shellow", "Wurmgle", "Nocti", "Helio", "Werboo", "Flami", "Kyrone", "Lupup", "Gupi", "Batrang", "Tetron", "Clawop", "Sunflork", "Crobib", "Nimblis", "Esmeri", "Seedant", "Mufflin", "Anguifish", "Flamchik", "Poseia", "Sludglop"];
const l_RarePackList = ["Burpig", "Bonfiox", "Decimite", "Forush", "Trickstar", "Clamigo", "Pupazz", "Lunight", "Minotos", "Jelicleen", "Wispo", "Mummog", "Pixy", "Angez", "Twofrost", "Luphire", "Sharfin", "Dusko", "Raxx", "Clawdos", "Scarlios", "Crosilisk", "Nimboculo", "Esmerock", "Crablox", "Lumie", "Budwing", "Beakai", "Muffleur", "Amneshark", "Frizard", "Pyropeck", "Posteed", "Sludgetox"];
const l_EpicPackList = ["Inferhog", "Honobi", "Meganite", "Timbro", "Princestar", "Aquariff", "Mothini", "Vampicant", "Drilceros", "Grizzaw", "Flory", "Moskit", "Threeze", "Tortugor", "Lucinder", "Gilgabass", "Wolgin", "Gannon", "Clawaken", "Scarkgorus", "Crorathian", "Nimbustrike", "Esmerdios", "Litspire", "Clawvenger", "Buzzeed", "Talontsu", "Talonika", "Kataryu", "Mufflimax", "Amnesilla", "Gekoflare", "Poseigon", "Toxigoop"];
const l_LegendaryPackList = ["Blazoar", "Kyuenbi", "Giganite", "Mammotree", "Kingstar", "Fistronk", "Royalama", "Dracunix", "Magnoria", "Hydroid", "Drakon", "Bogon", "Hydron", "Raizon", "Lucadence", "Jigajawr", "Jacktern", "GigatronX", "Clawcifear", "Voltrex", "Flambrolly", "Talonryu", "Katengu", "Terradrakon", "Poseidrake", "Toximuck"];

//25 : small shelf display
//26 : big shelf display
//40 : big wall display
//41 : small wall display
const l_CardShelfIndexes = [25, 26, 40, 41];

function getGradedCardDict(convertedJson) {
    let l_CurrentBaseCards = [];
    let l_CurrentDestinyCards = [];
    let l_CurrentGhostCards = [];

    for (let i = 0; i < 12 * l_CardList.length; i++) {
        const cardName = l_CardList[Math.floor(i / 12)] + " " + l_RarityList[i % 12];
        l_CurrentBaseCards.push({ name: cardName, gradedList: new Array(10).fill(0) });
        l_CurrentDestinyCards.push({ name: cardName, gradedList: new Array(10).fill(0) });
    }

    for (let i = 0; i < 4 * l_GhostCardList.length; i++) {
        const cardName = l_GhostCardList[Math.floor((i / 2) % 20)] + " " + l_GhostRarityList[i % 2] + " " + l_GhostTypeList[Math.floor(i / 40)];
        l_CurrentGhostCards.push({ name: cardName, gradedList: new Array(10).fill(0) });
    }

    for (const elt of convertedJson.m_GradedCardInventoryList) {
        let listToAdd;
        if (elt.expansionType === 2) {
            listToAdd = l_CurrentGhostCards;
        } else if (elt.expansionType === 1) {
            listToAdd = l_CurrentDestinyCards;
        } else {
            listToAdd = l_CurrentBaseCards;
        }
        let indexForCard = elt.cardSaveIndex;
        if (elt.expansionType === 2 && elt.isDestiny) {
            indexForCard += 40;
        }
        listToAdd[indexForCard].gradedList[elt.amount - 1] += 1;
    }

    for (const elt of convertedJson.m_CardShelfSaveDataList) {
        if (l_CardShelfIndexes.includes(elt.objectType)) {
            for (const card of elt.cardDataList) {
                if (card.monsterType > 0) {
                    let listToAdd;
                    let indexToAdd;
                    if (card.expansionType === 2) {
                        listToAdd = l_CurrentGhostCards;
                        indexToAdd = l_GhostCardList.indexOf(l_CardList[card.monsterType - 1]) * 2 + card.isFoil + card.isDestiny * 40;
                    } else if (card.expansionType === 1) {
                        listToAdd = l_CurrentDestinyCards;
                        indexToAdd = (card.monsterType - 1) * 12 + card.isFoil * 6 + card.borderType;
                    } else {
                        listToAdd = l_CurrentBaseCards;
                        indexToAdd = (card.monsterType - 1) * 12 + card.isFoil * 6 + card.borderType;
                    }
                    listToAdd[indexToAdd].gradedList[card.cardGrade - 1] += 1;
                }
            }
        }
    }

    return [l_CurrentBaseCards, l_CurrentDestinyCards, l_CurrentGhostCards];
}

function convertToTable(rawJSON) {
    var read = new FileReader();
    read.readAsBinaryString(rawJSON);
    read.onloadend = function(){
        let convertedJson = JSON.parse(read.result);
        let arrayCards = getGradedCardDict(convertedJson);
        createTable(arrayCards);
    }
    
}

function doesCardMatchFilter(cardArray) {
    let cardTypeArray = cardArray.name.split(' ');
    if (l_BasicPackList.includes(cardTypeArray[0])) {
        if (!document.getElementById("checkType1").checked) {
            return false;
        }
    } else if (l_RarePackList.includes(cardTypeArray[0])) {
        if (!document.getElementById("checkType2").checked) {
            return false;
        }
    } else if (l_EpicPackList.includes(cardTypeArray[0])) {
        if (!document.getElementById("checkType3").checked) {
            return false;
        }
    } else if (l_LegendaryPackList.includes(cardTypeArray[0])) {
        if (!document.getElementById("checkType4").checked) {
            return false;
        }
    }
    
    if (cardTypeArray.includes("Foil") && !document.getElementById("checkFoil").checked) {
        return false;
    } else if (!cardTypeArray.includes("Foil") && !document.getElementById("checkNonFoil").checked) {
        return false;
    }

    if (cardTypeArray.includes("Basic") && !document.getElementById("checkRarity1").checked) {
        return false;
    } else if (cardTypeArray.includes("First") && !document.getElementById("checkRarity2").checked) {
        return false;
    } else if (cardTypeArray.includes("Silver") && !document.getElementById("checkRarity3").checked) {
        return false;
    } else if (cardTypeArray.includes("Gold") && !document.getElementById("checkRarity4").checked) {
        return false;
    } else if (cardTypeArray.includes("EX") && !document.getElementById("checkRarity5").checked) {
        return false;
    } else if (cardTypeArray.includes("Full") && !document.getElementById("checkRarity6").checked) {
        return false;
    }

    return true;
}

function createTable(arraysToParse) {
    const tableDataBase = arraysToParse[0].map(value => {
        if (doesCardMatchFilter(value)) {
            var strLine = `<tr><td>${value.name}</td>`
            var checkLine = "checkGrade1";
            for (let i = 0; i<10; i++) {
                checkLine = "checkGrade"+(i+1).toString();
                if (document.getElementById(checkLine).checked) {
                    strLine += `<td>${value.gradedList[i].toString()}</td>`;
                }
            }
            strLine += "</tr>";
            return strLine;
        };
    }).join('');

    const tableDataDestiny = arraysToParse[1].map(value => {
        if (doesCardMatchFilter(value)) {
            var strLine = `<tr><td>${value.name}</td>`
            var checkLine = "checkGrade1";
            for (let i = 0; i<10; i++) {
                checkLine = "checkGrade"+(i+1).toString();
                if (document.getElementById(checkLine).checked) {
                    strLine += `<td>${value.gradedList[i].toString()}</td>`;
                }
            }
            strLine += "</tr>";
            return strLine;
        };
    }).join('');

    const tableDataGhost = arraysToParse[2].map(value => {
        if (doesCardMatchFilter(value)) {
            var strLine = `<tr><td>${value.name}</td>`
            var checkLine = "checkGrade1";
            for (let i = 0; i<10; i++) {
                checkLine = "checkGrade"+(i+1).toString();
                if (document.getElementById(checkLine).checked) {
                    strLine += `<td>${value.gradedList[i].toString()}</td>`;
                }
            }
            strLine += "</tr>";
            return strLine;
        };
    }).join('');

    var dataHeadCommon = '';
    var checkLine = "checkGrade1";
    for (let i = 0; i<10; i++) {
        checkLine = "checkGrade"+(i+1).toString();
        if (document.getElementById(checkLine).checked) {
            dataHeadCommon += `<th scope="col">${(i+1).toString()}</th>`;
        }
    }

    const dataHeadBase = `<tr><th scope="col">Base Card Name</th>`+dataHeadCommon+"</tr>";

    const dataHeadDestiny = `<tr><th scope="col">Destiny Card Name</th>`+dataHeadCommon+"</tr>";

    const dataHeadGhost = `<tr><th scope="col">Ghost Card Name</th>`+dataHeadCommon+"</tr>";

    const tableHeadBase = document.querySelector("#tableHeadBase");
    tableHeadBase.innerHTML = dataHeadBase;

    const tableHeadDestiny = document.querySelector("#tableHeadDestiny");
    tableHeadDestiny.innerHTML = dataHeadDestiny;

    const tableHeadGhost = document.querySelector("#tableHeadGhost");
    tableHeadGhost.innerHTML = dataHeadGhost;

    const tableBodyBase = document.querySelector("#tableBodyBase");
    tableBodyBase.innerHTML = tableDataBase;

    const tableBodyDestiny = document.querySelector("#tableBodyDestiny");
    tableBodyDestiny.innerHTML = tableDataDestiny;

    const tableBodyGhost = document.querySelector("#tableBodyGhost");
    tableBodyGhost.innerHTML = tableDataGhost;
}