    addNode(data) {
      const newNode = new Node(data);
  
      if (!this.head) {
    
        this.head = newNode;
      } else {
    
        let currentNode = this.head;
        while (currentNode.next) {
          currentNode = newNode;
        }
        currentNode.next = newNode;
      }
    }