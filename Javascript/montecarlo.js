
export{random,calculateDistance,Montecarlo};

function random(min,max){
    return min + (max-min)*Math.random();
}

function calculateDistance(x,y){
    return Math.sqrt(Math.pow(x,2)+Math.pow(y,2))
}

function Montecarlo(){
    var iterations=10000000;
    const radius=10;
    var inCircle=0;
    var inSquare=0;
    var x;
    var y;
    var distance;
    while(iterations>0){
        iterations--;
        x=random(-radius,radius);
        y=random(-radius,radius);
        distance=calculateDistance(x,y);
        if(distance<=radius)inCircle++;
        inSquare++;
    }
    return 4*(inCircle/inSquare);
}
