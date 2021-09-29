const domUpdates = {

  populateBookings(bookings, rooms) {
    totalExpenditures.innerHTML = ``;
    pastBookingContainer.innerHTML = ``;
    futureBookingContainer.innerHTML = ``;
    let testBooking1 = {id: "5fwrgu4i7k55hl6sz", userID: 9, date: "2020/04/22", roomNumber: 15}
    let pastBookings = bookings.filter(booking => booking.date < "2020/29/09");
    let futureBookings = bookings.filter(booking => booking.date > "2020/29/09");
    let bookingsToPopulate = [pastBookings[0], pastBookings[1], pastBookings[2], pastBookings[3]];
    let futureBookingsToPopulate = [futureBookings[0], futureBookings[1], futureBookings[2], futureBookings[3]];
    let totalMoneySpent = 0;
    bookingsToPopulate.forEach( booking => {
      let matchingRoom = rooms.find( room => room.number === booking.roomNumber );
      totalMoneySpent += matchingRoom.costPerNight;
      pastBookingContainer.innerHTML += `
        <article class="past-booking" id="pastBooking">
        <h2> Previous Stay: </h2>
          <h4>
          <b>Room booked: ${booking.roomNumber}</b><br><br>
          Date booked: <i>${booking.date}</i><br>
          Nightly cost: <b>${matchingRoom.costPerNight}</b>
          </h4>
        </article>
      `;
      totalExpenditures.innerHTML += `
        <article class="total-expend" id="totalExpend">
        <h2> Total Expenditure: ${totalMoneySpent}</h2>
        </article>
        `;
        });
        futureBookingsToPopulate.forEach( booking => {
          let matchingRoom = rooms.find( room => room.number === booking.roomNumber );
          totalMoneySpent += matchingRoom.costPerNight;
        futureBookingContainer.innerHTML += `
          <article class="future-booking" id="futureBooking">
          <h2> Upcoming Stay: </h2>
            <h4>
            <b>Room booked: ${booking.roomNumber}</b><br><br>
            Date booked: <i>${booking.date}</i><br>
            Nightly cost: <b>${matchingRoom.costPerNight}</b>
            </h4>
          </article>
        `;
      });
      }

};
export default domUpdates;
