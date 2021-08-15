//  防抖：短时间内大量出发同一事件最终只会执行一次 
//  利用计时器来实现 
//  箭头函数写法，注意返回的值 

const debouce = function(fn, delay) {
    /**
    * @param [Function] fn 需要使用防抖的函数
    * @param [Number] delay 毫秒，防抖期限值
    */
    let timer = null 
    return () => {
        if (timer) {
            // 进入此分支说明，当前正在一个即使周期中，并且在此触发了事件，取消当前计时，重新开始计时
            clearTimeout(timer)
        }
        // 进入此分支说明，当前没有计时，则开始新的计时
        timer = setTimeout(fn, delay)
    }
}    



function debounce1(fn, delay) {
    let timer = null;
    
    return function() {
        if(timer) {
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(() => {
            fn.apply(context, args)
        }, dealy);
    }
}


//  节流：短时间内大量触发同一事件，函数执行一次后在某个指定的时间内不再执行，直到过了这个指定的时间才会重新生效 

//  实现：状态位，时间戳，setTimeOut 标记 
//  方案一：状态位 

const throttle = (fn, delay) => {
    /**
        * @param [Function] fn 需要使用防抖的函数
        * @param [Number] delay 毫秒，防抖期限值
    */
    let valid = true
    return () => {
        if (!valid) {
            return false
        }

        //    执行函数，把状态位置为无效
        valid = false
        setTimeout(() => {
            fn()
            valid = true
        }, delay);
    }
}


//  方案二： 时间戳 

const throttle = (fn, delay) => {
    /**
        * @param [Function] fn 需要使用防抖的函数
        * @param [Number] delay 毫秒，防抖期限值
    */
    let start 
    return () => {
        let now = Date.now()
        if (!start) {
            start = now
        } 

        if (now - start >= delay) {
            fn()
            start = null
        }    
    }
}


//  方案三：setTimeOut 标记 

const throttle = (fn, delay) => {
    /**
        * @param [Function] fn 需要使用防抖的函数
        * @param [Number] delay 毫秒，防抖期限值
    */
    let timer = null
    return () => {
        if (!timer) {
            timer = setTimeout(() => {
                fn()
                timer = null
            }, delay);
        }
    }
}
