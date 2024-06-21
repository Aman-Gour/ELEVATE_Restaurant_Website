// Reservation Form 
document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    
    const confirmationMessage = `Thank you, ${name}. Your reservation for ${guests} guests on ${date} at ${time} has been confirmed. A confirmation email has been sent to ${email}.`;
    
    document.getElementById('confirmation-message').textContent = confirmationMessage;
});
