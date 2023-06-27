function Counter() {
    return {
      count: 0,
      max: 15,
      min: 0,

      increment() {
        if(this.count<this.max){
           this.count++; 
        }
        
      },
      decrement() {
        if(this.count>this.min){
           this.count--; 
        }
        
      },
    };
  }
  
  document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
  });
