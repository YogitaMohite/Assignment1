
 package Day5Exception;

public class EX{
    public static void main(String[] args) {
        try {
            int a=10;
            int b=0;
            int result=a/b;
            System.out.println("Result:" +result);
        } catch (Exception e) {
            System.out.println("Error occured:" +e.getMessage());
        }
        System.out.println("program continues...");
    }
    
}
 
    

