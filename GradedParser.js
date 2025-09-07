const l_CardList = ["Pigni", "Burpig", "Inferhog", "Blazoar", "Kidsune", "Bonfiox", "Honobi", "Kyuenbi", "Nanomite", "Decimite", "Meganite", "Giganite", "Sapoling", "Forush", "Timbro", "Mammotree", "Minstar", "Trickstar", "Princestar", "Kingstar", "Shellow", "Clamigo", "Aquariff", "Fistronk", "Wurmgle", "Pupazz", "Mothini", "Royalama", "Nocti", "Lunight", "Vampicant", "Dracunix", "Minotos", "Drilceros", "Grizzaw", "Jelicleen", "Wispo", "Mummog", "Helio", "Pixy", "Flory", "Magnoria", "Werboo", "Flami", "Angez", "Moskit", "Kyrone", "Twofrost", "Threeze", "Hydroid", "Drakon", "Bogon", "Hydron", "Raizon", "Tortugor", "Lupup", "Luphire", "Lucinder", "Lucadence", "Gupi", "Sharfin", "Gilgabass", "Jigajawr", "Batrang", "Dusko", "Wolgin", "Jacktern", "Tetron", "Raxx", "Gannon", "GigatronX", "Clawop", "Clawdos", "Clawaken", "Clawcifear", "Sunflork", "Scarlios", "Scarkgorus", "Crobib", "Crosilisk", "Crorathian", "Nimblis", "Nimboculo", "Nimbustrike", "Esmeri", "Esmerock", "Esmerdios", "Litspire", "Voltrex", "Crablox", "Clawvenger", "Flambrolly", "Lumie", "Seedant", "Budwing", "Buzzeed", "Beakai", "Talontsu", "Talonika", "Talonryu", "Kataryu", "Katengu", "Mufflin", "Muffleur", "Mufflimax", "Anguifish", "Amneshark", "Amnesilla", "Frizard", "Gekoflare", "Terradrakon", "Flamchik", "Pyropeck", "Poseia", "Posteed", "Poseigon", "Poseidrake", "Sludglop", "Sludgetox", "Toxigoop", "Toximuck"];
const l_SortedCardList = l_CardList.toSorted();
const l_GhostCardList = ["Blazoar", "Kyuenbi", "Giganite", "Mammotree", "Kingstar", "Fistronk", "Royalama", "Dracunix", "Magnoria", "Hydroid", "Drakon", "Bogon", "Hydron", "Raizon", "Lucadence", "Jigajawr", "Jacktern", "GigatronX", "Clawcifear", "Katengu"];
const l_SortedGhostCardList = l_GhostCardList.toSorted();

const l_RarityList = ["Basic", "First Edition", "Silver", "Gold", "EX", "Full Art", "Foil Basic", "Foil First Edition", "Foil Silver", "Foil Gold", "Foil EX", "Foil Full Art"];
const l_GhostRarityList = ["Normal", "Foil"];

const l_GhostTypeList = ["Light", "Dark"];

const l_BasicPackList = ["Pigni", "Kidsune", "Nanomite", "Sapoling", "Minstar", "Shellow", "Wurmgle", "Nocti", "Helio", "Werboo", "Flami", "Kyrone", "Lupup", "Gupi", "Batrang", "Tetron", "Clawop", "Sunflork", "Crobib", "Nimblis", "Esmeri", "Seedant", "Mufflin", "Anguifish", "Flamchik", "Poseia", "Sludglop"];
const l_SortedBasicPackList = l_BasicPackList.toSorted();
const l_RarePackList = ["Burpig", "Bonfiox", "Decimite", "Forush", "Trickstar", "Clamigo", "Pupazz", "Lunight", "Minotos", "Jelicleen", "Wispo", "Mummog", "Pixy", "Angez", "Twofrost", "Luphire", "Sharfin", "Dusko", "Raxx", "Clawdos", "Scarlios", "Crosilisk", "Nimboculo", "Esmerock", "Crablox", "Lumie", "Budwing", "Beakai", "Muffleur", "Amneshark", "Frizard", "Pyropeck", "Posteed", "Sludgetox"];
const l_SortedRarePackList = l_RarePackList.toSorted();
const l_EpicPackList = ["Inferhog", "Honobi", "Meganite", "Timbro", "Princestar", "Aquariff", "Mothini", "Vampicant", "Drilceros", "Grizzaw", "Flory", "Moskit", "Threeze", "Tortugor", "Lucinder", "Gilgabass", "Wolgin", "Gannon", "Clawaken", "Scarkgorus", "Crorathian", "Nimbustrike", "Esmerdios", "Litspire", "Clawvenger", "Buzzeed", "Talontsu", "Talonika", "Kataryu", "Mufflimax", "Amnesilla", "Gekoflare", "Poseigon", "Toxigoop"];
const l_SortedEpicPackList = l_EpicPackList.toSorted();
const l_LegendaryPackList = ["Blazoar", "Kyuenbi", "Giganite", "Mammotree", "Kingstar", "Fistronk", "Royalama", "Dracunix", "Magnoria", "Hydroid", "Drakon", "Bogon", "Hydron", "Raizon", "Lucadence", "Jigajawr", "Jacktern", "GigatronX", "Clawcifear", "Voltrex", "Flambrolly", "Talonryu", "Katengu", "Terradrakon", "Poseidrake", "Toximuck"];
const l_SortedLegendaryPackList = l_LegendaryPackList.toSorted();

//25 : small shelf display
//26 : big shelf display
//40 : big wall display
//41 : small wall display
const l_CardShelfIndexes = [25, 26, 40, 41];

var l_dataFromSaveFile;

function getGradedCardDict(convertedJson) {
    let l_CurrentBaseCards = [];
    let l_CurrentDestinyCards = [];
    let l_CurrentGhostCards = [];

    let l_CardListToUseForSorting = l_CardList;
    let l_GhostCardListToUseForSorting = l_GhostCardList;
    let l_BasicListToUseForSorting = l_BasicPackList;
    let l_RareListToUseForSorting = l_RarePackList;
    let l_EpicListToUseForSorting = l_EpicPackList;
    let l_LegendaryListToUseForSorting = l_LegendaryPackList;

    const sortingType = document.querySelector('input[name="sortingType"]:checked').value;

    if (sortingType == "alpha") {
        l_CardListToUseForSorting = l_SortedCardList;
        l_GhostCardListToUseForSorting = l_SortedGhostCardList;
        l_BasicListToUseForSorting = l_SortedBasicPackList;
        l_RareListToUseForSorting = l_SortedRarePackList;
        l_EpicListToUseForSorting = l_SortedEpicPackList;
        l_LegendaryListToUseForSorting = l_SortedLegendaryPackList;
    }

    for (let i = 0; i < 12 * l_CardListToUseForSorting.length; i++) {
        const cardName = l_CardListToUseForSorting[Math.floor(i / 12)] + " " + l_RarityList[i % 12];
        l_CurrentBaseCards.push({ name: cardName, gradedList: new Array(10).fill(0) });
        l_CurrentDestinyCards.push({ name: cardName, gradedList: new Array(10).fill(0) });
    }

    for (let i = 0; i < 4 * l_GhostCardListToUseForSorting.length; i++) {
        
        let GhostNameIndex = Math.floor((i / 2) % 20);
        let GhostRarityIndex = i % 2;
        let GhostTypeIndex = Math.floor(i / 40);
        
        if (sortingType == "alpha") {
            GhostNameIndex = Math.floor(i / 4);
            GhostRarityIndex = i % 2;
            GhostTypeIndex = Math.floor((i % 4) / 2);
        }
        
        const cardName = l_GhostCardListToUseForSorting[GhostNameIndex] + " " + l_GhostRarityList[GhostRarityIndex] + " " + l_GhostTypeList[GhostTypeIndex];
        l_CurrentGhostCards.push({ name: cardName, gradedList: new Array(10).fill(0) });
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
                            indexToAdd = l_GhostCardListToUseForSorting.indexOf(l_CardList[card.monsterType - 1]) * 2 + card.isFoil + card.isDestiny * 40;
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

function convertToTable(rawJSON) {
    var read = new FileReader();
    read.readAsBinaryString(rawJSON);
    read.onloadend = function(){
        let convertedJson = JSON.parse(read.result);
        getGradedCardDict(convertedJson);
        createTable(l_dataFromSaveFile);
    }   
}

function updateTables() {
    createTable(l_dataFromSaveFile);
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

function doesNameMatchInput(text) {
    const inputText = document.getElementById("nameInput").value;
    return text.toLowerCase().includes(inputText.toLowerCase());
}

function isExpansionChecked(expansionIndex) {
    const expansionInputName = "checkExpansion" + expansionIndex;
    return document.getElementById(expansionInputName).checked;
}

function createTable(arraysToParse) {
    
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
    var nameGhostSpan;
    const sortingType = document.querySelector('input[name="sortingType"]:checked').value;
    if (sortingType == "alpha") {
        nameGhostSpan = 2;
    } else {
        nameGhostSpan = 1;
    }
    

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
        for (const value of arraysToParse[0]) {
            const cardNameSplit = value.name.split(' ');
            if (doesCardMatchFilter(value) && doesNameMatchInput(cardNameSplit[0])) {
                var missing = 0;
                var strLine = '<tr>';
                if (currentSpanCounter == 0) {
                    strLine += `<td style="vertical-align:middle" rowspan="${nameSpan.toString()}">${cardNameSplit[0]}</td>`;
                }
                strLine += `<td>${cardNameSplit.slice(1).join(' ')}</td>`;
                var checkLine = "checkGrade1";
                for (let i = 0; i<10; i++) {
                    checkLine = "checkGrade"+(i+1).toString();
                    if (document.getElementById(checkLine).checked) {
                        if (value.gradedList[i] == 0) {
                            strLine += `<td bgcolor="lightgray">${value.gradedList[i].toString()}</td>`;
                            missing++;
                        } else {
                            strLine += `<td>${value.gradedList[i].toString()}</td>`;
                        }
                    }
                }
                strLine += `<td>${missing.toString()}</td></tr>`;
                if (document.getElementById("checkNoMissing").checked && !missing) {
                    strLine = "";
                }
                totalTableStrBase += strLine;
                currentSpanCounter = (currentSpanCounter + 1) % nameSpan;
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
        for (const value of arraysToParse[1]) {
            const cardNameSplit = value.name.split(' ');
            if (doesCardMatchFilter(value) && doesNameMatchInput(cardNameSplit[0])) {
                var missing = 0;
                var strLine = '<tr>';
                if (currentSpanCounter == 0) {
                    strLine += `<td style="vertical-align:middle" rowspan="${nameSpan.toString()}">${cardNameSplit[0]}</td>`;
                }
                strLine += `<td>${cardNameSplit.slice(1).join(' ')}</td>`;
                var checkLine = "checkGrade1";
                for (let i = 0; i<10; i++) {
                    checkLine = "checkGrade"+(i+1).toString();
                    if (document.getElementById(checkLine).checked) {
                        if (value.gradedList[i] == 0) {
                            strLine += `<td bgcolor="lightgray">${value.gradedList[i].toString()}</td>`;
                            missing++;
                        } else {
                            strLine += `<td>${value.gradedList[i].toString()}</td>`;
                        }
                    }
                }
                strLine += `<td>${missing.toString()}</td></tr>`;
                if (document.getElementById("checkNoMissing").checked && !missing) {
                    strLine = "";
                }
                totalTableStrDestiny += strLine;
                currentSpanCounter = (currentSpanCounter + 1) % nameSpan;
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
        for (const value of arraysToParse[2]) {
            const cardNameSplit = value.name.split(' ');
            if (doesCardMatchFilter(value) && doesNameMatchInput(cardNameSplit[0])) {
                var missing = 0;
                var strLine = '<tr>';
                if (currentSpanCounter == 0) {
                    strLine += `<td style="vertical-align:middle" rowspan="${nameGhostSpan.toString()}">${cardNameSplit[0]}</td>`;
                }
                strLine += `<td>${cardNameSplit.slice(1).join(' ')}</td>`;
                var checkLine = "checkGrade1";
                for (let i = 0; i<10; i++) {
                    checkLine = "checkGrade"+(i+1).toString();
                    if (document.getElementById(checkLine).checked) {
                        if (value.gradedList[i] == 0) {
                            strLine += `<td bgcolor="lightgray">${value.gradedList[i].toString()}</td>`;
                            missing++;
                        } else {
                            strLine += `<td>${value.gradedList[i].toString()}</td>`;
                        }
                    }
                }
                strLine += `<td>${missing.toString()}</td></tr>`;
                if (document.getElementById("checkNoMissing").checked && !missing) {
                    strLine = "";
                }
                totalTableStrGhost += strLine;
                currentSpanCounter = (currentSpanCounter + 1) % nameGhostSpan;
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