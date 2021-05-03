let stations = {
    serangoonC: {
        name: ['Serangoon','serangoonC'],
        lineName: ['Circle Line','circleLine'],
        stnType: 'Terminal',
        frontBack: ['lorongChuanC']
    },
    lorongChuanC: {
        name: ['Lorong Chuan','lorongChuanC'],
        lineName: ['Circle Line','circleLine'],
        stnType: 'Line',
        frontBack: ['bishanC','serangoonC']
    },
    bishanC: {
        name: ['Bishan','bishanC'],
        turnName: 'bishanR',
        lineName: ['Circle Line','circleLine'],
        stnType: 'Interchange',
        frontBack: ['marymountC','lorongChuanC'],
        leftRight: ['braddellR','angMoKioR']
    },
    marymountC: {
        name: ['Marymount','marymountC'],
        lineName: ['Circle Line','circleLine'],
        stnType: 'Line',
        frontBack: ['caldecottC','bishanC']
    },
    caldecottC: {
        name: ['Caldecott','caldecottC'],
        lineName: 'Circle Line',
        lineType: 'circleLine',
        stnType: 'Line',
        frontBack: ['botanicGardensC','marymountC']
    },
    botanicGardensC: {
        name: ['Botanic Gardens','botanicGardensC'],
        turnName: 'botanicGardensD',
        lineName: ['Circle Line','circleLine'],
        stnType: 'Interchange',
        frontBack: ['farrerRoadC','caldecottC'],
        leftRight: ['stevensD','tanKahKeeD']
    },
    farrerRoadC: {
        name: ['Farrer Road','farrerRoadC'],
        lineName: ['Circle Line','circleLine'],
        stnType: 'Line',
        frontBack: ['hollandVillageC','botanicGardensC']
    },
    hollandVillageC: {
        name: ['Holland Village','hollandVillageC'],
        lineName: ['Circle Line','circleLine'],
        stnType: 'Terminal',
        frontBack: ['farrerRoadC']
    },
    sixthAveD: {
        name: ['Sixth Ave','sixthAveD'],
        lineName: ['Downtown Line','downtownLine'],
        stnType: 'Terminal',
        frontBack: ['tanKahKeeD']
    },
    tanKahKeeD: {
        name: ['Tan Kah Kee','tanKahKeeD'],
        lineName: ['Downtown Line','downtownLine'],
        lineType: 'downtownLine',
        stnType: 'Line',
        frontBack: ['botanicGardensD','sixthAveD']
    },
    botanicGardensD: {
        name: ['Botanic Gardens','botanicGardensD'],
        lineName: ['Downtown Line','downtownLine'],
        turnName: 'botanicGardensC',
        stnType: 'Interchange',
        frontBack: ['stevensD','tanKahKeeD'],
        leftRight: ['caldecottC','farrerRoadC']
    },
    stevensD: {
        name: ['Stevens','stevensD'],
        lineName: ['Downtown Line','downtownLine'],
        stnType: 'Line',
        frontBack: ['newtonD','botanicGardensD']
    },
    newtonD: {
        name: ['Newton','newtonD'],
        lineName: ['Downtown Line','downtownLine'],
        turnName: 'newtonR',
        stnType: 'Interchange',
        frontBack: ['littleIndiaD','stevensD'],
        leftRight: ['novenaR','orchardR']
    },
    littleIndiaD: {
        name: ['Little India','littleIndiaD'],
        lineName: ['Downtown Line','downtownLine'],
        stnType: 'Line',
        frontBack: ['rochorD','newtonD']
    },
    rochorD: {
        name: ['Rochor','rochorD'],
        lineName: ['Downtown Line','downtownLine'],
        stnType: 'Terminal',
        frontBack: ['littleIndiaD']
    },
    somersetR: {
        name: ['Somerset','somersetR'],
        lineName: ['Red Line','redLine'],
        stnType: 'Terminal',
        frontBack: ['orchardR']
    },
    orchardR: {
        name: ['Orchard','orchardR'],
        lineName: ['Red Line','redLine'],
        stnType: 'Line',
        frontBack: ['newtonR','somersetR']
    },
    newtonR: {
        name: ['Newton','newtonR'],
        turnName: 'newtonD',
        lineName: ['Red Line','redLine'],
        stnType: 'Interchange',
        frontBack: ['novenaR','orchardR'],
        leftRight: ['stevensD','littleIndiaD']
    },
    novenaR: {
        name: ['Novena','novenaR'],
        lineName: ['Red Line','redLine'],
        stnType: 'Line',
        frontBack: ['toaPayohR','newtonR']
    },
    toaPayohR: {
        name: ['Toa Payoh','toaPayohR'],
        lineName: ['Red Line','redLine'],
        stnType: 'Line',
        frontBack: ['braddellR','novenaR']
    },
    braddellR: {
        name: ['Braddell','braddellR'],
        lineName: ['Red Line','redLine'],
        stnType: 'Line',
        frontBack: ['bishanR','toaPayohR']
    },
    bishanR: {
        name: ['Bishan','bishanR'],
        turnName: 'bishanC',
        lineName: ['Red Line','redLine'],
        stnType: 'Interchange',
        frontBack: ['angMoKioR','braddellR'],
        leftRight: ['marymountC','lorongChuanC']
    },
    angMoKioR: {
        name: ['Ang Mo Kio','angMoKioR'],
        lineName: ['Red Line','redLine'],
        stnType: 'Line',
        frontBack: ['yioChuKangR','bishanR']
    },
    yioChuKangR: {
        name: ['Yio Chu Kang','yioChuKangR'],
        lineName: ['Red Line','redLine'],
        stnType: 'Terminal',
        frontBack: ['angMoKioR']
    }
}

let routeMainRecord = []

function findRoute(startStn, endStn) { //parent of the search function
    let startStnObj = stations[startStn]
    let endStnObj = stations[endStn]
    if (startStnObj === endStnObj) { // basic check to see whether the start and end station are the same
        console.log('Start and End station are the same')
    } else {
        console.log(`Finding the shortest route between ${startStnObj.name[0]} and ${endStnObj.name[0]}`)
                routeMainRecord = [] // array to store the solutions found
        routeFinder(startStnObj, endStnObj, [],'',0,'') // recursive array to search through the network to find working routes and stores it in routeMainArray
        console.log('Shortest route found:')
        console.log(shortestRoute(routeMainRecord)) // to print the shortest route found
        console.log(' ')
    }
}

function shortestRoute(routeArray){ // array which returns the shortest route
    let shortest = routeArray[0]
    routeArray.forEach(function(ele){
        if (ele.length <= shortest.length) {
            shortest = ele
        }
    })
    return shortest
}

function routeFinder(currentStn, endStn, routeRecord,routeStr,turnCount, prevStn) {
    routeRecord.push(currentStn.name[0]) // to record the entire search path, useful for debug purposes
    routeStr += currentStn.name[0] // adds the current route to a string
    routeStr += '-->' // adds a divider

    let currentStnType = currentStn.stnType // to retrieve the station type, which would decide which search pattern to use later on
    let searchArray = [] // array to store which stations will be searched next along front and back axis

    if (prevStn===''){ // if no previous station (ie function is called for the first time, both front and back stations will be called
        searchArray.push(0,1)
    } else {
        searchArray.push(1 - currentStn.frontBack.findIndex(function(stn){ // by using the previous station to define the next station to be called
            return stn === prevStn
        })) // array stores the index of the next station along front and back to be called
    }

    if (currentStnType === 'Line') { // search pattern if station is a line
        searchArray.forEach(function(dir){
            let nextStn = stations[currentStn.frontBack[dir]] // calling the obj for the next station
            if (nextStn === endStn) { //if the end station has been found, logs the end station to routeRecord, logs routeRecord to routeMainRecord and exits
                routeRecord.push(nextStn.name[0])
                routeStr += nextStn.name[0]
                routeMainRecord.push(routeStr)
            } else {
                routeFinder(nextStn,endStn,routeRecord,routeStr,turnCount,currentStn.name[1]) // calls the recursive function on the next station
            }
        })
    } else if (currentStnType==='Interchange') { // search pattern if station is an interchange
        searchArray.forEach(function(dir) {
            let nextStn = stations[currentStn.frontBack[dir]] // calling the obj for the next station
            if (nextStn === endStn) { //if the end station has been found, logs the end station to routeRecord, logs routeRecord to routeMainRecord and exits
                routeRecord.push(nextStn.name[0])
                routeStr += nextStn.name[0]
                routeMainRecord.push(routeStr)
            } else {
                routeFinder(nextStn, endStn, routeRecord, routeStr, turnCount, currentStn.name[1]) // calls the recursive function on the next station
            }
        })

        if (turnCount<=1) { // checking if the number of turns is 1 or below. if 2 turns have already been made, skips checking of left and right stations
            currentStn.leftRight.forEach(function (stn) { //checks both left and right stations
                let nextStn = stations[stn] // calling the obj for the next station
                if (nextStn === endStn) {  //if the end station has been found, logs the end station to routeRecord, logs routeRecord to routeMainRecord and exits
                    routeRecord.push(nextStn.name[0])
                    // routeStr += "Change line-->"
                    routeStr += nextStn.name[0]
                    routeMainRecord.push(routeStr)
                } else {
                    turnCount++ // increments turn count
                    routeStr += "Change line-->" // inserts change line into the route string
                    routeFinder(nextStn, endStn, routeRecord, routeStr, turnCount, currentStn.turnName) // calls the recursive function on the next station
                }

            })
        }
    } else if (currentStnType==='Terminal') { // search pattern if station is an interchange
        if (prevStn==='') { // if search starts on a terminal station
            let nextStn = stations[currentStn.frontBack[0]] // next station will be the only neighbouring station
            if (nextStn === endStn) { //if the end station has been found, logs the end station to routeRecord, logs routeRecord to routeMainRecord and exits
                routeRecord.push(nextStn.name[0])
                routeStr += nextStn.name[0]
                routeMainRecord.push(routeStr)
                return
            } else {
                routeFinder(nextStn, endStn, routeRecord, routeStr, turnCount, currentStn.name[1]) // calls the recursive function on the next station
            }
        }
        currentRoute = []
    }
}
findRoute('novenaR','novenaR')
findRoute('yioChuKangR','somersetR')
findRoute('tanKahKeeD','angMoKioR')
findRoute('littleIndiaD','farrerRoadC')
findRoute('orchardR','lorongChuanC')
findRoute('farrerRoadC','orchardR')


