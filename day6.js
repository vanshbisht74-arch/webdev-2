let user={
    name:"vansh",
    address:"gurugram",
    mobileNo:24324334,
    favcolor:["black","white"],
    demo:function(){
        return "demo";
    }



}
console.log()
console.log(`my name is ${user.name} and my adress is ${user.address}`)
//1.obeject.keys
console.log(Object.keys(user));
console.log(Object.values(user));
const car ={
    made:"toyoto",
    model:"Vellfire",



};
Object.freeze(car);
Object.seal(car);
car.color="black";
car.model="Hycross";
console.log(car);