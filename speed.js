function speedDetector(){
    const speed = parseFloat(prompt("Enter the speed of car"))
    const speedLimit = 70;
    let demeritPoints = 0;
    
    if(speedLimit <= 70){
        console.log("Ok");
    } else{
        const aboveLimit = speed - speedLimit
        demeritPoints = math.floor(aboveLimit/5)
    
    if(speed= 80){
        console.log("Points 2")
    } if(demeritPoints < 12){
        console.log("License suspended")
    } else(){
        console.log(`demeritPoints: ${demeritPoints}`);
    }
    }
    }