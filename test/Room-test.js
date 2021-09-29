import chai from 'chai';
const assert = chai.assert;
import Customer from '../src/classes/Customer.js';
import Room from '../src/classes/Room.js';
import Booking from '../src/classes/Booking.js';

let testUser;
let testRoom;
let testBooking;

describe('Test data', function() {
  beforeEach(() => {
    testUser = new Customer(1, 'Leatha Ullrich');
    testRoom = new Room(20, 'residential suite', 'queen', 1, 343.93);
    testBooking = new Booking(22847, 1, '01/11/20', 20);

    testUser.bookings.push(testBooking);
  });

  it('should be a function', () => {
    assert(Room).to.be.a('function');
  });

  it('should instantiate testUser  as a new Customer', () => {
    assert(testRoom).to.be.an.instanceof(Room);
  });

  it('should have a number, roomType, bedType, numBeds and cost', () => {
    assert(testRoom.number).to.equal(20);
    assert(testUser.roomType).to.equal('residential suite');
    assert(testRoom.bedType).to.equal('queen');
    assert(testRoom.numBeds).to.equal(1);
    assert(testRoom.costPerNight).to.equal(343.93);
  })

  it('should have customer bookings', () => {
    assert(testUser.bookings[0]).to.equal(testBooking);
  })
});
