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
class Hotel {
  constructor(arr = []) {
    this.roomsList = arr;
  }
  addRoom(newRoom) {
    if (this.roomsList.filter((room) => room.id === newRoom.id).length)
      return false;
    return true;
  }
  removeRoom(id) {
    let info = this.findbyid(id);
    if (info[0].isFree) {
      this.roomsList.splice(info[1], 1);
      return true;
    } else return false;
  }
  checkFreeRooms(amount) {
    return this.roomsList.filter((room) => {
      if (room.isFree && room.amount >= amount) return room;
    });
  }
  findbyid(id) {
    let roomIndex;
    let room = this.roomsList.find((room, i) => {
      if (room.id === id) {
        roomIndex = i;
        return room;
      }
    });
    return [room, roomIndex];
  }
  checkIn(roomid, amount) {
    let info = this.findbyid(roomid);
    if (!info[0]) return false;
    if (info[0].isFree && info[0].amount >= amount) {
      info[0].isFree = false;
      return true;
    }
    return false;
  }
  highRoomsFree() {
    let arr = this.roomsList.sort((a, b) => b.level - a.level);
    const maxLevel = arr[0].level;
    let i = 0;
    const highLevel = [];
    while (arr[i].level === maxLevel) {
      highLevel.push(arr[i]);
      i++;
    }
    arr = highLevel
      .filter((room) => room.isFree)
      .sort((a, b) => b.amount - a.amount);
    return arr;
  }
  getAllFree() {
    return this.roomsList
      .filter((room) => room.isFree)
      .sort((b, a) => b.id - a.id);
  }
}
let mamila = new Hotel([
  new Room(1, 2, 4),
  new Room(2, 5, 7),
  new Room(4, 5, 6),
  new Room(3, 3, 4),
]);
console.log(mamila.checkIn(2, 5));
console.log(mamila);
console.log(mamila.getAllFree());
