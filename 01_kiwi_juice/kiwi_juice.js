const Solution = {
  solve: function(capacities, bottles, fromId, toId) {
    for (let i = 0; i < fromId.length; i++) {
      let result = this.pour(
        bottles[fromId[i]],
        bottles[toId[i]],
        capacities[toId[i]]
      );
      bottles[fromId[i]] = result[0];
      bottles[toId[i]] = result[1];
    }
    return bottles;
  },
  pour: function(fromAmount, toAmount, toCapacity) {
    return fromAmount + toAmount <= toCapacity
      ? [0, fromAmount + toAmount]
      : [fromAmount + toAmount - toCapacity, toCapacity];
  }
};

module.exports = Solution;
