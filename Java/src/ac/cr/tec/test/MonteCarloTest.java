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

}