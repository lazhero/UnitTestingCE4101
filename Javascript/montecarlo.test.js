 import { calculateDistance,Montecarlo,random } from "./montecarlo.js";

function distanceTest(){
    var a;
    var b;
    var h;
    a=5;
    b=12;
    h=13;
    test('a=5,b=12,c=13',()=>{
        expect(calculateDistance(a,b)).toBe(h);
    });
    
    a=7;
    b=24;
    h=25;
    
    test('a=7,b=24,c=25',()=>{
        expect(calculateDistance(a,b)).toBe(h);
    });
    a=11;
    b=60;
    h=61;
    test('a=11,b=60,c=61',()=>{
        expect(calculateDistance(a,b)).toBe(h);
    });
   
    a=13;
    b=84;
    h=85;
    test('a=13,b=84,c=85',()=>{
        expect(calculateDistance(a,b)).toBe(h);
    });

    a=17;
    b=144;
    h=145;
    test('a=17,b=144,c=145',()=>{
        expect(calculateDistance(a,b)).toBe(h);
    });
   
    a=23;
    b=264;
    h=265;
    test('a=23,b=264,c=265',()=>{
        expect(calculateDistance(a,b)).toBe(h);
    });
   
}