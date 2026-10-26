interface Students{
    name:string,
    score:number
}

const students :Students[] = [

    {name:'Anirudh',score:100},
    {name:'Maya',score:99},
    {name:'Balaji',score:80},
    {name:'Kani',score:68},
    {name:'Akash',score:65}
];

function highScoreFilter(studs:Students[])
{
    console.log(studs.filter(st=>st.score>=70));
}

highScoreFilter(students);

function wordCategorizer(words_array:string[]):{word:string,lengthCategory:string,startsWithVowel:boolean}[]
{
    let result:{word:string,lengthCategory:string,startsWithVowel:boolean}[] = [];
    let lengthCategory:string;
    let startsWithVowel:boolean;
    for(let word of words_array)
    {
        if(word.length<=3) lengthCategory = 'short';
        else if(word.length>=4 && word.length<=6) lengthCategory = 'medium';
        else lengthCategory = 'long';

        if('aeiou'.includes(word.charAt(0)))
            startsWithVowel = true
        else 
            startsWithVowel = false;
        result.push({word,lengthCategory,startsWithVowel});
    }
    return result;
    
}
const words = ["apple", "dog", "elephant", "cat", "orange", "hi"];

console.log(wordCategorizer(words));

function ageSplitter(ages_array:number[]):{age:number,range:string,isAdult:boolean}[]
{
    let result:{age:number,range:string,isAdult:boolean}[] = [];
    let range:string;
    let isAdult:boolean;
    for(let age of ages_array)
    {
        if(age<=12) range = 'child';
        else if(age>=13 && age<=19) range = 'teen';
        else range='adult';
        if(age>=18) isAdult = true;
        else isAdult = false;
        result.push({age,range,isAdult});
    }
    return result;
    
}
const agess = [71,64,42,37,12,11];
console.log(ageSplitter(agess));

interface Housemates{
    name:string,
    score:number
}

const housemates:Housemates[] = [
    { name: "Anirudh", score: 65 },
  { name: "Maya", score: 99 },
  { name: "Balaji", score: 66 },
  { name: "Kani", score: 100 },
  { name: "Akash", score: 98 }
];

function highScorerRanking(mates:Housemates[]):{name:string,score:number,rank:number}[]
{
    return mates
            .filter(m=>m.score>=70)
            .sort((a,b)=>b.score-a.score)
            .map((st,index)=>({
                name:st.name,
                score:st.score,
                rank: index+1
            }));

}
console.log(highScorerRanking(housemates));

function wordCategorizers(string_array:string[]):{category:string,frequency:number}[]
{
    const freq_Map = string_array.reduce((acc,word)=>
    {
        let category:string;
        if(word.length<=3) category = 'short';
        else if (word.length>=4 && word.length<=6) category = 'medium';
        else category = 'long';
        acc[category] = (acc[category]||0)+1;
        return acc;
    },{} as Record<string,number>)
    return Object.entries(freq_Map).map(([category,frequency])=>({category,frequency}));
}

const wordss = ["apple", "dog", "elephant", "cat", "orange", "hi"];
console.log(wordCategorizer(wordss));

function ageSplitters(ages_array:number[]):{category:string,ages:number[]}[]
{
    const res = ages_array.reduce<Record<string, number[]>>((acc,age)=>{
        let category:string;
        if(age<=12) category = 'child';
        else if(age>=13 && age<=19) category = 'teen';
        else category = 'adult';
        if(!acc[category])
            acc[category] = [];
        acc[category].push(age);
        return acc;
    }, {});
    return Object.entries(res).map(([category, ages]) => ({category, ages}));
}

console.log(ageSplitters([71, 64, 42, 37, 12, 11, 19, 15]));

function ageWithCount(ages_array:number[]):{category:string,ages:number[],count:number}[]
{
    const result = ages_array.reduce<Record<string,{ages:number[],count:number}>>((acc,age)=>{
        let category:string;
        if(age<=12) category = 'child';
        else if(age>=13 && age<=19) category = 'teen';
        else category = 'adult';
        if(!acc[category])
        {
            acc[category] = {ages:[],count:0};
        }
        acc[category].ages.push(age);
        acc[category].count++;
        return acc;
    },{});
    return Object.entries(result).map(([category, {ages,count}]) => ({category, ages,count}));
}

console.log(ageWithCount([71, 64, 42, 37, 12, 11, 19, 15]));