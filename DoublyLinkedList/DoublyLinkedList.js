class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }

  size() {
    return this.size;
  }

  addItem(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      newNode.prev = current;
      current = newNode;
      return current;
    }
    this.size++;
  }

  addAtBeg(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let curr = this.head;
      newNode.next = curr;
      curr.prev = newNode;
      curr = newNode;
      this.head = curr;
    }
  }

  insertAtPosit(value, position) {
    const newNode = new Node(value);
    let current = this.head;
    for (let i = 1; i < position - 1; i++) {
      if (current.next) {
        current = current.next;
      }
    }
    newNode.next = current.next;
    if (current.next) {
      current.next.prev = newNode;
    }
    current.next = newNode;
    newNode.prev = current;
    return this.head;
  }

  deleteEnd() {
    let curr = this.head;

    while (curr.next.next !== null) {
      curr = curr.next;
    }

    curr.next = null;
  }

  display(head) {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let current = this.head || head;
      let listValues = "";
      while (current) {
        listValues += `${current.data} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}
const DLL = new DoublyLinkedList();
DLL.addItem(1);
DLL.addItem(9);
DLL.addItem(9);
DLL.insertAtPosit(3, 2);
DLL.display();
DLL.deleteEnd()
DLL.display();