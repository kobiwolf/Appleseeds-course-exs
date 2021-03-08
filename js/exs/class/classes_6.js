class Room {
  constructor(id, level, amount, isFree = true) {
    this.id = id;
    this.level = level;
    this.amount = amount;
    this.isFree = isFree;
  }
  isFull(num) {
    if (num <= this.amount) {
      this.isFree = false;
      return true;
    }
    return false;
  }
  print() {
    console.log(
      `id:${this.id}, level:{$this.level}, amount:${this.amount}, free:${this.isFree}`
    );
  }
}
