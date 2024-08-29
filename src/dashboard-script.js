// Handle Login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'root' && password === 'root') {
        // Hide login and show dashboard
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('dashboardContainer').style.display = 'block';

        displayOrders(); // Call function to display orders
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

// Function to Display Orders
function displayOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const ordersContainer = document.getElementById('orders');
    ordersContainer.innerHTML = ''; // Clear existing orders

    orders.forEach((order, index) => {
        const orderDiv = document.createElement('div');
        orderDiv.classList.add('order');
        orderDiv.innerHTML = `
            <p><strong>Name:</strong> ${order.name}</p>
            <p><strong>Address:</strong> ${order.address}</p>
            <p><strong>Number:</strong> ${order.number}</p>
            <p><strong>Quantity:</strong> ${order.quantity}</p>
            <p><strong>Size:</strong> ${order.size}</p>
            <p><strong>Color:</strong> <span style="background-color: ${order.color}; padding: 2px 10px; border-radius: 3px;"></span></p>
            <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
            <button onclick="acceptOrder(${index})">Accept</button>
            <button onclick="cancelOrder(${index})">Cancel</button>
        `;
        ordersContainer.appendChild(orderDiv);
    });
}

// Accept Order
function acceptOrder(index) {
    updateOrderList(index);
    alert('Order Accepted!');
}

// Cancel Order
function cancelOrder(index) {
    updateOrderList(index);
    alert('Order Canceled!');
}

// Update Order List (Common Function)
function updateOrderList(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1); // Remove the selected order
    localStorage.setItem('orders', JSON.stringify(orders));
    displayOrders(); // Refresh orders list
}
