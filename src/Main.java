import java.util.Arrays;

import javax.script.ScriptException;

public class Main {
	public static final int FEMALE = 0;
	public static final int MALE = 1;
	
	public static void main(String[] args) throws ScriptException {
		System.out.println(Arrays.toString(TownsAndCitiesGenerator.generateDwarvenCitys(10)));
		System.out.println(Arrays.toString(DiabloGenerator.generateDemons(0, 10)));
		System.out.println(Arrays.toString(FinalFantasyGenerator.generateElezens(1, 10)));
	}
}
