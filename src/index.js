/**
 * Created by Lorder on 2018/7/4.
 */
let [a, b, c] = [0, 1, 2];
console.log(a);
console.log(b);
console.log(c);
let { foo, fee } = { foo: 'foo', fee: 'fee' };
console.log(foo);
console.log(fee);
let [q, w, e, r] = 'qwer';
console.log(q);
console.log(w);
console.log(e);
console.log(r);
function lorder(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
}
lorder(1, 2, 3);
function aa(...arg) {
    for (let val of arg) {
        console.log(val);
    }
}
aa(11, 22, 33);
// 字符串模板
let me = 'Lorder';
let blog = `我来也${me}`;
document.write(blog);
document.write(blog.includes(me));
document.write(blog.startsWith(me));
document.write(blog.endsWith(me));
document.write('Lo'.repeat(3));
// 二进制声明
let binary = 0B010101;
console.log(binary);
// 八进制声明
let octal = 0o666;
console.log(octal);
// 判断是否为数字
console.log(Number.isFinite(11));
// 转整数
console.log(Number.parseInt(11.11));
let z = Math.pow(2, 53);
console.log(Number.isSafeInteger(z));
let arr = Array.of(3, 4, 5, 6);
console.log(arr);
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1.fill('jspang', 2, 5);
console.log(arr1);
let arr2 = ['Lorder', 'boss', 'pig'];
for (let item of arr2) {
    console.log(item);
}
// var add=function(a,b){
//     return a+b;
// };
// 箭头函数
// var add=(a,b)=>a+b;
var add = (a, b) => { return a + b; };
console.log(add(1, 2));


// key值得构建
let key = 'skill';
var obj = {
    [key]: 'web'
}
console.log(obj);

//is()
let obj1 = { name: 'js' };
let obj2 = { name: 'js' };
console.log(Object.is(obj1.name, obj1.name))

//assign
let q1 = { a: 'js' }
let w1 = { b: 'pang' }
let e1 = Object.assign(q1, w1);
console.log(e1);
//Symbol
let obja = { name: 'jspang', skill: 'web' };
let age = Symbol();
obja[age] = 18;
for (let item in obja) {
    console.log(obja[item]);
}
console.log(obja);

//Set 数据结构
let setArr = new Set(['a', 'b', 'c']);//Set里放数组
setArr.add('d');
setArr.delete('a');
console.log(setArr);
console.log(setArr.has('a'));
// setArr.clear();
console.log(setArr.size);

//map 数据结构
var map = new Map();
map.set('1', 'iam')
map.set('2', 'iam')
console.log(map);
console.log(map.get('1'));
map.delete('2', 'iam');
// map.clear();
console.log(map);
console.log(map.size);
console.log(map.has('1'));

//proxy 生命周期 预处理
let pro = new Proxy({
    add: function () {
        return 100
    },
    name: '123'
}, {
        get: function (target, key, property) {
            console.log('come in Get');
            return target[key];
        },
        set: function (target, key, value, receiver) {
            console.log(`setting ${key}=${value} `);
            return target[key] = value;
        },
        // apply(target,ctx,args){
        //     console.log('do apply');
        //     return Reflect.apply(...arguments);
        // }
    })
console.log(pro.name);
pro.name = '6666';
console.log(pro.name);
//promise
let state = 1;

function step1(resolve, reject) {
    console.log('1.开始-洗菜做饭');
    if (state == 1) {
        resolve('洗菜做饭--完成');
    } else {
        reject('洗菜做饭--出错');
    }
}


function step2(resolve, reject) {
    console.log('2.开始-坐下来吃饭');
    if (state == 1) {
        resolve('坐下来吃饭--完成');
    } else {
        reject('坐下来吃饭--出错');
    }
}


function step3(resolve, reject) {
    console.log('3.开始-收拾桌子洗完');
    if (state == 1) {
        resolve('收拾桌子洗完--完成');
    } else {
        reject('收拾桌子洗完--出错');
    }
}

// new Promise(step1).then(function (val) {
//     console.log(val);
//     return new Promise(step2);

// }).then(function (val) {
//     console.log(val);
//     return new Promise(step3);
// }).then(function (val) {
//     console.log(val);
//     return val;
// });

// class
class Coder{
    name(val){
        console.log(val);
        return val;
    }
    skill(val){
        console.log(this.name('L')+':'+'Skill-'+val)
    }
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a+this.b;
    }
}

let Lorder=new Coder(1,2);
// Lorder.name('L');
// Lorder.skill('web');
console.log(Lorder.add())

class htmler extends Coder{

}
let pang=new htmler;
pang.name('P')

