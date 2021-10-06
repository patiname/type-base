
// const nickname = 'pncoding';
// const age = 234234

// const intro = (nickname:string, age:number):void => {
//     console.log(`Hi my name is ${nickname} and my age is ${age}`)
// }

// // const intro = (nickname:string, age:number):string => {
// //     return `Hi my name is ${nickname} and my age is ${age}`
// // }


// intro(nickname,age);

interface Man {
    nickName: string;
    age: number;
}

const parson = {
    nickName:"patiname",
    age:12
}

const intro = (parson:Man):void => {
    console.log(`안녕 내이름은${parson.nickName} 야 나이는 ${parson.age}세 이지`);
}

intro(parson)