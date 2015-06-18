/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

function linkedListGenerator (){
  var linkedListModule = {
      getHead: _getHead,
      getTail: _getTail,
      add: _add,
      remove: _remove,
      get: _get,
      insert: _insert
  };

  var head = null;
  var tail = null;


  return linkedListModule;


    function _getHead () {
      return head;
    }

    function _getTail () {
      return tail;
    }

    function _add (_newValue) {
      var node = {
        value: _newValue,
        next: null
      };

      if (head === null && tail === null){
        head = node;
        tail = node;
      } else {
        tail.next = node;
        tail = node;
      }
      return node;
    }

    function _remove (currentIndex) {
      // minus one from current place
      var preNode = _get( currentIndex - 1 );

      // move up one from current place
      var postNode = _get( currentIndex + 1);

      var currentNode = _get(currentIndex);

      if (currentNode === tail){
        tail = preNode;
      }

      if (preNode === undefined){
        head = postNode;
        return true;
      }

      if (!_get(currentIndex)){
        return false;
      }

      preNode.next = postNode;

     }

    function _get(nodeNumber) { // starting node
      var currentNode = head; // what node we're at right now!
      for (var i = 0; i <= nodeNumber; i++){
        if (i === nodeNumber) { // where current step is at!
          return currentNode; // what node we're at right now!
        }
        if (currentNode === tail){ // if the node is at the end, but is asking for more
          return false;
        }
        currentNode = currentNode.next; // go to the next one
      }
    }

    function _insert (value, index) {
      var currentNode = _get(index);
      var previousNode = _get(index - 1);
      var newNode = {
        value: value,
        next: null
      }

      if (index < 0) {
        return false;
      }

      if (currentNode === false){
        return false;
      }

      if (index === 0) {
        newNode.next = head;
        head = newNode;
        return head;
      }
        newNode.next = currentNode;
        previousNode.next = newNode;
    }
}