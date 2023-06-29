class Queue {
  constructor() {
    this._data = [];
  }

  insert(item) {
    // Добавить элемент в очередь
    this._data.unshift(item);
  }

  pop() {
    // Извлечь элемент из очереди
    return this._data.pop();
  }

  get size() {
    // Количество элементов в очереди
    return this._data.length;
  }

  get head() {
    // «голова» очереди — первый элемент
    return this._data[this.size - 1];
  }
}

const queue = new Queue();

// queue.size;  // 0
// queue.head;  // undefined
// queue.pop();  // undefined
// queue.size;  // 0
// queue.insert(1);
// queue.insert(2);
// queue.insert(3);
// queue.size;  // 3
// queue.head;  // 1
// queue.pop();  // 1
// queue.size;  // 2
// queue.head;  // 2
// queue.pop();  // 2
// queue.insert(4);
// queue.pop();  // 3
// queue.pop();  // 4
