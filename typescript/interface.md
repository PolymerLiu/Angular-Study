````ecmascript 6

interface IPerson {
    name: string;
    age: number
    
}

class Person {
    //接口的第一个用法 ，作为一个方法的参数的类型声明(声明属性)
    constructor(public config: IPerson) {
        
    }
}

//传入的对象必须符合接口的定义，（名称一样，数量一样）
var p1 = new Person({
    name: '3',
    age:4
})



//接口的第二个用法 ，(声明一个方法)
interface Animal{
    eat()
}

//Sheep类去实现Animal这个接口
//当一个类要去实现一个一个接口的时候，必须要实现接口里边声明的方法
class Sheep implements Animal{
    eat() {
        console.log('============== i am eat grass',);
    }
} 

class Tiger implements Animal{
    eat() {
        console.log('============== i am eat meat',);
    }
}
````