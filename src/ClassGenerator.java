import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.apache.commons.io.FileUtils;

import com.google.common.base.CaseFormat;

public class ClassGenerator {
	static FileWriter fileWriter;
	private static boolean genderless;
	
	public static void generateClassFooter() throws IOException {
		String template = "" + 
			"} " +
			"\r\n";
		
		fileWriter.write(template);
	}
	
	public static void generateClassBody(String fileName, String camelName, String className, String javaScript, String parentFolder) {
		try {
			String methodName = "";
			String methodCall = "";
			if(!genderless) {
				methodName = "	public static String[] generate" + camelName + "(int gender, int amount) {\r\n";
				methodCall = "				names[i] = (String) engine.eval(\"generator$" + parentFolder + "$" + fileName + "(\" + gender + \")\");\r\n";
			}else {
				methodName = "	public static String[] generate" + camelName + "(int amount) {\r\n";
				methodCall = "				names[i] = (String) engine.eval(\"generator$" + parentFolder + "$" + fileName + "()\");\r\n";
			}
			
			String template = "" +
				"	private static void load" + camelName + "Generator() {\r\n" + 
				"		try {\r\n" + 
				"			engine.eval(\"" + javaScript + "\");\r\n" + 
				"		} catch (ScriptException e) {\r\n" + 
				"			System.err.println(\"Failed to load " + camelName + " JavaScript generator.\");\r\n" + 
				"			e.printStackTrace();\r\n" + 
				"		}\r\n" + 
				"	}\r\n" + 
				"	\r\n" + 
					methodName + 
				"		String[] names = new String[amount];\r\n" + 
				"		try {\r\n" + 
				"			load" + camelName + "Generator();\r\n" + 
				"			for (int i = 0; i < names.length; i++) {\r\n" + 
								methodCall + 
				"			}\r\n" + 
				"		} catch (ScriptException e) {\r\n" + 
				"			e.printStackTrace();\r\n" + 
				"		}\r\n" + 
				"		return names;\r\n" + 
				"	}\r\n";
			
			
		
			fileWriter.write(template);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static void generateClassHeader(String className) throws IOException {
		String template = "" + 
			"import javax.script.ScriptEngine;\r\n" + 
			"import javax.script.ScriptEngineManager;\r\n" + 
			"import javax.script.ScriptException;\r\n" + 
			"public class " + className + " {\r\n" + 
			"	private static ScriptEngineManager factory = new ScriptEngineManager();\r\n" + 
			"	private static ScriptEngine engine = factory.getEngineByName(\"JavaScript\");" + 
			"	\r\n";
		
		fileWriter.write(template);
	}
	
	public static void generateClassFile(String className, String parentFolder) throws IOException {
		fileWriter = new FileWriter(new File("out/" + className + ".java"));
	}
	
	public static void main(String[] args) {
		File[] generatorFolders = new File("fantasy-names/generators").listFiles();
		
		//iterates all generators
		try {
			for (File gFolder : generatorFolders) {
				System.out.println("Opening folder " + gFolder + "...");
				String parentFolder = gFolder.getName();
				String className = CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.UPPER_CAMEL, parentFolder) + "Generator";
				generateClassFile(className, parentFolder);
				generateClassHeader(className);
				
				File[] generatorFiles = new File("fantasy-names/generators/" + gFolder.getName()).listFiles();
				for (File gFile : generatorFiles) {
					if(!gFile.getName().endsWith(".min.js")) continue;
					
					System.out.println("Parsing file " + gFile + "...");
					String fileName = gFile.getName().replaceAll(".min.js", "");
					String camelName = CaseFormat.LOWER_UNDERSCORE.to(CaseFormat.UPPER_CAMEL, fileName);
					String javaScript = FileUtils.readFileToString(gFile, "UTF-8").replaceAll("\\\\", "\\\\\\\\").replaceAll("\\\"", "\\\\\"").replaceAll("\n", "");
					genderless = javaScript.contains("(){var ");
					generateClassBody(fileName, camelName, className, javaScript, parentFolder);
					fileWriter.write("\r\n");
				}
				
				generateClassFooter();
				fileWriter.close();
			}
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
