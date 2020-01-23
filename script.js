class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class stack {
  constructor() {
    this.head = null;
    this.size = 0;
}
    //push the last input
     pushToList() {
      this.head = new Node(data, this.head);
      this.size++;
    }

    insertLast(data) {
      let node = new Node(data);
      let current;

      if (!this.head) {
        this.head = node;
      } else {
        current = this.head;

        while (current.next) {
          current = current.next;
        }

        current.next = node;
      }

      this.size++;
    }

    printListData() {
      let current = this.head;
      var tab=[];
      while (current) {
          tab.push(current.data);
        console.log(current.data);
        current = current.next;
      }
      return tab;
    }

    removeLast() {

      let current = this.head;
      let previous;
      let count = 0;

      if(!this.head.next){
      this.head = null;
      return;
      }else {

        while (count < this.size - 1) {
          count++;
          previous = current;
          current = current.next;
        }

        previous.next = current.next;
        }


      this.size--;
    }

    removeFirst() {

      let current = this.head;

        this.head = current.next;

      this.size--;
    }
}




  let list = new stack();

  function addlast() {
    list.insertLast(document.getElementById("put").value);
    document.getElementById('flist').innerHTML = list.printListData();
    document.getElementById('put').value = '';
  }

  function popStack() {
    list.removeLast(document.getElementById("put").value);
    document.getElementById('flist').innerHTML = list.printListData();
  }

  function popQueue() {
    list.removeFirst(document.getElementById("put").value);
    document.getElementById('flist').innerHTML = list.printListData();
  }
