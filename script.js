document.getElementById('booking-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your appointment has been booked.');
  this.reset();
});

document.getElementById('query-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks for your query! We will contact you soon.');
  this.reset();
});
