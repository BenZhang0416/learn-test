function create() {
    // 创建一个空对象
    var obj = new Object();
    // 拿出构造函数的第一个参数
    Con = [].splice.call(arguments);
    // 将空对象连接到第一个参数上原型上，可以访问构造函数原型中的属性
    obj.__proto__ = Con.prototype;
    // 绑定 this 实现继承, obj 可以访问到构造函数中的属性
    var ret = Con.apply(obj, arguments);
    // 优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj
}