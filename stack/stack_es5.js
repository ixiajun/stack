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

var stack1 = new Stack();
stack1.push('牛A');
stack1.push('牛B');
stack1.push('牛C');
stack1.push('牛D');
console.log(stack1.toString());
console.log(stack1.peek());
stack1.pop();
stack1.pop();
stack1.pop();
stack1.pop();
console.log(stack1.pop());
stack1.clear();
console.log(stack1.toString());
