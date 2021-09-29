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
    assert.isFunction(Booking);
  });

  it('should instantiate testBooking as a new Booking', () => {
    assert.instanceOf(testBooking, Booking);
  });

  it('should have an ID, userID, date, and roomNumber', () => {
    assert.equal(testBooking.id, '22847');
    assert.equal(testBooking.userID, 1);
    assert.equal(testBooking.date, '01/11/20');
    assert.equal(testBooking.roomNumber, 20);
  })
});
