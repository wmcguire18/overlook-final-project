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
    assert(Customer).to.be.a('function');
  });

  it('should instantiate testUser  as a new Customer', () => {
    assert(testUser).to.be.an.instanceof(Customer);
  });

  it('should have a name and an ID', () => {
    assert(testUser.name).to.equal('testUser');
    assert(testUser.id).to.equal(1);
  })

  it('should have customer bookings', () => {
    assert(testUser.bookings[0]).to.equal(testBooking);
  })
});
