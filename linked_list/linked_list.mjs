export class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next
    }
}

export class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    getValue(position) {
        if(position > this.size - 1 || position < 0){
            throw new Error("Position invalide !");
        }else if(position === 0){
            return this.head.value;
        }else {
            let current = this.head;
            while(position){
                current = current.next;
                position--;
            }
            return current;
        }
    }

    contains(value){
        let current = this.head;
        if(!current) return false;
        while(current){
            if(current.value === value){
                return true;
            }
            current = current.next;
        }
        return false;
    }

    addFirst(value){
        let current = this.head;
        if(!current){
            this.head = new Node(value);
        }else{
            this.head = new Node(value, current);
        }
        this.size++;
    }

    addLast(value){
        let current = this.head;
        if(!current){
            this.head = new Node(value);
        }else{
            while(current.next){
                current = current.next;
            }
            current.next = new Node(value);
        }
        this.size++;
    }

    add(value, position){
        if(position < 0 || position > this.size - 1){
            throw new Error('position invalide')
        } else if (position === 0){
            this.head = new Node(value, this.head)
        }else {
            let current = this.head;
            while(position - 1){
                current = current.next;
                position--;
            }
            current.next = new Node(value, current.next)
        }
        this.size++;
    }

    removeFirst() {
        let current = this.head;
        if(!current) return null;
        this.head = current.next;
        this.size--;
        return current;
    }

    removeLast() {
        let current = this.head;
        if(!current) return null;
        if(!current.next) {
            this.head = null;
            this.size--;
            return current;
        }
        while(current.next.next){
            current = current.next;
        }
        const nodeDeleted = current.next;
        current.next = null;
        this.size--;
        return nodeDeleted;
    }

    remove(position){
        if(position < 0 || position > this.size - 1){
            throw new Error('Position invalide');
        } else if(position === 0){
            const node = this.head;
            this.head = this.head.next;
            this.size--;
            return node;
        }else{
            let current = this.head;
            while(position - 1 ){
                current = current.next;
                position--;
            }
            const node = current.next.next;
            current.next = current.next.next;
            this.size--;
            return node;
        }
    }

    print() {
        let current = this.head;
        while(current){
            process.stdout.write(` -> [${current.value}]`);
            current = current.next;
        }
    }
}


// const linkedList = new LinkedList();
// linkedList.addFirst('a');
// linkedList.addFirst('b');
// linkedList.addLast('c')
// linkedList.add('d', 1)
// linkedList.add('e', 0)
// linkedList.removeFirst()
// linkedList.removeLast()
// linkedList.remove(0)
// linkedList.print()
// console.log('\n')
// console.log(linkedList.getValue(2))
// console.log(`contient x ? ${linkedList.contains("x")}`)
