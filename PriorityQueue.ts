import {MaxPriorityQueue} from '@datastructures-js/priority-queue'
function maxKelements(nums: number[], k: number): number {
    const pque = new MaxPriorityQueue();
    // const mpq = MaxPriorityQueue.fromArray<number>(numbers);
    for(const num of nums) pque.enqueue(num);

    let sum = 0;
    for(let i=0;i<k;i++)
    {
        const topNum = pque.front().element;
        pque.dequeue();
        sum+=topNum;
        const newNum = Math.ceil(topNum/3);
        pque.enqueue(newNum);
    }
    return sum;
};
