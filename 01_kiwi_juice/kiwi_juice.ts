interface Obj {
  [key: string]: any;
}

const Solution: Obj = {
  solve: function(
    capacities: number[],
    bottles: number[],
    fromId: number[],
    toId: number[]
  ): number[] {
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
  pour: function(
    fromAmount: number,
    toAmount: number,
    toCapacity: number
  ): number[] {
    return fromAmount + toAmount <= toCapacity
      ? [0, fromAmount + toAmount]
      : [fromAmount + toAmount - toCapacity, toCapacity];
  }
};

export default Solution;
