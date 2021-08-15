function _instanceOf (leftVal, rightVal) {
    let rightProto = rightVal.prototype; //取右表达式的prototype值
    leftVal = leftVal.__proto__;
    while(true) {
        if (leftVal === null) {
            return false;
        }
        if (leftVal === rightProto) {
            return true;
        }
        leftVal = leftVal.__proto__;
    }
}

console.log(_instanceOf(Array, Object));