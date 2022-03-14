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

function randomTest(){
    var min;
    var max;
    var randomValue;
 
 
    min=-10;
    max=10;
    randomValue=random(min,max);
    test("min=-10, max=10",()=>{
        expect(randomValue).toBeGreaterThanOrEqual(min);
        expect(randomValue).toBeLessThanOrEqual(max);
 
    });
 
 
    min=-2;
    max=13;
    randomValue=random(min,max);
    test("min=-2, max=13",()=>{
        expect(randomValue).toBeGreaterThanOrEqual(min);
        expect(randomValue).toBeLessThanOrEqual(max);
 
    });
 
 
 
    min=0;
    max=30;
    randomValue=random(min,max);
    test("min=0, max=30",()=>{
        expect(randomValue).toBeGreaterThanOrEqual(min);
        expect(randomValue).toBeLessThanOrEqual(max);
 
    });
 
 
    min=-13;
    max=-5;
    randomValue=random(min,max);
    test("min=-13, max=-5",()=>{
        expect(randomValue).toBeGreaterThanOrEqual(min);
        expect(randomValue).toBeLessThanOrEqual(max);
 
    });
 
 
    min=40;
    max=50;
    randomValue=random(min,max);
    test("min=40, max=50",()=>{
        expect(randomValue).toBeGreaterThanOrEqual(min);
        expect(randomValue).toBeLessThanOrEqual(max);
 
    });
 
 
    min=-10;
    max=0;
    randomValue=random(min,max);
    test("min=-10, max=0",()=>{
        expect(randomValue).toBeGreaterThanOrEqual(min);
        expect(randomValue).toBeLessThanOrEqual(max);
 
    });
   
}
