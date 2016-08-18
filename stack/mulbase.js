'use strict';
/*
 *author:夏君
 *2016-8-18
 *栈的实现类
 */
function Stack() {
  this.dataStore = [];
  this.top = 0;
}

// 压入栈方法
Stack.prototype.push = function (element) {
  // this.dataStore.push(element);
  // this.top++;
  this.dataStore[this.top++] = element;
};

// 出栈方法
// 栈顶元素删除
// top-1
// 栈顶元素返回给调用者
Stack.prototype.pop = function () {
  if(this.top == 0) {
    return 'undefind';
  }
    var lastItem = this.dataStore.pop();
    this.top--;
    return lastItem;
  // return this.dataStore[--this.top];
}

// 查看栈顶元素方法
Stack.prototype.peek = function () {
  return this.dataStore[this.top-1];
}

// 返回栈内元素数量
Stack.prototype.length = function () {
  return this.top;
}

// 清空栈
Stack.prototype.clear = function () {
  // this.dataStore = [];
  this.top = 0;
}

Stack.prototype.toString = function () {
  if(this.top ==0) {
    return '此栈为空！';
  }
  return this.dataStore.join(' ');
}

// 进制数转化
// n 数字
// b 几进制数
// 函数最后返回计算的结果
function mulBase(n,b) {
  var stack = new Stack();
  do {
    stack.push(n%b);
    n = Math.floor(n/b);
  } while (n > 0);
  var converted = '';
  do {
    converted += stack.pop();
  } while (stack.top>0);
  return converted;
}

// 判断字符串是否为回文
function isHuiwen(str) {
  var stack = new Stack();
  for (var i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }
  var str2 = '';
  for (var i = 0; i < str.length; i++) {
    str2 += stack.pop();
  }
  if(str == str2) {
    return '是回文';
  } else {
    return '不是回文';
  }
}

// console.log(mulBase(32,16));
console.log(isHuiwen('rececer'));
