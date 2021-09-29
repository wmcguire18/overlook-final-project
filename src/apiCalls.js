export function getAllCustomers() {
    return fetch('http://localhost:3001/api/v1/customers')
    .then(response => response.json())
    .catch(error => console.warn(error))
}

export function getAllRooms() {
  return fetch('http://localhost:3001/api/v1/rooms')
  .then(response => response.json())
  .catch(error => console.warn(error))
}

export function getAllBookings() {
  return fetch('http://localhost:3001/api/v1/bookings')
  .then(response => response.json())
  .catch(error => console.warn(error))
}

export function addNewBooking(userID, date, roomNumber) {
  return fetch('http://localhost:3001/api/v1/bookings',
  {
    method: 'POST',
    body: JSON.stringify({ userID: userID, date: date, roomNumber: roomNumber }),
    headers: {
        "Content-Type":"application/json"
    },
  })
.then(response => response.json())
.catch(error => console.warn(error))
}
