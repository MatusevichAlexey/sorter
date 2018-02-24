class Sorter {
  constructor() {
    this.sorterArray = new Array();
    
    this.compareFunction = function(left,right) { 
      return left - right;
    }
    
    this.indicesCompareFunction = function(left,right) { 
      return left - right;
    }
  
  }

  add(element) {
    this.sorterArray.push(element);
  }

  at(index) {
    return this.sorterArray[index];
  }

  get length() {
    return this.sorterArray.length;  
  }

  toArray() {
    return this.sorterArray;
  }

  sort(indices) {
    var localArray = [];

    indices.sort(this.indicesCompareFunction);

    for (var i = 0; i < indices.length; i++) {
      localArray.push( this.sorterArray[indices[i]] );
    }
    
    localArray.sort(this.compareFunction);
    
    for (var i = 0; i < indices.length; i++) {
      this.sorterArray.splice(indices[i], 1, localArray[i]);
    }

    return this.sorterArray;
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;    
  }
}

module.exports = Sorter;