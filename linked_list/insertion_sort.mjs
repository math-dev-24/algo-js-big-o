import { LinkedList, Node } from "./linked_list.mjs";

const ll = new LinkedList();
ll.addFirst(1);
ll.addFirst(33);
ll.addFirst(44);
ll.addFirst(50);

ll.print();


function insertion_sort(list){
    let current = list.head;
    if(!current || !current.next){
        return;
    }else{
        const sortedList = new LinkedList();
        sortedList.addFirst(current.value);
        current = current.next;
        while(current){
            let sortedHead = sortedList.head;
            while(sortedHead.next && sortedHead.next.value < current.value){
                sortedHead = sortedHead.next;
            }
            if(sortedHead.value > current.value){
                sortedList.head = new Node(current.value, sortedHead);
            }else{
                sortedHead.next = new Node(current.value, sortedHead.next);
            }
            current = current.next;
        }
        list.head = sortedList.head;
    }
}

console.log("\n -----")
insertion_sort(ll)
ll.print()