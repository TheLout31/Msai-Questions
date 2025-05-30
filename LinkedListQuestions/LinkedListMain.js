class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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
    }
    this.size++;
  }

  addAtIndex(value, idx) {
    const newNode = new Node(value);
    if (idx == 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    } else {
      let prev = this.head;

      for (let i = 0; i < idx - 1; i++) {
        prev = prev.next;
      }
      newNode.next = prev.next;
      prev.next = newNode;
    }

    this.size++;
  }

  removeAtIndex(idx) {
    if (idx < 0 || idx >= this.size) {
      return;
    }
    if (idx === 0) {
      this.head = this.head.next;
    } else {
      let previous = this.head;
      for (let i = 0; i < idx - 1; i++) {
        previous = previous.next;
      }
      previous.next = previous.next.next;
    }
    this.size--;
  }

  removeValue(value) {
    if (!this.head) return;

    // Special case: if head needs to be removed
    if (this.head.data == value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;

    while (current.next) {
      if (current.next.data == value) {
        current.next = current.next.next;
        this.size--;
        return;
      }
      current = current.next;
    }
  }

  reverseLL() {
    let curr = this.head;
    let prev = null;
    let next = null;

    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;

    console.log(this.display(prev));
  }

  findMiddle() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    console.log(slow.data);
  }

  nthNode(K) {
    let curr = this.head;
    let size = this.size;
    for (let i = 1; i <size - K + 1; i++) {
      curr = curr.next;
    }
    
    console.log(curr.data);
  }

   removenthNode(K) {
    let curr = this.head;
    let size = this.size;
    for (let i = 1; i < size - K; i++) {
      curr = curr.next;
    }
   curr.next = curr.next.next
  }

  reversePair() {
    let curr = this.head;
    let arr = [];

    while (curr !== null) {
      arr.push(curr.data);
      curr = curr.next;
    }

    for (let i = 0; i < arr.length - 2; i += 2) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
    console.log(arr);
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

const LL = new LinkedList();
LL.addItem(10);
LL.addItem(20);
LL.addItem(30);
LL.addItem(60);
LL.addItem(80);
LL.display();

LL.nthNode(3)
LL.removenthNode(3)
LL.display();