## forEach

```javascript

var arr = [1,2,3,4]
arr.desc = "an array"

arr.forEach(val => {
    console.log('==============',val)
    // 1,2,3,4
})

```
> 注意的点
* 循环不能被中断（for 循环可以）
* 属性会被忽略掉
* 循环得到的第一个参数是value，第二个参数是key



## forin

```javascript

var arr = [1,2,3,4]
arr.desc = "an array"


for (var key in arr){
    console.log('==============',key)
        // 0,1,2,3,desc
}

```
> 注意的点
* 循环可以被中断（for 循环可以）
* 属性会被循环出来
* 循环得到的是key


## forof（与forEach类似，区别在于forof可以break）

```javascript

var arr = [1,2,3,4]
arr.desc = "an array"


for (var val of arr){
    console.log('==============',val)
        // 1,2,3,4
}

```
> 注意的点
* 循环可以被中断（for 循环可以）
* 属性不会被循环出来
* 循环得到的是value
