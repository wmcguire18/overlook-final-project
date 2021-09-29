// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import { getAllCustomers, getAllRooms, getAllBookings, addNewBooking } from './apiCalls';
import Customer from './classes/Customer.js';
import Room from './classes/Room.js';
import Booking from './classes/Booking.js';
import domUpdates from './domUpdates';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

let fetchedCustomers = [];
let fetchedRooms = [];
let fetchedBookings = [];

window.addEventListener('load', getData);

function getData() {
  let fetchedData = Promise.all(
    [
      getAllCustomers(),
      getAllRooms(),
      getAllBookings(),
    ]
  )
  .then( data => parseData(data))
  .catch(error => console.warn(error))
}

function parseData(data) {
  let customerData = data[0].customers;
  customerData.forEach(customer => {
    fetchedCustomers.push(customer);
  })
  let roomData = data[1].rooms;
  roomData.forEach(room => {
    fetchedRooms.push(room);
  })
  let bookingData = data[2].bookings;
  bookingData.forEach(booking => {
    fetchedBookings.push(booking);
  })
console.log(data);
return
};
