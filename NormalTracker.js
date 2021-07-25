let Tracker = require('./Tracker.js')

class NormalTracker extends Tracker {
    constructor(){
        super()
    }

    allocate(item) {
        super.allocate(item);
        for(let i=0; i<this.items.length; i++) {

            if(this.items[i].name === item) {
                console.log(item + ' has been allocated to slot ' + this.items[i].counter);
                console.log(this.items[i].list);
                console.log(this.items[i].list.length)
            }
    }}


    get count() {
        return this.items,
        console.log(this.items);
    }



}


let ntrack1 = new NormalTracker;
console.log(ntrack1);
ntrack1.allocate('server');
ntrack1.allocate('hardware');
ntrack1.delete('server1');

ntrack1.allocate('server');

ntrack1.allocate('server');

ntrack1.allocate('hardware');
ntrack1.delete('hardware');