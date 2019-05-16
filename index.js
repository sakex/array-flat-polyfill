(function() {
  if (!Array.prototype.flat) {
    Array.prototype.flat = function(depth) {
      if (!depth) depth = 1;
      else if (typeof depth !== 'number') {
        try {
          depth = parseInt(depth, 10);
        } catch (err) {
          depth = 1;
        }
      }
      var length = this.length;
      var elem;
      var newArr = [];
      for (var i = 0; i < length; ++i) {
        elem = this[i];
        if (depth >= 0 && Array.isArray(elem)) {
          var nestedArray = elem.flat(depth - 1);
          for (var j = 0; j < nestedArray.length; ++j) {
            newArr.push(nestedArray[j]);
          }
        } else newArr.push(elem);
      }
      return newArr;
    };
  }
})();
