'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by Lorder on 2018/7/4.
 */
var a = 0,
    b = 1,
    c = 2;

console.log(a);
console.log(b);
console.log(c);
var _foo$fee = { foo: 'foo', fee: 'fee' },
    foo = _foo$fee.foo,
    fee = _foo$fee.fee;

console.log(foo);
console.log(fee);

var _qwer = 'qwer',
    _qwer2 = _slicedToArray(_qwer, 4),
    q = _qwer2[0],
    w = _qwer2[1],
    e = _qwer2[2],
    r = _qwer2[3];

console.log(q);
console.log(w);
console.log(e);
console.log(r);
function lorder() {
    console.log(arguments.length <= 0 ? undefined : arguments[0]);
    console.log(arguments.length <= 1 ? undefined : arguments[1]);
    console.log(arguments.length <= 2 ? undefined : arguments[2]);
}
lorder(1, 2, 3);
function aa() {
    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = arg[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var val = _step.value;

            console.log(val);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
aa(11, 22, 33);
// 字符串模板
var me = 'Lorder';
var blog = '\u6211\u6765\u4E5F' + me;
document.write(blog);
document.write(blog.includes(me));
document.write(blog.startsWith(me));
document.write(blog.endsWith(me));
document.write('Lo'.repeat(3));
// 二进制声明
var binary = 21;
console.log(binary);
// 八进制声明
var octal = 438;
console.log(octal);
// 判断是否为数字
console.log(Number.isFinite(11));
// 转整数
console.log(Number.parseInt(11.11));
var z = Math.pow(2, 53);
console.log(Number.isSafeInteger(z));
var arr = Array.of(3, 4, 5, 6);
console.log(arr);
var arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr1.fill('jspang', 2, 5);
console.log(arr1);
var arr2 = ['Lorder', 'boss', 'pig'];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = arr2[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _item = _step2.value;

        console.log(_item);
    }
    // var add=function(a,b){
    //     return a+b;
    // };
    // 箭头函数
    // var add=(a,b)=>a+b;
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var add = function add(a, b) {
    return a + b;
};
console.log(add(1, 2));

// key值得构建
var key = 'skill';
var obj = _defineProperty({}, key, 'web');
console.log(obj);

//is()
var obj1 = { name: 'js' };
var obj2 = { name: 'js' };
console.log(Object.is(obj1.name, obj1.name));

//assign
var q1 = { a: 'js' };
var w1 = { b: 'pang' };
var e1 = Object.assign(q1, w1);
console.log(e1);
//Symbol
var obja = { name: 'jspang', skill: 'web' };
var age = Symbol();
obja[age] = 18;
for (var item in obja) {
    console.log(obja[item]);
}
console.log(obja);

//Set 数据结构
var setArr = new Set(['a', 'b', 'c']); //Set里放数组
setArr.add('d');
setArr.delete('a');
console.log(setArr);
console.log(setArr.has('a'));
// setArr.clear();
console.log(setArr.size);

//map 数据结构
var map = new Map();
map.set('1', 'iam');
map.set('2', 'iam');
console.log(map);
console.log(map.get('1'));
map.delete('2', 'iam');
// map.clear();
console.log(map);
console.log(map.size);
console.log(map.has('1'));

//proxy 生命周期 预处理
var pro = new Proxy({
    add: function add() {
        return 100;
    },
    name: '123'
}, {
    get: function get(target, key, property) {
        console.log('come in Get');
        return target[key];
    },
    set: function set(target, key, value, receiver) {
        console.log('setting ' + key + '=' + value + ' ');
        return target[key] = value;
    }
    // apply(target,ctx,args){
    //     console.log('do apply');
    //     return Reflect.apply(...arguments);
    // }
});
console.log(pro.name);
pro.name = '6666';
console.log(pro.name);
//promise
var state = 1;

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

var Coder = function () {
    _createClass(Coder, [{
        key: 'name',
        value: function name(val) {
            console.log(val);
            return val;
        }
    }, {
        key: 'skill',
        value: function skill(val) {
            console.log(this.name('L') + ':' + 'Skill-' + val);
        }
    }]);

    function Coder(a, b) {
        _classCallCheck(this, Coder);

        this.a = a;
        this.b = b;
    }

    _createClass(Coder, [{
        key: 'add',
        value: function add() {
            return this.a + this.b;
        }
    }]);

    return Coder;
}();

var Lorder = new Coder(1, 2);
// Lorder.name('L');
// Lorder.skill('web');
console.log(Lorder.add());

var htmler = function (_Coder) {
    _inherits(htmler, _Coder);

    function htmler() {
        _classCallCheck(this, htmler);

        return _possibleConstructorReturn(this, (htmler.__proto__ || Object.getPrototypeOf(htmler)).apply(this, arguments));
    }

    return htmler;
}(Coder);

var pang = new htmler();
pang.name('P');
