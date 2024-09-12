const string1 = "A string primitive";
const string2 =  "Also a string primitive";
const string3 = `Yet another string primitive `;

const string4 = new String("A String object");

"cat". charAt(1);
"cat"[1];

const a = "a";
const b = "b";
if (a < b ) {
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal,`);
}

function areEqualCaseInsensitive(str1, str2)
{
  return str1.toUpperCase() === str2.toUpperCase();
}

const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() ===
str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() ===
str2.toLowerCase();

areEqualInUpperCase("B", "ss");
areEqualInLowerCase("1", "I");

const areEqual = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, {
    sensitivity: "accent" }) === 0;

    areEqual("B", "ss", "de");
    areEqual("1", "I", "tr");

    const strPrim = "foo";

    const strPrim2 = String(1);

    const strPrim3 = String(true);
    
    const strObj = new String(strPrim);

    console.log(typeof strPrim);
    console.log(typeof strPrim2);
    console.log(typeof strPrim3);
    console.log(typeof strObj);

    const s1 = "2 + 2";
    const s2 = new String("2 + 2");
    console.log(eval(s1));
    console.log(eval(s2));

    console.log(eval(s2.valueOf()));

    const nullVar = null;
    nullVar .toString();
    String(nullVar);

    const undefinedVar = undefined ;
    undefinedVar.toString();
    String(undefinedVar);