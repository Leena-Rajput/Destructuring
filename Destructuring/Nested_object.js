const person= {
    name:"Leena",
    age:24,
    gender:"female",
    address:{
        street:"FG colony, IT park",
        city:"Sector 62,Dehradun",
        state:"Uttrakhand",
    }
};
function extractData(obj){
    const {
        name,
        address:{street},
    } = obj;
    return {name, street};
}
console.log(extractData(person))