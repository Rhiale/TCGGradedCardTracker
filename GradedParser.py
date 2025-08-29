l_CardList = ["Pigni", "Burpig", "Inferhog", "Blazoar", "Kidsune", "Bonfiox", "Honobi", "Kyuenbi", "Nanomite", "Decimite", "Meganite", "Giganite", "Sapoling", "Forush", "Timbro", "Mammotree", "Minstar", "Trickstar", "Princestar", "Kingstar", "Shellow", "Clamigo", "Aquariff", "Fistronk", "Wurmgle", "Pupazz", "Mothini", "Royalama", "Nocti", "Lunight", "Vampicant", "Dracunix", "Minotos", "Drilceros", "Grizzaw", "Jelicleen", "Wispo", "Mummog", "Helio", "Pixy", "Flory", "Magnoria", "Werboo", "Flami", "Angez", "Moskit", "Kyrone", "Twofrost", "Threeze", "Hydroid", "Drakon", "Bogon", "Hydron", "Raizon", "Tortugor", "Lupup", "Luphire", "Lucinder", "Lucadence", "Gupi", "Sharfin", "Gilgabass", "Jigajawr", "Batrang", "Dusko", "Wolgin", "Jacktern", "Tetron", "Raxx", "Gannon", "GigatronX", "Clawop", "Clawdos", "Clawaken", "Clawcifear", "Sunflork", "Scarlios", "Scarkgorus", "Crobib", "Crosilisk", "Crorathian", "Nimblis", "Nimboculo", "Nimbustrike", "Esmeri", "Esmerock", "Esmerdios", "Litspire", "Voltrex", "Crablox", "Clawvenger", "Flambrolly", "Lumie", "Seedant", "Budwing", "Buzzeed", "Beakai", "Talontsu", "Talonika", "Talonryu", "Kataryu", "Katengu", "Mufflin", "Muffleur", "Mufflimax", "Anguifish", "Amneshark", "Amnesilla", "Frizard", "Gekoflare", "Terradrakon", "Flamchik", "Pyropeck", "Poseia", "Posteed", "Poseigon", "Poseidrake", "Sludglop", "Sludgetox", "Toxigoop", "Toximuck"]
l_GhostCardList = ["Blazoar", "Kyuenbi", "Giganite", "Mammotree", "Kingstar", "Fistronk", "Royalama", "Dracunix", "Magnoria", "Hydroid", "Drakon", "Bogon", "Hydron", "Raizon", "Lucadence", "Jigajawr", "Jacktern", "GigatronX", "Clawcifear", "Katengu"]
l_RarityList = ["Basic", "First Edition", "Silver", "Gold", "EX", "Full Art", "Foil", "Foil FE", "Foil Silver", "Foil Gold", "Foil EX", "Foil Full Art"]
l_GhostRarityList = ["Normal", "Foil"]
l_GhostTypeList = ["Light", "Dark"]
#25 : small shelf display
#26 : big shelf display
#40 : big wall display
#41 : small wall display
l_CardShelfIndexes = [25, 26, 40, 41]

def getGradedCardDict(convertedJson):
    l_CurrentBaseCards = []
    l_CurrentDestinyCards = []
    l_CurrentGhostCards = []

    for i in range(12*len(l_CardList)):
        cardName = l_CardList[i//12] + " " + l_RarityList[i%12]
        l_CurrentBaseCards.append({"name": cardName, "gradedList": [0 for i in range(10)]})
        l_CurrentDestinyCards.append({"name": cardName, "gradedList": [0 for i in range(10)]})

    for i in range(4*len(l_GhostCardList)):
        cardName = l_GhostCardList[(i//2)%20] + " " + l_GhostRarityList[i%2] + " " + l_GhostTypeList[i//40]
        l_CurrentGhostCards.append({"name": cardName, "gradedList": [0 for i in range(10)]})

    for elt in convertedJson["m_GradedCardInventoryList"]:
        if elt["expansionType"] == 2:
            listToAdd = l_CurrentGhostCards
        elif elt["expansionType"] == 1:
            listToAdd = l_CurrentDestinyCards
        else:
            listToAdd = l_CurrentBaseCards
        indexForCard = elt["cardSaveIndex"]
        if elt["expansionType"] == 2 and elt["isDestiny"]:
            indexForCard += 40
        listToAdd[indexForCard]["gradedList"][elt["amount"]-1] += 1

    for elt in convertedJson["m_CardShelfSaveDataList"]:
        if elt["objectType"] in l_CardShelfIndexes:
            for card in elt["cardDataList"]:
                if card["monsterType"] > 0:
                        if card["expansionType"] == 2:
                            listToAdd = l_CurrentGhostCards
                            indexToAdd = l_GhostCardList.index(l_CardList[card["monsterType"]-1])*2+card["isFoil"]+card["isDestiny"]*40
                        elif card["expansionType"] == 1:
                            listToAdd = l_CurrentDestinyCards
                            indexToAdd = (card["monsterType"]-1)*12+card["isFoil"]*6+card["borderType"]
                        else:
                            listToAdd = l_CurrentBaseCards
                            indexToAdd = (card["monsterType"]-1)*12+card["isFoil"]*6+card["borderType"]
                        listToAdd[indexToAdd]["gradedList"][card["cardGrade"]-1] += 1

    return l_CurrentBaseCards, l_CurrentDestinyCards, l_CurrentGhostCards