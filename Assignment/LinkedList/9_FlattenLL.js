function flattenMultilevelDoublyLinkedList(head) {
    if (!head) return null;

    let current = head;
    const stack = [];

    while (current) {
        if (current.child) {
            if (current.next) stack.push(current.next);
            current.next = current.child;
            current.next.prev = current;
            current.child = null;
        } else if (!current.next && stack.length > 0) {
            current.next = stack.pop();
            current.next.prev = current;
        }
        current = current.next;
    }

    return head;
}

const multilevelHead = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: null,
            child: {
                data: 7,
                next: { data: 8, next: { data: 9, next: { data: 10, next: null } }, child: null },
            },
        },
        child: null,
    },
    child: null,
};

const flattened = flattenMultilevelDoublyLinkedList(multilevelHead);
let current = flattened;
let flatResult = '';
while (current) {
    flatResult += current.data + ' -> ';
    current = current.next;
}
console.log('Flatten Multilevel Doubly Linked List:', flatResult + 'null');
