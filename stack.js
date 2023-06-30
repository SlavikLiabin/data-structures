class Stack {
  constructor() {
    this._data = [];
  }

  push(item) {
    // Добавить элемент в стек
    this._data.push(item);
  }

  pop() {
    // Извлечь элемент из стека
    return this._data.pop();
  }

  get size() {
    // Количество элементов в стеке
    return this._data.length;
  }

  get head() {
    // «голова» стека — верхний элемент в стеке
    return this._data[this.size - 1];
  }
}

const stack = new Stack();
stack.size; // 0
stack.head; // undefined
stack.pop(); // undefined
stack.size; // 0
stack.push(1);
stack.push(2);
stack.push(3);
stack.size; // 3
stack.head; // 1
stack.pop(); // 3
stack.size; // 2
stack.head; // 2
stack.pop(); // 2
stack.push(4);
stack.pop(); // 4
stack.pop(); // 3
