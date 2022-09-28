//sayHi

/*
break down:
function name: sayHi
parameters: nameStr - string
//when assignement says "take in", referring to parameters

return : string //return, use a variable

goal: put Hi in front of name.
concatenation or
interpolation will work
*/

function sayHi(name)
{
    let newStr = `Hi, ${name}.`; //could use name again, he created a new variable
    return newStr;
    //could also use:
    //return `Hi, ${name}.`
}

console.log(sayHi("Jenny"));
console.log(sayHi("Jimmy"));
console.log(sayHi("Bob"));


//bigString


function bigString(str1, str2)
{
    if (str1.length > str2.length)
    {
        return str1;
    } else if (str2.length > str1.length)
    {
        return str2;
    } else if (str1.length === str2.length)
    {
        console.log(`${str1} is equal in length to ${str2}.`);
    }
}

console.log(bigString("blue", "red"));
console.log(bigString("taco", "tuesday"));
console.log(bigString("dog", "cat"));




//bigNumber

function bigNumber(num1, num2)
{
    if (num1 > num2)
    {
        return num1;
    } else if (num2 > num1)
    {
        return num2;
    } else if (num1 === num2)
    {
        console.log(`${num1} is equal to ${num2}.`);
    }
}

console.log(bigNumber(12,3));
console.log(bigNumber(10,25));
console.log(bigNumber(5,5));


//fiveMore

function fiveMore(myArray)
{
for(let i = 0; i < myArray.length; i++)
{
    if (myArray[i] % 2 != 0)
    {
        myArray[i] += 5; //myArray at i, now = that i + 5
    }
}
        return myArray;
}

console.log(fiveMore([0, 1, 2]));
console.log(fiveMore([1, 3, 5]));
console.log(fiveMore([2, 4, 6]));


//arraySummer

function arraySummer(sumArray)
{
    let sum = 0;
    for(let i = 0; i < sumArray.length; i++)
    {
        sum += sumArray[i];
    } 
    return sum
} 

console.log(arraySummer([5,2,3]));
console.log(arraySummer([5,10,55]));


//everyDivisible

function everyDivisible(n)
{
    if(n < 10)
    {
        for(let number = 0; number <= 100; number++)
        {
            if(number % n ===0)
            {
                console.log(number);
            }
        }
    }
}

everyDivisible(7);
everyDivisible(10);
everyDivisible(15);
everyDivisible(3);