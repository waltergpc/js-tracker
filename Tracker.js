 module.exports =  class Tracker  {
    constructor(){
    
        
        

        this.items= [],

        this.index= []

    
    }

     allocate(item) {

        
            if(this.index.includes(item) === false) {
                this.index.push(item);
                this.items = [...this.items, {name: item, counter: 1, list:[item + 1]}];
                //console.log(item + ' has been allocated to slot ' + 1)
            } 

            else if (this.index.includes(item)) {

                for(let i=0; i<this.items.length; i++) {

                    if(this.items[i].name === item) {

                this.items[i].counter++;
                this.items[i].list.push(item + this.items[i].counter);
                //console.log(item + ' has been allocated to slot ' + this.items[i].counter);
                break;

            }}}
        }

        delete(item) {
            console.log('hola antes del for')
            for(let i=0; i<this.items.length; i++) {
                if(this.items[i].list.includes(item)) {

                    let new_arr = this.items[i].list.filter(element => element != item);

                    console.log(new_arr);

                    this.items[i].list = new_arr;

                    //console.log('El item esta en la lista de ' + this.items[i].name);
                    break
                } 
                
            }

        }
        

    }



    

    

/*let track1 = new Tracker;
console.log(track1);*/
        

        
        
      

       