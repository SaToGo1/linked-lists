
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

    print(){
        if(this.headNode === null){
            console.log('[ ]')
            return;
        }

        let actualNode = this.headNode;
        let string = `[ `
        while(actualNode.getNextNode() != null){
            string = string + `${actualNode.value}, `
            actualNode = actualNode.getNextNode();
        }

        string = string + `${actualNode.value}`
        string = string + ` ]`
        console.log(string);
    }
}

class Node{
    constructor(value=null){
        this.value = value;
        this.nextNode = null;
    }

    getNextNode(){
        return this.nextNode;
    }

    setNextNode(node){
        this.nextNode = node;
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

lnlist.print();