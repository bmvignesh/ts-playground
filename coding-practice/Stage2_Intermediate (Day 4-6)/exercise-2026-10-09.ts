interface Student{
    name:string;
    score:number;
}

interface Result{
    name:string;
    category:string;
}

function categorizeScores(students:Student[]):Result[]
{
    return students.map(student=>{
        let category:string;
        if(student.score>=90)
        {
            category = 'Excellent';
        }
        else if(student.score>=75)
        {
            category = 'Good';
        }
        else if(student.score>=50)
        {
            category = 'Average';
        }
        else
        category = 'Poor';
        return {name:student.name,category};
    });
}

const data: Student[] = [
  { name: "Arun", score: 95 },
  { name: "Priya", score: 72 },
  { name: "Kumar", score: 50 },
  { name: "Meena", score: 40 }
];

console.log(categorizeScores(data));