"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const priority_queue_1 = require("@datastructures-js/priority-queue");
function maxKelements(nums, k) {
    const pque = new priority_queue_1.MaxPriorityQueue();
    // const mpq = MaxPriorityQueue.fromArray<number>(numbers);
    for (const num of nums)
        pque.enqueue(num);
    let sum = 0;
    for (let i = 0; i < k; i++) {
        const topNum = pque.front().element;
        pque.dequeue();
        sum += topNum;
        const newNum = Math.ceil(topNum / 3);
        pque.enqueue(newNum);
    }
    return sum;
}
;
//# sourceMappingURL=PriorityQueue.js.map