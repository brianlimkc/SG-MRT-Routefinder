let stations = {
    circleLine: {
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
            name: 'Caldecott',
            lineName: 'Circle Line',
            lineType: 'circleLine',
            stnType: 'Line',
            frontBack: ['botanicGardensC','marymountC']
        },
        botanicGardensC: {
            name: ['Botanic Gardens','botanicGardensC'],
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
            name: 'Holland Village',
            lineName: ['Circle Line','circleLine'],
            stnType: 'Terminal',
            frontBack: ['farrerRoadC']
        }
    },
    downtownLine : {
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
    },
    redLine: {
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
            name: 'Braddell',
            lineName: ['Red Line','redLine'],
            stnType: 'Line',
            frontBack: ['bishanR','toaPayohR']
        },
        bishanR: {
            name: ['Bishan','bishanR'],
            lineName: ['Red Line','redLine'],
            stnType: 'Interchange',
            frontBack: ['Ang Mo Kio','braddellR'],
            leftRight: ['marymountC','lorongChuanC']
        },
        angMoKioR: {
            name: 'Ang Mo Kio',
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
}

let routeMainRecord = []

function findRoute(startStn, endStn) {
    if (startStn.name[0] === endStn.name[0]) {
        console.log('Start and End station are the same')
    } else {
        routeMainRecord = []

        routeFinder(startStn, endStn, [],[],'')
        console.log(routeMainRecord)
    }
}

function routeFinder(currentStn, endStn, routeRecord, turnCount, prevStn) {
    console.log('new routeFinder call')
    routeRecord.push(currentStn.name[0])
    let currentLine = stations[currentStn.lineName[1]]
    let currentStnType = currentStn.stnType
    if (currentStnType === 'Line') {
        if (prevStn === '') {
            let nextStn0 = stations[currentLine][currentStn.frontBack[0]]
            let nextStn1 = stations[currentLine][currentStn.frontBack[0]]
            if (nextStn0===endStn) {
                routeRecord.push(nextStn0)
                routeMainRecord.push(routeRecord)
            } else {

            }


            routeFinder(stations[currentStn.lineType][currentStn.frontBack[0]],endStn,routeRecord,turnCount)
            routeFinder(stations[currentStn.lineType][currentStn.frontBack[1]],endStn,routeRecord,turnCount)
        }   else {
            let direction = 1 - currentStn.frontBack.findIndex(prevStn)
            routeFinder(stations[currentStn.lineType][currentStn.frontBack[direction]],endStn,routeRecord,turnCount)
        }
    } else if (currentStn.stnType === 'terminal') {
        if (prevStn === '') {
            routeFinder(stations[currentStn.lineType][currentStn.frontBack[0]],endStn,routeRecord,turnCount)
        }
    } else if (currentStn.stnType === 'Line') {
        if (prevStn === '') {
            routeFinder(stations[currentStn.lineType][currentStn.frontBack[0]],endStn,routeRecord,turnCount)
            routeFinder(stations[currentStn.lineType][currentStn.frontBack[1]],endStn,routeRecord,turnCount)
        }   else {
            let direction = 1 - currentStn.frontBack.findIndex(prevStn)
            routeFinder(stations[currentStn.lineType][currentStn.frontBack[direction]],endStn,routeRecord,turnCount)
        }
        if (turnCount <= 1) {

        }
    }
}


/*
function steps
- adds current station to routeRecord
- checks station type
    - if line
        - checks previousStation
        - checks if nextStation is the endStation
        - if yes - add nextStation to routeRecord, adds routeRecord to routeMainRecord and returns to exit
        - if no -   call recursive function on nextStation
    - if terminal
        - checks previousStation
        - if no previousStation, then call recursive function on nextStation
    - if interChange
        - line
            - checks previousStation
            - checks if nextStation is the endStation
            - if yes - add nextStation to routeRecord, adds routeRecord to routeMainRecord and returns to exit
            - if no -   call recursive function on nextStation
        - leftRight
            - checks turnCount
                - if more than two left turns or right turns, check if nextStation is endStation
                - else check both left and right stations
                    if calling either left or right stations, log left or right turn into turnCount

Things to do

main parent function
- takes in start and end station
- checks whether start and end station are the same
- defines routeMainRecord function
- calls recursive function
- compares all routes discovered and selects shortest route
- logs the route

Recursive function

to take in following variables
- start station
- end station
- routeRecord
- turnCount (no more than two left or right turns
- previousStation




 */


// function nextStop(stationObj,directionId) {
//     console.log(stationObj.name)
//     if (stationObj.stnType ==="Terminal") {
//         console.log('This is a terminal station')
//     } else if (directionId===0) {
//            let adjoinStn = stationObj.adjoining[0]
//         nextStop(stations.circleLine[adjoinStn], 0)
//     }
// }
//
// nextStop(stations.circleLine.lorongChuan,0)
