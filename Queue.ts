class Queue{
    private q :any[]= []
    constructor(){}

    enqueue(item: any){
        this.q.push(item);
    }

    dequeue(): any{

        let item = this.q[0];
        if(this.q.length === 1) {
            this.q = [];
            return item;
        }
        let i = 0;
        for(let i=0;i<this.q.length-1;i++)
        {
            this.q[i]=   this.q[i+1];
        }
        this.q.pop();
        console.log(item);
        
        return item;
    }

    size(){
        return this.q.length;
    }
}