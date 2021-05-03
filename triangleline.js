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

function findRoute(startStn, endStn) {
    let startStnObj = stations[startStn]
    let endStnObj = stations[endStn]
    if (startStnObj === endStnObj) {
        console.log('Start and End station are the same')
    } else {
        routeMainRecord = []
        routeFinder(startStnObj, endStnObj, [],[],'')
        console.log(routeMainRecord)
    }
}

function routeFinder(currentStn, endStn, routeRecord, turnCount, prevStn) {
    console.log(' ')
    console.log("new routeFinder call")
    console.log('start > '+currentStn.name[1])
    console.log('end > '+endStn.name[1])
    console.log('prev > '+prevStn)

    let currentRoute = routeRecord
    currentRoute.push(currentStn.name[0])
    console.log(' ')
    console.log('routeRecord')
    console.log(currentRoute)

    let currentStnType = currentStn.stnType
    let searchArray = []

    console.log(' ')
    console.log('search array')
    if (prevStn===''){
        searchArray.push(0,1)
        console.log(searchArray)
    } else {
        console.log(currentStn.frontBack)
        console.log(prevStn)
        searchArray.push(1 - currentStn.frontBack.findIndex(function(stn){
            return stn === prevStn
        }))
        console.log(searchArray)
    }

    if (currentStnType === 'Line') {
        console.log('Line Search Loop')
        searchArray.forEach(function(dir){
            console.log(dir)
            let nextStn = stations[currentStn.frontBack[dir]]
            console.log(nextStn)
            console.log('Next Station > '+nextStn.name[1])
            if (nextStn === endStn) {
                console.log('###END STATION FOUND###')
                currentRoute.push(nextStn.name[0])
                console.log(currentRoute)
                routeMainRecord.push(currentRoute)
                console.log(routeMainRecord)
                currentRoute = []
                console.log('routeRecord cleared')
            } else {
                routeFinder(nextStn,endStn,currentRoute,turnCount,currentStn.name[1])
            }
        })
    } else if (currentStnType==='Interchange') {
        console.log('Interchange Search Loop')
        searchArray.forEach(function(dir) {
            let nextStn = stations[currentStn.frontBack[dir]]
            console.log(currentStn)
            console.log(nextStn)
            console.log('Next Station > ' + nextStn.name[1])
            if (nextStn === endStn) {
                console.log('end station found')
                currentRoute.push(nextStn.name[0])
                console.log(currentRoute)
                routeMainRecord.push(currentRoute)
                console.log(routeMainRecord)
                currentRoute = []
                console.log('routeRecord cleared')
            } else {
                routeFinder(nextStn, endStn, currentRoute, turnCount, currentStn.name[1])
            }
        })

        if (turnCount<=1) {
            console.log('Interchange left right Search Loop')
            console.log('current > '+currentStn.name[1])
            console.log(currentStn.leftRight)
            currentStn.leftRight.forEach(function (stn) {
                console.log(stn)
                let nextStn = stations[stn]
                console.log(nextStn)
                console.log('Next Station > ' + nextStn.name[1])
                if (nextStn === endStn) {
                    console.log('end station found')
                    currentRoute.push(nextStn.name[0])
                    console.log(currentRoute)
                    routeMainRecord.push(currentRoute)
                    console.log(routeMainRecord)
                    currentRoute = []
                    console.log('routeRecord cleared')
                } else {
                    turnCount++
                    routeFinder(nextStn, endStn, currentRoute, turnCount, currentStn.turnName)
                }

            })
        }
    } else if (currentStnType==='Terminal') {
        console.log('Terminal Search Loop')
        if (prevStn==='') {
            let nextStn = stations[currentStn.frontBack[0]]
            if (nextStn === endStn) {
                console.log('end station found')
                currentRoute.push(nextStn.name[0])
                console.log(currentRoute)
                routeMainRecord.push(currentRoute)
                console.log(routeMainRecord)
                currentRoute = []
                console.log('routeRecord cleared')
                return
            } else {
                routeFinder(nextStn, endStn, currentRoute, turnCount, currentStn.name[1])
            }
        }
        console.log('Terminal Station Reached')
        currentRoute = []
        console.log('routeRecord cleared')
    }
}

// findRoute('novenaR','braddellR')
// findRoute('tanKahKeeD','angMoKioR')
// findRoute('littleIndiaD','farrerRoadC')
// findRoute('orchardR','lorongChuanC')
findRoute('farrerRoadC','orchardR')


