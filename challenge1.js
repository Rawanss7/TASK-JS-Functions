/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
 function printName (){
    console.log("my name is rawan");
}
printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
 function printAge(currentYear, birth){
    return currentYear-birth
}
const age = printAge(2022-1992);
console.log(age)
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
 if (language === "en"){
    console.log("Hello",name)
} else if (language === "es"){
   console.log("Hola",name)
} else if (language === "fr"){
   console.log("Bonjour ",name)
} else if (language === "tr"){
   console.log("Merhaba ",name)
}
console.log(printHello("Eman ","fr"));
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
 function printMax(y,x){
    if (x>y)
        console.log(x);
    else
        console.log(y);
}