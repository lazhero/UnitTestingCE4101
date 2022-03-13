package ac.cr.tec.code;

public class Random {
    public static double random(int min,int Max){
        return Math.random()*(Max-min)+min;
    }
}
