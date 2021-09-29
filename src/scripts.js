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
import './images/gotham.png'

let newBookingBtn = document.querySelector('#newBookingBtn');
let newBookingContainer = document.querySelector('#newBookingContainer');
let cityPicture = document.querySelector("#cityPicture");
let newBooking = document.querySelector('#newBooking');
let bookingTracker = document.querySelector('#bookingTracker');
let userName = document.querySelector('#userName');
let greetingMessage = document.querySelector('#greetingMessage');
let logInError = document.querySelector('#logInError');
let mainLogin = document.querySelector('#mainLogin');
let customerInfoView = document.querySelector('#customerInfoView');
let usernameInput = document.querySelector('#usernameInput');
let passwordInput = document.querySelector('#passwordInput');
let submitLoginBtn = document.querySelector('#submitLoginBtn');
let fetchedCustomers = [];
let fetchedRooms = [];
let fetchedBookings = [];
let currentCustomer;

submitLoginBtn.addEventListener('click', userValidation);
newBookingBtn.addEventListener('click', displayNewBookings);


function hide(element){
  element.classList.add('hidden')
};

function show(element){
  element.classList.remove('hidden')
};

function getData(userID) {
  let fetchedData = Promise.all(
    [
      getAllCustomers(),
      getAllRooms(),
      getAllBookings(),
    ]
  )
  .then(data => parseData(data, userID))
  .catch(error => console.warn(error))
}

function parseData(data, userID) {
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
instantiateClasses(userID)
return
};

function instantiateClasses(userID) {
  let customers = fetchedCustomers.map((customer) => {
    return new Customer(customer.id, customer.name);
  });
  let rooms = fetchedRooms.map((room) => {
    return new Room(room.number, room.roomType, room.bedType, room.numBeds, room.costPerNight);
  });
  let bookings = fetchedBookings.map((booking) => {
    return new Booking(booking.id, booking.userID, booking.date, booking.roomNumber)
  })
  findCurrentCustomer(customers, userID);
  populatePastBookings(bookings, rooms)

};

function userValidation() {
  const usernameInput = document.getElementById('usernameInput');
  const passwordInput = document.getElementById('passwordInput');
  let userName = usernameInput.value;
  let userID = Number(userName.split('customer')[1]);
  const validateUser = () => {}
  if (userID < 50 && userID > 0 && passwordInput.value === 'overlook2021') {
    hide(mainLogin);
    hide(cityPicture);
    show(customerInfoView);
    getData(userID)
  } else if (userID > 50 || userID < 0 || !userID) {
    show(logInError);
    logInError.innerHTML = 'Invalid user name, please try again.'
  } else if (passwordInput.value != 'overlook2021') {
    show(logInError);
    logInError.innerHTML = 'Invalid password, please try again.'
  }
}

function findCurrentCustomer(customers, userID) {
  currentCustomer = customers.find(customer => customer.id === userID
  )
  userName.innerHTML = `${currentCustomer.name}`
};

function populatePastBookings(bookings, rooms) {
  bookingTracker.innerHTML = ``;
  let testBooking1 = {id: "5fwrgu4i7k55hl6sz", userID: 9, date: "2020/04/22", roomNumber: 15}
  let pastBookings = bookings.filter( booking => booking.date < "2020/29/09");
  let bookingsToPopulate = [pastBookings[0], pastBookings[1], pastBookings[2], pastBookings[3]];
  let totalExpenditures = 0;
  bookingsToPopulate.forEach( booking => {
    let matchingRoom = rooms.find( room => room.number === booking.roomNumber );
    totalExpenditures += matchingRoom.costPerNight;
    bookingTracker.innerHTML += `
      <article class="past-booking" id="pastBooking">
        <h4>
        <b>Room booked: ${booking.roomNumber}</b><br><br>
        Date booked: <i>${booking.date}</i><br>
        Nightly cost: <b>${matchingRoom.costPerNight}</b>
        </h4>
      </article>
    `;
    });
    }

  function displayNewBookings() {
    hide(bookingTracker);
    show(newBookingContainer);
  };
