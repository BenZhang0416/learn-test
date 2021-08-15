class Promise{
    constructor(executor){
        this.state = 'pending' // 默认状态进行中
        this.value = null //成功后携带的值
        this.reason = null //失败后返回的原因
        this.onFulfilledCbs = []
        this.onRejectedCbs = []

        function resolve(value) {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.onFulfilledCbs.forEach(item => item(this.value))
            }
        }

        function reject(reason) {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCbs.forEach(item => item(this.reason))
            }
        };

        function then(onFufilled, onRejected) {
            if (this.state === 'fulfilled') {
                onFufilled(this.value)
            }
            if (this.state === 'rejected') {
                onRejected(this.reason)
            }
            if (this.state === 'pending') {
                this.onFulfilledCbs.push(onFufilled)
                this.onRejectedCbs.push(onRejected)
            }
        }
    }
}