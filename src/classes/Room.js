class Room {
  constructor(number, roomType, bedType, numBeds, costPerNight) {
    this.number = number;
    this.roomType = roomType;
    this.costPerNight = costPerNight;
    this.bidet = true || false;
    this.bedType = bedType;
    this.numBeds = numBeds;
    this.booked = true || false;
  }
}

export default Room;
