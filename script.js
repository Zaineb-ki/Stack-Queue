class Node {
  constructor(data, next, back) {
    this.data = data;
    this.next = next || null;
    this.back = back || null;
  }
}

class stack {
  constructor() {
    this.head = null;
    this.size = 0;
    this.current = null;
}

    insertLast(data) {
      let node = new Node(data);

      if (!this.head) {
        this.current = this.head = node;
      } else {
        let temp = this.head;
        this.head = node;
        temp.next = node;
        node.back = temp;
        }


      this.size++;
    }



    removeLast() {

      if (this.head && this.head === this.current) {
          this.current = this.head.back;
      }
      if (this.head && this.head.back) {
          this.head = this.head.back;
          this.head.next = null;
      } else {
          this.head = this.current = null;
      }
    }

    removeFirst() {

      let current = this.head;

      this.head = current.next;

      this.size--;
    }

    moveNext() {
        if (this.current && this.current.next)
            this.current = this.current.next;
    }
    moveBack() {
        if (this.current && this.current.back)
            this.current = this.current.back;
    }

    printListData() {
      if (this.current)
      return this.current.data;
      else{
        return "Empty List";
        }

      }
      clearList(){
        this.current = null;
        this.head = null;
        this.size = 0;
      }
}





  let list = new stack();

  function addlast() {
    list.insertLast(document.getElementById("put").value);
    document.getElementById('data').innerHTML = list.printListData();
    document.getElementById('put').value = '';
  }

  function popStack() {
    list.removeLast(document.getElementById("put").value);
    document.getElementById('data').innerHTML = list.printListData();
  }

  function popQueue() {
    list.removeFirst(document.getElementById("put").value);
    document.getElementById('data').innerHTML = list.printListData();
  }

  function next() {
      list.moveNext();
      document.getElementById('data').innerHTML = list.printListData();
  }

  function back() {
      list.moveBack();
      document.getElementById('data').innerHTML = list.printListData();
  }