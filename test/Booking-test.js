import chai from 'chai';
const expect = chai.expect;
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
    assert(Booking).to.be.a('function');
  });

  it('should instantiate testBooking as a new Booking', () => {
    assert(testBooking).to.be.an.instanceof(Booking);
  });

  it('should have an ID, userID, date, and roomNumber', () => {
    assert(testBooking.id).to.equal('22847');
    assert(testBooking.userID).to.equal(1);
    assert(testBooking.date).to.equal('01/11/20');
    assert(testBooking.roomNumber).to.equal(20);
  })
});
