```ecmascript 6
class Persion{
    
    //只有在类被实例化的时候才会被调用（每一次实例化只会调用一次）
    //只能在类的内部被访问到
    constructor(public name: string){
        console.log('==============father','constructor');
    }
        
    //默认是public，类的内外都可以访问
    // public name;
    
    //类的内部和子类的才可以访问
    protected age;

    //类的内部才可访问的到
    private sex;
    
    eat(){
        console.log('==============eating');
    }
}

//extends关键字是用来声明一种继承关系
//子类会继承父类的所有属性和方法
class Employee extends Persion {

    constructor(name: string, code: string) {
        //super的第一个作用，调用父类的构造函数
        super(name)
        this.code = code
        console.log('==============son','constructor');
    }
    code: string;
    
    work() {
        //super的第二个作用，调用父类的其他方法
        super.eat()
        this.doWork()
    }
    
    doWork(){
        console.log('==============doWork',);
    }
}

let el = new Employee('name', '111')
el.work()



let p1 =new Persion('liu')
p1.name = "batMan"
//p1.eat()

let p2 =new Persion('jia')
p2.name = "superMan"
//p2.eat()
 
```