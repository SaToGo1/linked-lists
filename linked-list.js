
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
        while(tempIndex != 0){
            actualNode = actualNode.getNextNode();
            tempIndex--;
        }

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

let x = lnlist.head();
console.log(`head: ${x}`)
console.log(`head value: ${x.getValue()} == 9?`);

x = lnlist.tail();
console.log(`tail: ${x}`)
console.log(`tail value: ${x.getValue()} == 3?`);

lnlist.print();
console.log(`at(index=0): ${lnlist.at(0).getValue()} === 9?`);
console.log(`at(index=1): ${lnlist.at(1).getValue()} === 4?`);
console.log(`at(index=4): ${lnlist.at(4).getValue()} === 2?`);
console.log(`at(index=5): ${lnlist.at(5).getValue()} === 3?`);

console.log();
lnlist.print();
console.log(`lnlist.pop().getValue() = ${lnlist.pop().getValue()} === 3?`);
lnlist.print();

console.log();
console.log(`lnlist.contains(2) = ${lnlist.contains(2)} === true?`);
console.log(`lnlist.contains(0) = ${lnlist.contains(0)} === true?`);
console.log(`lnlist.contains(7) = ${lnlist.contains(7)} === false?`);
console.log(`lnlist.contains(3) = ${lnlist.contains(3)} === false?`);