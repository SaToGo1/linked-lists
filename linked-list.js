
class LinkedList{
    #headNode
    #size
    #tailNode

    constructor(){
        this.#headNode = null;
        this.#size = 0;
        this.#tailNode = null;
    }

    append(node){
        if(this.#headNode === null){
            this.#size++
            this.#headNode = node;
            this.#tailNode = node;
            return;
        }

        let actualNode = this.#headNode;
        while(actualNode.getNextNode() != null){
            actualNode = actualNode.getNextNode();
        }

        actualNode.setNextNode(node);
        
        this.#size++
        this.#tailNode = node;
    }

    prepend(node){
        if(this.#headNode === null){
            this.#size++
            this.#headNode = node;
            return;
        } 
        
        let actualNode = this.#headNode;
        this.#headNode = node;
        node.setNextNode(actualNode);

        this.#size++
    }

    print(){
        if(this.#headNode === null){
            console.log('[ ]')
            return;
        }

        let actualNode = this.#headNode;
        let string = `[ `
        while(actualNode.getNextNode() != null){
            string = string + `${actualNode.getValue()}, `
            actualNode = actualNode.getNextNode();
        }

        string = string + `${actualNode.getValue()}`
        string = string + ` ]`
        console.log(string);
        return string;
    }

    size(){
        return this.#size;
    }

    head(){
        return this.#headNode;
    }

    tail(){
        return this.#tailNode;
    }

    //returns the value at index: index;
    at(index){
        if(this.#headNode === null){
            return null;
        }

        let tempIndex = index;
        let actualNode = this.#headNode;
        while(tempIndex != 0 && actualNode.getNextNode() != null){
            actualNode = actualNode.getNextNode();
            tempIndex--;
        }

        if(tempIndex != 0) return null;
        return actualNode;
    }

    //delete last element from the list and return it;
    pop(){
        if(this.#headNode === null){
            return null;
        }

        let actualNode = this.#headNode;
        while(actualNode.getNextNode().getNextNode() != null){
            actualNode = actualNode.getNextNode();
        }

        let beforeLastNode = actualNode;
        let lastNode = actualNode.getNextNode();

        beforeLastNode.setNextNode(null);
        
        this.#size--;
        this.#tailNode = beforeLastNode;

        return lastNode;
    }

    contains(value){
        if(this.#headNode === null){
            return false;
        }

        let actualNode = this.#headNode;
        while(actualNode.getNextNode() != null){
            if(actualNode.getValue() === value){
                return true;
            }
            actualNode = actualNode.getNextNode();
        }
        if(actualNode.getValue() === value){
            return true;
        }
        return false;
    }

    find(value){
        if(this.#headNode === null){
            return null;
        }
    
        let actualNode = this.#headNode;
        let index = 0;
        while(actualNode.getNextNode() != null){
            if(actualNode.getValue() === value){
                return index;
            }
            index++;
            actualNode = actualNode.getNextNode();
        }
        if(actualNode.getValue() === value){
            return index;
        }
        return null;
    }
    
    toString(){
        if(this.#headNode === null){
            console.log('( null )')
            return;
        }

        let actualNode = this.#headNode;
        let string = ``
        while(actualNode.getNextNode() != null){
            string = string + `( ${actualNode.getValue()} ) -> `
            actualNode = actualNode.getNextNode();
        }

        string = string + `( ${actualNode.getValue()} ) -> `
        string = string + `null`
        console.log(string);
        return string;
    }

    insertAt(value, index){
        if(index == 0){
            console.log(`index = 0`)
            this.prepend(value);
            return;
        }

        if(this.#headNode === null){
            return;
        }

        if(index == this.#size){
            console.log(`index = size`)
            this.append(value);
            return;
        }

        if(index > this.#size){
            console.log(`index > size`)
            return null;
        }

        let tempIndex = index;
        let actualNode = this.#headNode;
        let beforeLastNode;
        while(tempIndex != 0 && actualNode.getNextNode() != null){
            if(tempIndex == 1){
                beforeLastNode = actualNode;   
            }
            actualNode = actualNode.getNextNode();
            tempIndex--;
        }
        if(tempIndex != 0) return null;

        beforeLastNode.setNextNode(value);
        value.setNextNode(actualNode);
        
        this.#size++;
    }

    removeAt(index){
        if(this.#headNode === null){
            return;
        }

        if(index == 0){
            this.#headNode = this.#headNode.getNextNode();
            return;
        }

        if(index == this.#size){
            this.pop();
            return;
        }

        if(index > this.#size){
            return null;
        }

        let tempIndex = index;
        let actualNode = this.#headNode;
        let beforeLastNode;
        while(tempIndex != 0 && actualNode.getNextNode() != null){
            if(tempIndex == 1){
                beforeLastNode = actualNode;   
            }
            actualNode = actualNode.getNextNode();
            tempIndex--;
        }
        if(tempIndex != 0) return null;

        beforeLastNode.setNextNode(actualNode.getNextNode());
        
        this.#size--;
    }
}

class Node{
    #value
    #nextNode
    
    constructor(value=null, nextNode=null){
        this.#value = value;
        this.#nextNode = nextNode;
    }
    
    getNextNode(){
        return this.#nextNode;
    }

    setNextNode(node){
        this.#nextNode = node;
    }

    getValue(){
        return this.#value;
    }

    setValue(value){
        this.#value = value;
    }
}

let lnlist = new LinkedList();
let emptylist = new LinkedList();

let node = new Node(0);
lnlist.append(node);

node = new Node(1);
lnlist.append(node);

node = new Node(2);
lnlist.append(node);

node = new Node(3);
lnlist.append(node);

node = new Node(4);
lnlist.prepend(node);

node = new Node(9);
lnlist.prepend(node);

lnlist.print();

console.log(`size: ${lnlist.size()} === 6?`);
console.log(`empty list size: ${emptylist.size()} === 0?`);

console.log();
let x = lnlist.head();
console.log(`head: ${x}`)
console.log(`head value: ${x.getValue()} == 9?`);
console.log(`head value empty list: ${emptylist.head()} == null?`);

x = lnlist.tail();
console.log(`tail: ${x}`)
console.log(`tail value: ${x.getValue()} == 3?`);
console.log(`tail value empty list: ${emptylist.tail()} == null?`);

console.log();
lnlist.print();
console.log(`at(index=0): ${lnlist.at(0).getValue()} === 9?`);
console.log(`at(index=1): ${lnlist.at(1).getValue()} === 4?`);
console.log(`at(index=4): ${lnlist.at(4).getValue()} === 2?`);
console.log(`at(index=5): ${lnlist.at(5).getValue()} === 3?`);
console.log(`at(index=12): ${lnlist.at(12)} === null?`);
console.log(`at(index=5) empty list: ${emptylist.at(5)} === null`);

console.log();
lnlist.print();
console.log(`lnlist.pop().getValue() = ${lnlist.pop().getValue()} === 3?`);
lnlist.print();
console.log(`pop empty list: ${emptylist.pop()} === null?`);

console.log();
console.log(`lnlist.contains(2) = ${lnlist.contains(2)} === true?`);
console.log(`lnlist.contains(0) = ${lnlist.contains(0)} === true?`);
console.log(`lnlist.contains(7) = ${lnlist.contains(7)} === false?`);
console.log(`lnlist.contains(3) = ${lnlist.contains(3)} === false?`);
console.log(`contains empty list: ${emptylist.contains(7)} === false?`);

console.log();
console.log(`lnlist.find(2) = ${lnlist.find(2)} === 4?`);
console.log(`lnlist.find(0) = ${lnlist.find(0)} === 2?`);
console.log(`lnlist.find(7) = ${lnlist.find(7)} === null?`);
console.log(`lnlist.find(9) = ${lnlist.find(9)} === 0?`);
console.log(`find empty list: ${emptylist.find(6)} === null?`);

lnlist.toString();
emptylist.toString();

console.log()
lnlist.toString();
node = new Node(2);
console.log(`lnlist.insertAt(2, 2) ${lnlist.insertAt(node, 2)}`);
lnlist.toString();
node = new Node(25);
console.log(`lnlist.insertAt(25, 0), first element ${lnlist.insertAt(node, 0)}`);
lnlist.toString();
node = new Node(32);
console.log(`lnlist.insertAt(32, 7), last element ${lnlist.insertAt(node, 7)}`);
lnlist.toString();
node = new Node(54);
console.log(`lnlist.insertAt(54, 9), beyond last element ${lnlist.insertAt(node, 9)}`);
lnlist.toString();
node = new Node(54);
console.log(`lnlist.insertAt(54, 6) ${lnlist.insertAt(node, 6)}`);
lnlist.toString();

console.log()
node = new Node(54);
console.log(`lnlist.insertAt(54, 6) empty list ${emptylist.insertAt(node, 5)}`);
emptylist.toString();
node = new Node(54);
console.log(`lnlist.insertAt(54, 0) empty list ${emptylist.insertAt(node, 0)}`);
emptylist.toString();

console.log()
console.log()
lnlist.toString();
console.log(`lnlist.removeAt(2) ${lnlist.removeAt(2)}`);
lnlist.toString();
console.log(`lnlist.removeAt(0), first element ${lnlist.removeAt(0)}`);
console.log(`lnlist.removeAt(0), first element ${lnlist.removeAt(0)}`);
console.log(`lnlist.removeAt(0), first element ${lnlist.removeAt(0)}`);
console.log(`lnlist.removeAt(0), first element ${lnlist.removeAt(0)}`);
lnlist.toString();
console.log(`lnlist.removeAt(3), last element ${lnlist.removeAt(3)}`);
lnlist.toString();
console.log(`lnlist.removeAt(3), beyond last element ${lnlist.removeAt(3)}`);
lnlist.toString();
console.log(`lnlist.removeAt(1) ${lnlist.removeAt(1)}`);
lnlist.toString();

console.log()
console.log(`removeAt(0) ${emptylist.removeAt(0)}`);
console.log(`empty list removeAt(0) ${emptylist.removeAt(0)}`);
emptylist.toString();
console.log(`empty list removeAt(0) ${emptylist.removeAt(0)}`);
emptylist.toString();