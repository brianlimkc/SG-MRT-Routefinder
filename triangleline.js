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
        console.log(`Finding the shortest route between ${startStnObj.name[0]} and ${endStnObj.name[0]}`)
                routeMainRecord = []
        routeFinder(startStnObj, endStnObj, [],'',0,'')
        console.log('Shortest route found:')
        console.log(shortestRoute(routeMainRecord))
        console.log(' ')
    }
}

function shortestRoute(routeArray){
    let shortest = routeArray[0]
    routeArray.forEach(function(ele){
        if (ele.length <= shortest.length) {
            shortest = ele
        }
    })
    return shortest
}

function routeFinder(currentStn, endStn, routeRecord,routeStr,turnCount, prevStn) {
    routeRecord.push(currentStn.name[0])
    routeStr += currentStn.name[0]
    routeStr += '-->'

    let currentStnType = currentStn.stnType
    let searchArray = []

    if (prevStn===''){
        searchArray.push(0,1)
    } else {
        searchArray.push(1 - currentStn.frontBack.findIndex(function(stn){
            return stn === prevStn
        }))
    }

    if (currentStnType === 'Line') {
        searchArray.forEach(function(dir){
            let nextStn = stations[currentStn.frontBack[dir]]
            if (nextStn === endStn) {
                routeRecord.push(nextStn.name[0])
                routeStr += nextStn.name[0]
                routeMainRecord.push(routeStr)
            } else {
                routeFinder(nextStn,endStn,routeRecord,routeStr,turnCount,currentStn.name[1])
            }
        })
    } else if (currentStnType==='Interchange') {

        searchArray.forEach(function(dir) {
            let nextStn = stations[currentStn.frontBack[dir]]
            if (nextStn === endStn) {
                routeRecord.push(nextStn.name[0])
                routeStr += nextStn.name[0]
                routeMainRecord.push(routeStr)
            } else {
                routeFinder(nextStn, endStn, routeRecord, routeStr, turnCount, currentStn.name[1])
            }
        })

        if (turnCount<=1) {
            currentStn.leftRight.forEach(function (stn) {
                let nextStn = stations[stn]
                if (nextStn === endStn) {
                    routeRecord.push(nextStn.name[0])
                    // routeStr += "Change line-->"
                    routeStr += nextStn.name[0]
                    routeMainRecord.push(routeStr)
                } else {
                    turnCount++
                    routeStr += "Change line-->"
                    routeFinder(nextStn, endStn, routeRecord, routeStr, turnCount, currentStn.turnName)
                }

            })
        }
    } else if (currentStnType==='Terminal') {
        if (prevStn==='') {
            let nextStn = stations[currentStn.frontBack[0]]
            if (nextStn === endStn) {
                routeRecord.push(nextStn.name[0])
                routeStr += nextStn.name[0]
                routeMainRecord.push(routeStr)
                return
            } else {
                routeFinder(nextStn, endStn, routeRecord, routeStr, turnCount, currentStn.name[1])
            }
        }
        currentRoute = []
    }
}

findRoute('novenaR','braddellR')
findRoute('tanKahKeeD','angMoKioR')
findRoute('littleIndiaD','farrerRoadC')
findRoute('orchardR','lorongChuanC')
findRoute('farrerRoadC','orchardR')


