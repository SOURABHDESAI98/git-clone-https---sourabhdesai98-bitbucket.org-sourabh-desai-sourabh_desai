


//working
function genFunctions<T extends object>(obj: T, a: number) {

    return {
        ...obj,
        value: a
    }
}
const RESULT=genFunctions({id:"xl10",name:"jgsug",price:1200,img:"file.png"},12);
