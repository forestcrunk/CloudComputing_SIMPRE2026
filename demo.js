// var v1 = 2;
// let v2= 3;
// const v3 = 4;

// console.log(v1);
// console.log(v2);
// console.log(v3);


function testFun(param) {
    if(param === true) {
        var v1 = 2;
        let v2= 3;
        const v3 = 4;
    }
    console.log(v1);
    console.log(v2);
    console.log(v3);
}

const testFun2 = (param) => {
     if(param === true) {
        var v1 = 2;
        let v2= 3;
        const v3 = 4;
    }
    console.log(v1);
    console.log(v2);
    console.log(v3);
}

//testFun2(true)   

const obj = {
    name: 'Name',
    age: 31
}

obj.place = 'BC'
console.log(obj)