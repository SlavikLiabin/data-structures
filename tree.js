class Node {
  // Узел дерева, который хранит данные и ссылки на левое и правое поддеревья
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(item) {
    // Добавить элемент в дерево
    const node = new Node(item);
    if (!this.root) {
      // Если элемент первый, он и будет корнем дерева
      this.root = node;
      return;
    }

    // Добавить элемент в нужное место в поддереве
    let next = this.root;
    while (true) {
      if (node.value < next.value) {
        // Новый элемент меньше текущего — вставляем в левое поддерево
        if (!next.left) {
          // Мы добрались до листа дерева — создадим от него новый лист
          next.left = node;
          return;
        }
        next = next.left;
      } else {
        // Новый элемент больше или равен текущему — вставляем в правое поддерево
        if (!next.right) {
          // Мы добрались до листа дерева — создадим от него новый лист
          next.right = node;
          return;
        }
        next = next.right;
      }
    }
  }

  has(item) {
    // Проверяем наличие элемента в дереве
    let next = this.root;
    while (next) {
      if (item < next.value) {
        // Искомый элемент меньше текущего — ищем в левом поддереве
        next = next.left;
      } else if (item > next.value) {
        // Искомый элемент больше текущего — ищем в правом поддереве
        next = next.right;
      } else {
        // Нашли элемент
        return true;
      }
    }
    // Дошли до листа дерева, но не нашли нужный элемент
    return false;
  }

  remove(item) {
    // Удалить элемент из дерева
    this.root = this._remove(this.root, item);
  }

  _remove(node, item) {
    // Обновляем поддерево, удаляя из него элемент
    if (!node) {
      // Неоткуда удалять
      return null;
    }

    if (item < node.value) {
      // Удаляемый элемент меньше текущего — удаляем из левого поддерева
      node.left = this._remove(node.left, item);
      // Заменять корень поддерева не требуется — возвращаем его «как есть»
      return node;
    }

    if (item > node.value) {
      // Удаляемый элемент больше текущего — удаляем из правого поддерева
      node.right = this._remove(node.right, item);
      // Заменять корень поддерева не требуется, возвращаем его «как есть»
      return node;
    }
    // Удаляемый элемент равен текущему — удаляем текущий элемент

    if (!node.left && !node.right) {
      // Если текущий элемент — лист, просто удаляем его
      return null;
    }

    if (!node.left) {
      // Есть только правое поддерево — заменим текущий элемент на его правое поддерево
      return node.right;
    }

    if (!node.right) {
      // Есть только левое поддерево — заменим текущий элемент на его левое поддерево
      return node.left;
    }

    // Есть оба поддерева — ищем в правом наименьший элемент (самый левый),
    // удаляем его из правого поддерева и заменяем на него текущий элемент
    let minItem = node.right;
    // Сохраняем предыдущий элемент на каждом шаге, чтобы было легко удалить наименьший элемент, когда найдём его
    let prev = node;

    // Идём по дереву до момента, пока у minItem слева не появится поддерево
    while (minItem.left) {
      prev = minItem;
      minItem = minItem.left;
    }

    // Удаляем из правого поддерева наименьший элемент
    prev.left = null;
    // Меняем текущий элемент на минимальный из правого поддерева, тем самым удаляя текущий
    node.data = minItem.data;
    return node;
  }
}

const bst = BST();
bst.insert(5);
bst.insert(7);
bst.insert(3);
bst.insert(1);
bst.insert(9);
bst.insert(6);
bst.insert(4);

bst.has(4); // true
bst.remove(4);
bst.has(4); // false
