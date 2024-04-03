

//without map method 

let ar = [1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<ar.length;i++){
    console.log(ar[i]*2);
}

//with map method 

const gh = ar.map((el)=>el*2);
console.log(gh)

const student = [
    {
        name : "raj",
        rollno : 21
    },
    {
        name : "ravi",
        rollno : 22
    },
    {
        name : "rohit",
        rollno : 23
    },
    {
        name : "rohan",
        rollno : 24
    },
    {
        name:"laxmi",
        rollno:25
    },
    {
        name:"sachin",
        rollno:26
    }
]
// console.log(student.name)

student.map((el)=>console.log(el.name + " " + el.rollno))


const fruits = new Map([
    ["apple",10],
    [23,20],
    ["orange",30],
    [true,40],
    [4.5,50]
])

console.log(fruits.get(4.5))