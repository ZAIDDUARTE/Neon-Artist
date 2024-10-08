document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const number = document.getElementById('number').value;
    const quantity = document.getElementById('quantity').value;
    const size = document.getElementById('size').value;
    const color = document.getElementById('color').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Create order object
    const order = { name, address, quantity, size, color, paymentMethod };

    // Retrieve existing orders
    const orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Add new order
    orders.push(order);

    // Save updated orders to local storage
    localStorage.setItem('orders', JSON.stringify(orders));

    // Redirect to thank you page
    window.location.href = 'thank-you.html';
});
