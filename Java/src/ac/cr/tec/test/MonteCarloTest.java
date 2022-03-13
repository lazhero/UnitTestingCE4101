package ac.cr.tec.test;


import ac.cr.tec.code.MontecarloMethod;
import ac.cr.tec.code.Random;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

class MonteCarloTest {

    @Test
    public void distanceTest() {
        double a;
        double b;
        double h;
        a=5;
        b=12;
        h=13;
        Assertions.assertEquals(h, MontecarloMethod.distance(a,b));

        a=7;
        b=24;
        h=25;
        Assertions.assertEquals(h, MontecarloMethod.distance(a,b));

        a=11;
        b=60;
        h=61;
        Assertions.assertEquals(h, MontecarloMethod.distance(a,b));

        a=13;
        b=84;
        h=85;
        Assertions.assertEquals(h, MontecarloMethod.distance(a,b));

        a=17;
        b=144;
        h=145;
        Assertions.assertEquals(h, MontecarloMethod.distance(a,b));

        a=23;
        b=264;
        h=265;
        Assertions.assertEquals(h, MontecarloMethod.distance(a,b));
    }

    @Test
    public void randomTest(){
        int min;
        int max;
        double randomResult;

        min=-2;
        max=13;
        randomResult= Random.random(min,max);
        Assertions.assertTrue(randomResult<=max);
        Assertions.assertTrue(randomResult>=min);


        min=0;
        max=30;
        randomResult= Random.random(min,max);
        Assertions.assertTrue(randomResult<=max);
        Assertions.assertTrue(randomResult>=min);

        min=-13;
        max=-5;
        randomResult= Random.random(min,max);
        Assertions.assertTrue(randomResult<=max);
        Assertions.assertTrue(randomResult>=min);

        min=40;
        max=50;
        randomResult= Random.random(min,max);
        Assertions.assertTrue(randomResult<=max);
        Assertions.assertTrue(randomResult>=min);

        min=-10;
        max=0;
        randomResult= Random.random(min,max);
        Assertions.assertTrue(randomResult<=max);
        Assertions.assertTrue(randomResult>=min);
    }
    @Test
    public void MonteCarloTest(){
        double pi=Math.PI;
        double calculatedPI;
        double diff;
        int iterations=100;
        double allowedMistake=0.00999999;

        while (iterations>0){
            iterations--;
            calculatedPI=MontecarloMethod.computePI();
            System.out.println(calculatedPI);
            diff=Math.abs(calculatedPI-pi);
            Assertions.assertTrue(diff<=allowedMistake);
        }
    }



}