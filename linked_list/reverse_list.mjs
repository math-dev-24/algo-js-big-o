import { LinkedList } from "./linked_list.mjs";

const ll = new LinkedList();

ll.addFirst(5);
ll.addFirst(4);
ll.addFirst(1);
ll.addFirst(55);
ll.print();
console.log("\n ----")
// 55 - 1 - 4 - 5
// On veut : 
// 5 - 4 - 1 - 55


function reverseList(list){
    // performance : O(n)
    let current = list.head;
    if(!current || !current.next){
        return;
    }else{
        let prev = null;
        while(current){
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        list.head = prev;
    }
}

function reverseListV2(list){
    // performance : O(n)
    let current = list.head;
    if(!current || !current.next){
        return;
    }else{
        const reversedList = new LinkedList();
        while (current) {
            reversedList.addFirst(current.value);
            current = current.next;
        }
        ll.head = reversedList.head;
    }
}

reverseListV2(ll);
ll.print();