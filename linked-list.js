
class LinkedList{
    constructor(initialNode = null){
        this.headNode = initialNode;
    }

    append(node){
        if(this.headNode === null){
            this.headNode = node;
            return;
        }

        let actualNode = this.headNode;
        while(actualNode.getNextNode() != null){
            actualNode = actualNode.getNextNode();
        }

        actualNode.setNextNode(node);
    }

    prepend(node){
        if(this.headNode === null){
            this.headNode = node;
            return;
        } 
        
        let actualNode = this.headNode;
        this.headNode = node;
        node.setNextNode(actualNode);
    }

    print(){
        if(this.headNode === null){
            console.log('[ ]')
            return;
        }

        let actualNode = this.headNode;
        let string = `[ `
        while(actualNode.getNextNode() != null){
            string = string + `${actualNode.getValue()}, `
            actualNode = actualNode.getNextNode();
        }

        string = string + `${actualNode.getValue()}`
        string = string + ` ]`
        console.log(string);
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

lnlist.print();