function speedControl(){
    const limit = 70; //set speed limit as 70
    //prompt user to input speed which should be an integer
    let speed = prompt("Enter speed of the car:");
    speed = parseInt(speed);
    //compare input speed to the set limit
    if (speed <= limit){
        console.log('Ok')
    }
    //calculate demerit points
    let demeritPoints = Math.floor((speed - 70) / 5);
    if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log("Points: " + demeritPoints);
    }
}

speedControl();