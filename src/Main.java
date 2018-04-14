import java.util.Arrays;

import javax.script.ScriptException;

public class Main {
	public static final int FEMALE = 0;
	public static final int MALE = 1;
	
	public static void main(String[] args) throws ScriptException {
		System.out.println(Arrays.toString(InheritanceCycleGenerator.generateDragons(FEMALE, 500)));
		System.out.println(Arrays.toString(DoctorWhoGenerator.generateDaleks(MALE, 500)));
	}
}
