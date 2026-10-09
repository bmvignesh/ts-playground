function wordFrequencyCounter(text:string):Record<string,number>
{
    const words = text.split(" ");

    const count:Record<string,number> = {};

    for(const word of words)
    {
        count[word] = (count[word]||0)+1;
    }

    return count;
}

console.log(wordFrequencyCounter('automation testing automation framework playwright testing qa'));

function wordCounter(text:string):Record<string,number>
{
    const words:string[] = text.split(" ");

    const count:Record<string,number> = {};

    for(const word of words)
    {
        count[word] = (count[word]||0)+1;
    }
    return count;
}

console.log(wordCounter('dog cat dog bird'));

function letterCounter(text:string):Record<string,number>
{    
    const count:Record<string,number>= {};
    for(let word of text)
    {
        count[word] = (count[word] ||0)+1;
    }
    return count;
}

console.log(letterCounter('banana'));

function numberCounter(numbs:number[]):Record<number,number>
{
    const count:Record<number,number> = {};
    for(const num of numbs)
    {
        count[num] = (count[num]||0)+1;
    }
    return count;
}

console.log(numberCounter([1, 2, 2, 3, 3, 3]));

function caseInsensitiveWordCounter(text:string):Record<string,number>
{
    const count:Record<string,number> = {};
    const words = text.toLowerCase().split(" ");

    for(const word of words)
    {
        count[word] = (count[word]||0)+1;
    }
    return count;
}
console.log(caseInsensitiveWordCounter('QA qa Qa qA'));

function firstLetterCounter(word_array:string[]):Record<string,number>
{
    const count:Record<string,number> = {};
    
    for(let word of word_array)
    {
        count[word.charAt(0)] = (count[word.charAt(0)]||0)+1;
    }
    return count;
}
console.log(firstLetterCounter(["apple", "ant", "banana", "ball", "cat"]));

function sortResult(text:string):{word:string;count:number}[]
{
    const count:Record<string,number> = {};
    const words = text.split(" ");
    for(const word of words)
    {
        count[word] = (count[word]||0)+1;
        console.log(count[word]);
    }
    const result = Object.keys(count).map(word=>({word,count:count[word]}));

    result.sort((a,b)=>b.count-a.count);
    return result;

}
console.log('Sort Result output is: ',sortResult('dog cat dog bird dog cat'));

const carCount:Record<string,number> = {maruti:10,honda:9,tata:12,nissan:11};

const result = Object.entries(carCount).map(([name,score])=>({name,score}));

result.sort((a,b)=>b.score - a.score);

console.log(result);

const scores:Record<string,number> = { Alice: 85, Bob: 92, Charlie: 78 };

const result1 = Object.entries(scores).map(([studname,score])=>({studname,score}));

result1.sort((a,b)=>b.score-a.score);

console.log(result1);

const numCount:Record<string,number> = { "1": 2, "2": 5, "3": 1 };

const result2 = Object.entries(numCount).map(([number,frequency])=>({number,frequency}));

result2.sort((a,b)=>b.frequency-a.frequency);

console.log(result2);

const carCounts: Record<string, number> = { maruti: 10, honda: 9, tata: 12, nissan: 11 };

const result3 = Object.entries(carCounts).map(([carname,carnums])=>({carname,carnums}));

result3.sort((a,b)=>b.carnums-a.carnums);

const final = result3.slice(0,2);

console.log(final);

    const fruitCount: Record<string, number> = { apple: 5, banana: 2, mango: 7, orange: 3, grape: 6 };

    const obj_ary = Object.entries(fruitCount).map(([name,count])=>({name,count}));

    obj_ary.sort((a,b)=>b.count-a.count);

    console.log('Top 2 items are: ',obj_ary.slice(0,2));
    console.log('Bottom 2 items are: ',obj_ary.slice(-2));

    const movieRatings: Record<string, number> = { Inception: 9, Matrix: 8, Interstellar: 10, Avatar: 7, Titanic: 6 };

    const item_ary = Object.entries(movieRatings).map(([items,counts])=>({items,counts}));

    item_ary.sort((a,b)=>b.counts-a.counts);

    //console.log('Top N items: ',item_ary.slice(0,N));

    //console.log('Bottom N items: ', item_ary.slice(-N));

    function caseInsensitiveWordCounterNow(text:string):{word:string,count:number}[]
    {
        const count : Record<string,number> = {};

        const words = text.toLowerCase().split(' ');

        for(let word of words)
        {
            count[word] = (count[word]||0)+1;
        }
        
        const result = Object.entries(count).map(([word,count])=>({word,count}));

        result.sort((a,b)=>b.count-a.count);

        return result;
    }

    console.log(caseInsensitiveWordCounterNow('Dog cat DOG bird dog CAT'));

    function customerFeedbackCheck(text:string):{word:string,count:number}[]
    {
        const count:Record<string,number> = {};

        const words = text.toLowerCase().replace(/[^\w\s]/g, "").split(' ');

        for(let word of words)
        {
            count[word] = (count[word]||0)+1;
        }

        const result = Object.entries(count).map(([word,count])=>({word,count}));

        result.sort((a,b)=>b.count-a.count);

        return result;
    }
    const feedback = "The product is good, very good. The service was excellent, but the delivery was slow. Good product overall!";
    const N=3;
    console.log(customerFeedbackCheck(feedback));

    console.log('Top N slicing is: ',customerFeedbackCheck(feedback).slice(0,N));

    console.log('Button N slicing is: ',customerFeedbackCheck(feedback).slice(-N));

    function evenoddSplitter(nums:number[]):{even:number[],odd:number[]}
    {
        const even:number[] = [];
        const odd:number[] = [];
        nums.map(nums=>{
            if(nums%2==0)
                {
                    even.push(nums);
                } 
                else
                {
                    odd.push(nums)
                }
        })
        return {even,odd};
    }

    console.log(evenoddSplitter([12, 7, 5, 20, 33, 42, 19, 8]));