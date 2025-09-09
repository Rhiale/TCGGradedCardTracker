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

var l_dataFromSaveFile;
var l_dataToDisplay;
var l_GradesToDisplay;

function getGradedCardDict(convertedJson) {
    let l_CurrentBaseCards = [];
    let l_CurrentDestinyCards = [];
    let l_CurrentGhostCards = [];

    for (let i = 0; i < 12 * l_CardList.length; i++) {
        l_CurrentBaseCards.push({ name: l_CardList[Math.floor(i / 12)], rarity: l_RarityList[i % 12], gradedList: new Array(10).fill(0) });
        l_CurrentDestinyCards.push({ name: l_CardList[Math.floor(i / 12)], rarity: l_RarityList[i % 12], gradedList: new Array(10).fill(0) });
    }

    for (let i = 0; i < 4 * l_GhostCardList.length; i++) {
        
        let GhostNameIndex = Math.floor((i / 2) % 20);
        let GhostRarityIndex = i % 2;
        let GhostTypeIndex = Math.floor(i / 40);
        l_CurrentGhostCards.push({ name: l_GhostCardList[GhostNameIndex], rarity: l_GhostRarityList[GhostRarityIndex] + " " + l_GhostTypeList[GhostTypeIndex], gradedList: new Array(10).fill(0) });
    }

    if (document.getElementById("checkBinder").checked) {
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
    }

    if (document.getElementById("checkDisplays").checked) {
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
    }

    l_dataFromSaveFile = [l_CurrentBaseCards, l_CurrentDestinyCards, l_CurrentGhostCards];
}

function doesEltHaveMoreMissing(array1, array2, isAsc) {
    var missing1 = countZero(array1);
    var missing2 = countZero(array2);
    if (isAsc) {
        return missing1 < missing2;
    } else {
        return missing1 > missing2;
    }
}

function sortData() {
    const sortingType = document.querySelector('input[name="sortingType"]:checked').value;
    if (sortingType == "alpha") {
        for (let dataTable of l_dataToDisplay) {
            dataTable.sort((a, b) => a.name.localeCompare(b.name));
        }
    } else if (sortingType == "default") {
        for (let dataTable of l_dataToDisplay) {
            dataTable.sort((a, b) => l_CardList.indexOf(a.name) - l_CardList.indexOf(b.name));
        }
    } else if (sortingType == "missingAsc") {
        for (let dataTable of l_dataToDisplay) {
            dataTable.sort((a, b) => doesEltHaveMoreMissing(a.gradedList, b.gradedList, true))
        }
    } else if (sortingType == "missingDesc") {
        for (let dataTable of l_dataToDisplay) {
            dataTable.sort((a, b) => doesEltHaveMoreMissing(a.gradedList, b.gradedList, false))
        }
    }
    createTable();
}

function updateGradesToDisplay() {
    l_GradesToDisplay = [];
    var checkLine;
    for (let i=0;i<10;i++) {
        checkLine = "checkGrade"+(i+1).toString();
        if (document.getElementById(checkLine).checked) {
            l_GradesToDisplay.push(i);
        }
    }
    updateDisplayTables();
}

function convertToTable(rawJSON) {
    var read = new FileReader();
    read.readAsBinaryString(rawJSON);
    read.onloadend = function(){
        let convertedJson = JSON.parse(read.result);
        getGradedCardDict(convertedJson);
        updateGradesToDisplay();
    }
}

function countZero(array, test = "") {
    var count = 0;
    if (test == "Test") {
        console.log(array);
    }
    for (let i = 0;i<array.length;i++) {
        if (test == "Test") {
            console.log(array[i]);
        }
        if (array[i] == 0) {
            count++;
        }
    }
    return count;
}

function updateDisplayTables() {
    l_dataToDisplay = [];
    for (const table of l_dataFromSaveFile) {
        var l_currentTableToDisplay = [];
        for (const elt of table) {
            var newGradeList = l_GradesToDisplay.map(i => elt.gradedList[i]);
            newElt = {name: elt.name, rarity: elt.rarity, gradedList: newGradeList};
            if (doesCardMatchFilter(newElt) && doesNameMatchInput(elt.name)) {

                l_currentTableToDisplay.push(newElt);
            }
        }
        l_dataToDisplay.push(l_currentTableToDisplay);
    }
    sortData();
}

function doesCardMatchFilter(cardArray) {
    let cardTypeArray = cardArray.rarity;
    if (l_BasicPackList.includes(cardArray.name) && !document.getElementById("checkType1").checked) {
        return false;
    } else if (l_RarePackList.includes(cardArray.name) && !document.getElementById("checkType2").checked) {
        return false;
    } else if (l_EpicPackList.includes(cardArray.name) && !document.getElementById("checkType3").checked) {
        return false;
    } else if (l_LegendaryPackList.includes(cardArray.name) && !document.getElementById("checkType4").checked) {
        return false;
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

    if (countZero(cardArray.gradedList) == 0 && document.getElementById("checkNoMissing").checked) {
        return false;
    }
    return true;
}

function doesNameMatchInput(text) {
    const inputText = document.getElementById("nameInput").value;
    return text.toLowerCase().includes(inputText.toLowerCase());
}

function isExpansionChecked(expansionIndex) {
    const expansionInputName = "checkExpansion" + expansionIndex;
    return document.getElementById(expansionInputName).checked;
}

function getOccurencesOfName(arrayToLook, value, normalSpan) {
    const indexStart = arrayToLook.indexOf(value);
    var indexNotSameName = normalSpan;
    for (let i=1;i<normalSpan;i++) {
        if (indexStart + i == arrayToLook.length || arrayToLook[indexStart + i].name != value.name) {
            return i;
        }
    }
    return normalSpan;
}

function createTable() {
    
    var dataHeadCommon = '';
    var checkLine = "checkGrade1";
    for (let i = 0; i<10; i++) {
        checkLine = "checkGrade"+(i+1).toString();
        if (document.getElementById(checkLine).checked) {
            dataHeadCommon += `<th scope="col">${(i+1).toString()}</th>`;
        }
    }
    dataHeadCommon += '<th scope="col">Missing</th>';

    var nameSpan = 0;
    var nameGhostSpan = 4;

    if (document.getElementById("checkRarity1").checked) {
        nameSpan++;
    }
    if (document.getElementById("checkRarity2").checked) {
        nameSpan++;
    }
    if (document.getElementById("checkRarity3").checked) {
        nameSpan++;
    }
    if (document.getElementById("checkRarity4").checked) {
        nameSpan++;
    }
    if (document.getElementById("checkRarity5").checked) {
        nameSpan++;
    }
    if (document.getElementById("checkRarity6").checked) {
        nameSpan++;
    }
    var foilMulti = 0;
    if (document.getElementById("checkNonFoil").checked) {
        foilMulti++;
    }
    if (document.getElementById("checkFoil").checked) {
        foilMulti++;
    }

    nameSpan = nameSpan * foilMulti;
    nameGhostSpan = nameGhostSpan * foilMulti;

    if (isExpansionChecked("1")) {
        var currentSpanCounter = 0;
        var totalTableStrBase = '';
        var usedSpan = nameSpan;
        for (const value of l_dataToDisplay[0]) {
            var l_GradesToCount = [];
            var strLineGrades = '';
            var missing = 0;
            for (let i = 0; i<value.gradedList.length; i++) {
                if (value.gradedList[i] == 0) {
                    strLineGrades += `<td bgcolor="lightgray">${value.gradedList[i].toString()}</td>`;
                    missing++;
                } else {
                    strLineGrades += `<td>${value.gradedList[i].toString()}</td>`;
                }
            }
            var strLine = '<tr>';
            if (currentSpanCounter == 0) {
                usedSpan = getOccurencesOfName(l_dataToDisplay[0], value, nameSpan);
                strLine += `<td style="vertical-align:middle" rowspan="${usedSpan.toString()}">${value.name}</td>`;
            }
            strLine += `<td>${value.rarity}</td>`;
            strLine += strLineGrades;
            strLine += `<td>${missing.toString()}</td></tr>`;
            totalTableStrBase += strLine;
            if (currentSpanCounter == usedSpan - 1) {
                currentSpanCounter = 0;
                usedSpan = nameSpan;
            } else {
                currentSpanCounter++;
            };
        };

        const dataHeadBase = `<tr><th scope="col">Base Card</th><th scope="col">Rarity</th>`+dataHeadCommon+"</tr>";

        const tableHeadBase = document.querySelector("#tableHeadBase");
        tableHeadBase.innerHTML = dataHeadBase;

        const tableBodyBase = document.querySelector("#tableBodyBase");
        tableBodyBase.innerHTML = totalTableStrBase;
    } else {
        const tableHeadBase = document.querySelector("#tableHeadBase");
        tableHeadBase.innerHTML = "";

        const tableBodyBase = document.querySelector("#tableBodyBase");
        tableBodyBase.innerHTML = "";
    }

    if (isExpansionChecked("2")) {
        var currentSpanCounter = 0;
        var totalTableStrDestiny = '';
        var usedSpan = nameSpan;
        for (const value of l_dataToDisplay[1]) {
            var l_GradesToCount = [];
            var strLineGrades = '';
            var missing = 0;
            for (let i = 0; i<value.gradedList.length; i++) {
                if (value.gradedList[i] == 0) {
                    strLineGrades += `<td bgcolor="lightgray">${value.gradedList[i].toString()}</td>`;
                    missing++;
                } else {
                    strLineGrades += `<td>${value.gradedList[i].toString()}</td>`;
                }
            }
            var strLine = '<tr>';
            if (currentSpanCounter == 0) {
                usedSpan = getOccurencesOfName(l_dataToDisplay[1], value, nameSpan);
                strLine += `<td style="vertical-align:middle" rowspan="${usedSpan.toString()}">${value.name}</td>`;
            }
            strLine += `<td>${value.rarity}</td>`;
            strLine += strLineGrades;
            strLine += `<td>${missing.toString()}</td></tr>`;
            totalTableStrDestiny += strLine;
            if (currentSpanCounter == usedSpan - 1) {
                currentSpanCounter = 0;
                usedSpan = nameSpan;
            } else {
                currentSpanCounter++;
            };
        };

        const dataHeadDestiny = `<tr><th scope="col">Destiny Card</th><th>Rarity</th>`+dataHeadCommon+"</tr>";

        const tableHeadDestiny = document.querySelector("#tableHeadDestiny");
        tableHeadDestiny.innerHTML = dataHeadDestiny;

        const tableBodyDestiny = document.querySelector("#tableBodyDestiny");
        tableBodyDestiny.innerHTML = totalTableStrDestiny;
    } else {
        const tableHeadDestiny = document.querySelector("#tableHeadDestiny");
        tableHeadDestiny.innerHTML = "";

        const tableBodyDestiny = document.querySelector("#tableBodyDestiny");
        tableBodyDestiny.innerHTML = "";
    }

    if (isExpansionChecked("3")) {
        var currentSpanCounter = 0;
        var totalTableStrGhost = '';
        var usedSpan = nameGhostSpan;
        for (const value of l_dataToDisplay[2]) {
            var l_GradesToCount = [];
            var strLineGrades = '';
            var missing = 0;
            for (let i = 0; i<value.gradedList.length; i++) {
                if (value.gradedList[i] == 0) {
                    strLineGrades += `<td bgcolor="lightgray">${value.gradedList[i].toString()}</td>`;
                    missing++;
                } else {
                    strLineGrades += `<td>${value.gradedList[i].toString()}</td>`;
                }
            }
            var strLine = '<tr>';
            if (currentSpanCounter == 0) {
                usedSpan = getOccurencesOfName(l_dataToDisplay[2], value, nameGhostSpan);
                strLine += `<td style="vertical-align:middle" rowspan="${usedSpan.toString()}">${value.name}</td>`;
            }
            strLine += `<td>${value.rarity}</td>`;
            strLine += strLineGrades;
            strLine += `<td>${missing.toString()}</td></tr>`;
            totalTableStrGhost += strLine;
            if (currentSpanCounter == usedSpan - 1) {
                currentSpanCounter = 0;
                usedSpan = nameGhostSpan;
            } else {
                currentSpanCounter++;
            };
        };

        const dataHeadGhost = `<tr><th scope="col">Ghost Card</th><th>Rarity</th>`+dataHeadCommon+"</tr>";

        const tableHeadGhost = document.querySelector("#tableHeadGhost");
        tableHeadGhost.innerHTML = dataHeadGhost;

        const tableBodyGhost = document.querySelector("#tableBodyGhost");
        tableBodyGhost.innerHTML = totalTableStrGhost;
    } else {
        const tableHeadGhost = document.querySelector("#tableHeadGhost");
        tableHeadGhost.innerHTML = "";

        const tableBodyGhost = document.querySelector("#tableBodyGhost");
        tableBodyGhost.innerHTML = "";
    }
}

function checkAll(value) {
    for (const elt of document.getElementsByName("checkbox")) {
        elt.checked = value;
    }
    convertToTable(document.getElementById("saveFile").files.item(0));
}