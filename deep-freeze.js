function deepfreeze(obj) {
    Object.freeze(obj);
    for(key in obj) {
      const value = obj[key];
  
      if(typeof value === 'object' && value !== null) {
        deepfreeze(value)
        
      }
    }
  }
  