// // Code your solution in this file!
const blockLength = 264;

function distanceFromHqInBlocks(blocks) {
    const scuberHQ = 42;
    const disBlocks = blocks - scuberHQ;
    if (blocks<42) {
        return disBlocks*-1
    } else {
        return disBlocks
    }
}
distanceFromHqInBlocks()

function distanceFromHqInFeet(blocks) {
    const disFeet = (distanceFromHqInBlocks(blocks)*blockLength)
    return disFeet
}
distanceFromHqInFeet()

function distanceTravelledInFeet(start, destination) {
    const trip = (start - destination)*blockLength;
    if (trip < 0) {
        return (trip*-1)
    } else {
        return trip
    }
}
distanceTravelledInFeet()

function calculatesFarePrice(start, destination) {
    const fare = distanceTravelledInFeet(start, destination);
    if (fare > 2500) {
        return 'cannot travel that far'
    } else if (fare > 2000) {
        return 25
    } else if (fare > 400) {
        return ((fare*2)-800)/100;
    } else {
        return 0
    }
}
calculatesFarePrice()
