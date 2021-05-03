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
        name: ['Braddell','braddellR'],
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
    console.log(' ')

    routeRecord.push(currentStn.name[0])
    console.log('routeRecord')
    console.log(routeRecord)

    let currentStnType = currentStn.stnType
    let searchArray = []
    console.log(' ')
    console.log('search array')
    if (prevStn==''){
        searchArray.push(0,1)
        console.log(searchArray)
    } else {
        console.log(currentStn.frontBack)
        console.log(prevStn)
        searchArray.push(1 - currentStn.frontBack.findIndex(function(stn){
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
                console.log('end station found')
                routeRecord.push(nextStn.name[0])
                console.log(routeRecord)
                routeMainRecord.push(routeRecord)
                console.log(routeMainRecord)
                return
            } else {
                routeFinder(nextStn,endStn,routeRecord,turnCount,currentStn.name[1])
            }
        })
    } else if (currentStnType==='Interchange') {
        console.log('Interchange Search Loop')
        searchArray.forEach(function(dir) {
            let nextStn = stations[currentStn.frontBack[dir]]
            console.log('Next Station > ' + nextStn.name[1])

            if (nextStn === endStn) {
                console.log('end station found')
                routeRecord.push(nextStn.name[0])
                console.log(routeRecord)
                routeMainRecord.push(routeRecord)
                console.log(routeMainRecord)
                return
            } else {
                routeFinder(nextStn, endStn, routeRecord, turnCount, currentStn.name[1])
            }
        })

        if (turnCount<=1) {
            console.log('Interchange left right Search Loop')
            console.log(currentStn.name[1])
            console.log(currentStn.leftRight)
            currentStn.leftRight.forEach(function (stn) {
                console.log(stn)
                let nextStn = stations[stn]
                console.log(nextStn)
                console.log('Next Station > ' + nextStn.name[1])
                if (nextStn === endStn) {
                    console.log('end station found')
                    routeRecord.push(nextStn.name[0])
                    console.log(routeRecord)
                    routeMainRecord.push(routeRecord)
                    console.log(routeMainRecord)
                    return
                } else {
                    turnCount++
                    routeFinder(nextStn, endStn, routeRecord, turnCount, currentStn.name[1])
                }

            })
        }
    } else if (currentStnType==='Terminal') {
        console.log('Terminal Search Loop')
        if (prevStn=='') {
            let nextStn = stations[currentStn.frontBack[0]]
            if (nextStn === endStn) {
                console.log('end station found')
                routeRecord.push(nextStn.name[0])
                console.log(routeRecord)
                routeMainRecord.push(routeRecord)
                console.log(routeMainRecord)
                return
            } else {
                routeFinder(nextStn, endStn, routeRecord, turnCount, currentStn.name[1])
            }
        }
        console.log('Terminal Station Reached')
    }
}


            // let nextStn0 = stations[currentStn.frontBack[0]]
            // let nextStn1 = stations[currentStn.frontBack[1]]

            // if (prevStn!=='') {
            //     let direction = 1 - currentStn.frontBack.findIndex(prevStn)
            // }

            /*

            check if prevstn = ''
                search array = [0,1]
             else set search array =  1 - currentStn.frontBack.findIndex(prevStn)

            if stntype =
                line
                    searcharray foreach dir
                        define next station using dir
                        check if next station = endstn
                            record routerecord
                            record routemain record
                        else call new function


            */


            // if (currentStnType === 'Line') {
            //     if (prevStn === '') {
            //         console.log(nextStn0)
            //         console.log(nextStn1)
            //         routeFinder(nextStn0, endStn, routeRecord, turnCount)
            //         routeFinder(nextStn1, endStn, routeRecord, turnCount)
            //     } else if (nextStn0 === endStn) {
            //             console.log('End Station Found')
            //             routeRecord.push(nextStn0)
            //             routeMainRecord.push(routeRecord)
            //         } else {
            //             routeFinder(nextStn0, endStn, routeRecord, turnCount)
            //             if (nextStn1 === endStn) {
            //                 routeRecord.push(nextStn1)
            //                 routeMainRecord.push(routeRecord)
            //             } else {
            //                 routeFinder(nextStn1, endStn, routeRecord, turnCount)
            //
            //
            //             }
            //         }
            //     }
            //





            //         }
            //
            //
            //         routeFinder(stations[currentStn.lineType][currentStn.frontBack[0]],endStn,routeRecord,turnCount)
            //         routeFinder(stations[currentStn.lineType][currentStn.frontBack[1]],endStn,routeRecord,turnCount)
            //     }   else {
            //         let direction = 1 - currentStn.frontBack.findIndex(prevStn)
            //         routeFinder(stations[currentStn.lineType][currentStn.frontBack[direction]],endStn,routeRecord,turnCount)
            //     }
            // } else if (currentStn.stnType === 'terminal') {
            //     if (prevStn === '') {
            //         routeFinder(stations[currentStn.lineType][currentStn.frontBack[0]],endStn,routeRecord,turnCount)
            //     }
            // } else if (currentStn.stnType === 'Line') {
            //     if (prevStn === '') {
            //         routeFinder(stations[currentStn.lineType][currentStn.frontBack[0]],endStn,routeRecord,turnCount)
            //         routeFinder(stations[currentStn.lineType][currentStn.frontBack[1]],endStn,routeRecord,turnCount)
            //     }   else {
            //         let direction = 1 - currentStn.frontBack.findIndex(prevStn)
            //         routeFinder(stations[currentStn.lineType][currentStn.frontBack[direction]],endStn,routeRecord,turnCount)
            //     }
            //     if (turnCount <= 1) {
            //
            //     }
            // }


findRoute('novenaR','braddellR')


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
