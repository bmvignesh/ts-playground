function rangeCategorization(numbers:number[]):{value:number;category:string}[]
{
    let result : {value:number;category:string}[]=[];   
    for(let num of numbers)
    {   
        let category:string;
        let value = num;
        if(num<10)
            category = 'Low';
        else if(num>=10 && num<=50)
            category = 'Medium';
        else
            category = 'High';
    result.push({value,category});
    }
    return result;
}
console.log(rangeCategorization([5, 12, 47, 60, 3, 25]));

function temperatureCategorization(numbers:number[]):{value:number;category:string}[]
{
    let result:{value:number;category:string}[]=[];
    for(let num of numbers)
    {
        let value = num;
        let category;
        if(value<20)
        {
            category = 'Cold';
        }
        else if(value>=20 && value <=30)
        {
            category = 'Warm';
        }
        else
        {
            category = 'Hot';
        }
        result.push({value,category});
    }
    return result;
}

console.log(temperatureCategorization([15, 22, 29, 35, 10]));

function wordCounter(text:string):{[key:string]:number}
{
    const counts : {[key:string]:number} = {};
    const words = text.split(" ");

    for(let word of words)
    {
        if(counts[word])
            counts[word] +=1;
        else
            counts[word] = 1;
    }
    return counts;
}

console.log(wordCounter("playwright makes testing easy playwright is fast"));

function gradeAssignment(scores:number[]):{score:number;grade:string}[]
{
    let result:{score:number;grade:string}[] = [];
    for(let score of scores)
    {
        let grade;
        if(score>=90)
        {
            grade = 'A';
        }
        else if(score>=75 && score <90)
        {
            grade = 'B';
        }
        else if(score >=50 && score <75)
        {
            grade = 'C';
        }
        else grade = 'F';
    result.push({score,grade});
    }
    return result;
}
console.log(gradeAssignment([95, 82, 67, 45, 100]));

function ageGroupCategorization(numbers:number[]):{age:number,group:string}[]
{
    let result : {age:number,group:string}[] = [];
    for(let num of numbers)
    {
        let age:number = num;
        let group:string;
        
        if(age<13)
        {
            group = 'Child';
        }
        else if(age>=13 && age<=19)
        {
            group = 'Teen';
        }
        else if(age>=20 && age <=59)
        {
            group = 'Adult';
        }
        else
        {
            group = 'Senior';
        }
        result.push({age,group});
    }
    return result;
}
console.log(ageGroupCategorization([5, 16, 25, 45, 70]));

function evenOddSplitter(numbers:number[]):{even:number[];odd:number[]}
{
    const even:number[] = [];
    const odd:number[]=[];
    for(let num of numbers)
    {
        if(num%2===0)
            even.push(num);
        else 
            odd.push(num); 
    }
    return {even,odd};
}
console.log(evenOddSplitter([1,2,3,4,5,6]));

function vowelConsonantSplitter(words:string):{vowels:string[];consonants:string[]}
{
    const vowels:string[] = [];
    const consonants:string[] = [];
    for(let word of words)
    {
        let refinedinput = word.toLowerCase();
        if(refinedinput ==='a' || refinedinput==='e'||refinedinput==='i'||refinedinput==='o'||refinedinput==='u')
        {
            vowels.push(word);
        }
        else
        {
            consonants.push(word);
        }
    }
    return {vowels,consonants};
}
console.log(vowelConsonantSplitter('Vignesh'));

    function wordLengthCategorizer(words:string[]):{word:string;category:string}[]
    {
        let result:{word:string,category:string}[] = [];
        for(let word of words)
        {
            let category:string;
            if(word.length<4)
            {
                category = 'Short';
            }
            else if(word.length>=4 && word.length<=7)
            {
                category = 'Medium';
            }
            else
            {
                category = 'Long';
            }
            result.push({word,category});
        }
        return result;
    }
    console.log(wordLengthCategorizer(["cat", "hello", "automation", "QA"]));

    function combinedCategorizer(words:string[]):{word:string,lengthCategory:string,startsWith:string}[]
    {
        let result:{word:string,lengthCategory:string,startsWith:string}[] = [];
        for(let word of words)
        {

            let startsWith:string = word.charAt(0);
            let lengthCategory:string;
            if(word.length<4)
            {
                lengthCategory = 'Short';
                
            }
            else if(word.length>=4 && word.length <=7)
            {
                lengthCategory = 'Medium';
            }
            else
            {
                lengthCategory = 'Long';
            }
            result.push({word,lengthCategory,startsWith});
        }
        return result;
    }

    console.log(combinedCategorizer(["cat", "hello", "automation", "QA"]));

    function threepropertyCategorizer(words:string[]):{word:string,lengthCategory:string,startsWith:string,startsWithType:string}[]
    {
        let result:{word:string,lengthCategory:string,startsWith:string,startsWithType:string}[] = [];
        for(let word of words)
        {
            let lengthCategory:string;
            let startsWith:string = word.charAt(0).toLowerCase();
            let startsWithType:string;
            
            if(word.length<4)
            {
                lengthCategory = 'Short';
                if(startsWith === 'a' || startsWith === 'e' || startsWith === 'i' || startsWith === 'o' || startsWith === 'u')
                {
                    startsWithType = 'Vowel';
                }
                else
                {
                    startsWithType = 'Consonant';
                }
            }
            else if(word.length>=4 && word.length <=7)
            {
                lengthCategory = 'Medium';
                if(startsWith === 'a' || startsWith === 'e' || startsWith === 'i' || startsWith === 'o' || startsWith === 'u')
                {
                    startsWithType = 'Vowel';
                }
                else
                {
                    startsWithType = 'Consonant';
                }
            }
            else
            {
                lengthCategory = 'Long';
                if(startsWith === 'a' || startsWith === 'e' || startsWith === 'i' || startsWith === 'o' || startsWith === 'u')
                {
                    startsWithType = 'Vowel';
                }
                else
                {
                    startsWithType = 'Consonant';
                }
            }
            result.push({word,lengthCategory,startsWith,startsWithType});
        }
        return result;
    }

    console.log(threepropertyCategorizer(["cat", "apple", "hello", "automation", "QA"]));

function basicWordCounter(text:string):{word:string,count:number}[]
{
    let result: {word:string,count:number}[]=[];
    let words = text.split(/\s+/);

    let map:{[key:string]:number} = {};
    for(let word of words)
    {
        word = word.toLowerCase();
        map[word] = (map[word] || 0) + 1;

    }
    for(let key in map)
    {
        result.push({word:key,count:map[key]!});
    }
    return result;
}

console.log(basicWordCounter("This is a test. This test is simple!"));

function splitNprint(text:string):string[]
{
    return text.split(/\s+/);
}

console.log(splitNprint('QA Automation Engineer Practice Session'));

function normalizeCase(text:string):string
{
    return text.toLowerCase();
}

console.log(normalizeCase("Playwright Makes Testing EASY"));

function wordLengths(text: string): { word: string; length: number }[] {
  let result: { word: string; length: number }[] = [];
  let words = text.toLowerCase().split(/\s+/);

  for (let word of words) {
    result.push({ word: word, length: word.length });
  }

  return result;
}

console.log(wordLengths("Clash of Clans TH9 Progression"));

