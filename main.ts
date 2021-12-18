class Arrays {
  length: number;
  data: object;
  constructor(...items: number[]) {
    this.length = 0;
    this.data = {};

    for (let index: number = 0; index < items.length; index++) {
      this.data[this.length] = items[index];
      this.length++;
    }
  }

  push(element: number): number {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  pop(): object {
    delete this.data[this.length - 1];
    this.length--;
    return this.data;
  }
  shift(): object {
    delete this.data[0];
    this.length--;
    let obj: object = {};
    for (var key in this.data) {
      obj[+key - 1] = this.data[key];
    }
    return (this.data = obj);
  }
  unshift(element: number): object {
    let obj = {};
    obj[0] = element;
    this.length++;

    for (var key in this.data) {
      obj[+key + 1] = this.data[key];
    }
    return (this.data = obj);
  }
  insertAt(item: number, index: number): object {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }
}
let arr = new Arrays(5, 5, 8, 9, 1);
arr.push(1);
arr.pop();
arr.shift();
arr.unshift(8);
console.log(arr);
