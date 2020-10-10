//1.利用对象字面量创建对象
var obj={
    //属性
    uname:"hello"，
    age:18,
    sex:"female"
    //方法
    sayHi:function()
    {
        console.log("hi!!!")
    }
}

//2.用new object来创建对象
   //利用的是=
var obj=new Object()
obj.Myname="wENGST";
obj.age=20;
obj.sayHi=function()
{
    console("Hi~")
}



//使用obj
console.log(obj.uname)
console.log(obj['uname'])
console.log(onj.sayHi())//方法后面要加上()

//利用构造函数来创建对象,传入公用的属性和方法_模板编程
function CreateObject(name,way,sex)
{
   this.name=name;
   this.age=age;
   this.sex=sex;
   //不需要return
}
//new关键字执行过程
//1.new 构造函数可以在内存中创建一个空的对象
//2.this 就会指向刚才创建的空对象
//3.执行构造函数里面的代码，给这个空对象添加属性和方法
//4.返回这个对象

//函数方法的特殊调用
var me=new CreateObject('最帅是我',15,'female')