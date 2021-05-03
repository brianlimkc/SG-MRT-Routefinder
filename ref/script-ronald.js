
let nLineStr = 'Times Square, 34th, 28th, 23rd, Union Square, and 8th'
let lLineStr = '8th, 6th, Union Square, 3rd, and 1st'
let sixLineStr =  'Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place'

let nLineArry = nLineStr.replace(' and','').split(', ')
let lLineArry = lLineStr.replace(' and','').split(', ')
let sixLineArry = sixLineStr.replace(' and','').split(', ')

let lineObj = {
    'N': nLineArry,
    'L':lLineArry,
    'six':sixLineArry
}
console.log(lineObj)

class Train{
    constructor(originLine,originStation,destinationLine,destinationStation){
        this.stopsTaken = `You must travel through the following stops on the ${originLine} line: `
        this.stopsTakenLineChange = `Your journey continues through the following stops: `
        this.stopsTakenNum = 0
        this.originLine = originLine
        this.originStation = originStation
        this.destinationLineOriginal = destinationLine
        this.destinationStationOriginal = destinationStation
        this.destinationLine = destinationLine
        this.destinationStation = destinationStation
        this.line = lineObj[originLine]
    }

    journeySummaryPrint(){  // log the first line which states the whole journey
        console.log(`\nYou are traveling from ${this.originLine}: ${this.originStation} to ${this.destinationLine}: ${this.destinationStation}`)
    }


    appendToStopsTaken(){
        for (let x=this.line.indexOf(this.originStation)+1;x<this.line.indexOf(this.destinationStation);x++) { //  for loop from index start to index destination
            this.stopsTaken = `${this.stopsTaken.concat(this.line[x])}, ` // add station name to name of reporting string with comma
            this.stopsTakenNum+=1 // record the number of stops taken
        }
        this.stopsTaken = this.stopsTaken.slice(0,-2).concat('.') // add a full stop
        console.log(this.stopsTaken)  // log route1
    }


    appendToStopsTakenLineChange(){
        for (let x=this.line.indexOf(this.originStation)+1;x<this.line.indexOf(this.destinationStation);x++) {  // for loop from interchange station to index end destination
            this.stopsTakenLineChange = `${this.stopsTakenLineChange.concat(this.line[x])}, ` // add station name to name of reporting string 2 with comma
            this.stopsTakenNum+=1 // record number of stops taken
        }
        this.stopsTakenLineChange = this.stopsTakenLineChange.slice(0,-2).concat('.') // add full stop
        console.log(this.stopsTakenLineChange) // log route 2
    }


    stopsTakenNumPrint(){
        if (this.stopsTakenNum > 1){
            console.log(`${this.stopsTakenNum} stop in total`) // if only 1 stop, log 1 stop in total
        } else {
            console.log(`${this.stopsTakenNum} stops in total`) // if more than 1 stop, log x stops in total
        }
    }


    stopCountNoChange(){
        if (this.line.indexOf(this.originStation) > this.line.indexOf(this.destinationStation)){ // to reverse array when the trip is going in reverse order
            this.line.reverse()
        }
    }


    stopCountNoChangeLeg1(){ // to generate trip list when on one line
        this.stopCountNoChange()  // to reverse direction if required
        this.appendToStopsTaken() // to generate list of stations for trip
    }


    stopCountChangeLeg1(){ // to generate trip list for route 1 when on two lines
        this.destinationStation = 'Union Square' // specify interchange station
        this.destinationLine = this.originLine // to point destination line back to origin line as no line change is required
        this.stopCountNoChange() // to reverse direction if required
        this.appendToStopsTaken() // to generate list of stations for the trip
        console.log('Change at Union Square') // to log change of station
    }


    stopCountChangeLeg2(){ // to generate trip list for route 2 when on two lines
        this.originStation = 'Union Square' // specify interchange station
        this.originLine = this.destinationLineOriginal // to specify starting line as the destination line
        this.destinationStation = this.destinationStationOriginal // to specify ending station as the destination station
        this.destinationLine = this.destinationLineOriginal // to specify ending line as destination line
        this.line = lineObj[this.destinationLineOriginal] // to specify the name of the destination line
        this.stopCountNoChange() // to reverse direction if required
        this.appendToStopsTakenLineChange() // to generate list of stations for route 2
    }


    planTrip(){
        this.journeySummaryPrint() // log the whole journey
        if (this.originLine===this.destinationLine&&this.originStation===this.destinationStation) { // to check if start and end line and station are the same
            console.log('You have entered the same stop dummy')
        } else if(this.originLine === this.destinationLine){ //if same line
            this.stopCountNoChangeLeg1() // generate list of stations for trip on one line
            this.stopsTakenNumPrint() // log number of stops taken
        } else {
            this.stopCountChangeLeg1() // generate list of stations for route 1
            this.stopCountChangeLeg2() // generate list of stations for route 2
            this.stopsTakenNumPrint() // log number of stops taken
        }
    }

}

let route1 = new Train("N", "Times Square", "six", "Grand Central")
route1.planTrip()

let route2 = new Train("N", "8th", "N", "Times Square")
route2.planTrip()


/* Issues observed
* - number of stops generated is not correct (not counting start / end / interchange
* - not listing start and end stations
* - no "and" between second last and last station
* - code is overly complicated
* *
* Good points
* - it shows starting and ending line
* - storage of lines in object is a good idea
* - good practice for use of JS class
* */
