# Introdution
FantasyNamesJava is a JAVA library port of the Node.js *fantasy-names v2.0.0* by mattconsto. The original project can be found on its [GitHub page](https://github.com/mattconsto/fantasy-names).
This project provides a set of Static classes with all the generators on the official fantasynames repository.

# Compilation
To use FantasyNamesJava you need to link the library JAR file to your project, which you can find on the [releases page](https://github.com/mp-pinheiro/fantasynamesjava/releases), or compile it yourself. The code was written on Eclipse Oxygen.3 Release (4.7.3).

## Dependencies
There are no dependencies for the compiled JAR file, but if you wish to compile yourself, you'll need to link Guava and Apache Commons-IO to the project:
  + [Guava](https://github.com/google/guava)
  + [Apache Commons-IO](https://commons.apache.org/proper/commons-io/)

***OBS:** You'll need to edit the paths to the dependencies on the .classpath file.*

# Class Structures
Each of the "category" from the Full List on mattconsto's project was turned into a Static class, and each "sub-category" was turned into a Static Method containing the generator js.min file that generates the names. The JavaScript code is executed via the ScriptEngine class. The Methods receive two parameters, gender (0: Male and 1: Female) and amount (how many names you want to be generated) and return an array with all the generated names.

# Usage
As explained above, usage is simple, just call the Static Method from the desired class. The following example from mattconsto's reposity can be replicated with JavaFantasyNames like this:

### mattconsto
~~~~
console.log(require('fantasy-names')('diablo', 'demons', 10));
~~~~

### FantasyNamesJava
~~~~
//0 is for FEMALE names.
System.out.println(Arrays.toString(DiabloGenerator.generateDemons(0, 10)));
~~~~

# Full List
The full list of generators can be found on [mattconsto's GitHub page](https://github.com/mattconsto/fantasy-names)

# Credits
As stated on the original repository, this would not be possible without [fantasynamegenerators.com](https://github.com/mattconsto/fantasy-names) and obviously mattconsto.
