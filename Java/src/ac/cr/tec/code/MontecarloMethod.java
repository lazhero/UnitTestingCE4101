package ac.cr.tec.code;

public class MontecarloMethod {
    private static final int iterations=10000000;
    private static final int radius=10;
    public static double computePI(){
        int withinCircle=0;
        int withinSquare=0;
        double xPosition;
        double yPosition;
        double distance;
        int iterations=MontecarloMethod.iterations;
        while (iterations>0){
            xPosition=Random.random(-radius,radius);
            yPosition=Random.random(-radius,radius);
            distance=MontecarloMethod.distance(xPosition,yPosition);
            if(distance<=radius)withinCircle++;
            withinSquare++;
            iterations--;

        }
        return 4*((double)withinCircle/withinSquare);

    }
    public static double distance(double X,double Y){
        return Math.sqrt(Math.pow(X,2)+Math.pow(Y,2));
    }
}
