// Login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'root' && password === 'root') {
        // Hide login and show dashboard
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('dashboardContainer').style.display = 'block';

        // Retrieve orders from local storage
        const orders = JSON.parse(localStorage.getItem('orders')) || [];

        // Display orders
        const ordersContainer = document.getElementById('orders');
        orders.forEach((order, index) => {
            const orderDiv = document.createElement('div');
            orderDiv.classList.add('order');
            orderDiv.innerHTML = `
                <p><strong>Name:</strong> ${order.name}</p>
                <p><strong>Address:</strong> ${order.address}</p>
                <p><strong>Quantity:</strong> ${order.quantity}</p>
                <button onclick="acceptOrder(${index})">Accept</button>
                <button onclick="cancelOrder(${index})">Cancel</button>
            `;
            ordersContainer.appendChild(orderDiv);
        });
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
});

// Accept or Cancel Order
function acceptOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    location.reload(); // Reload to update dashboard
}

function cancelOrder(index) {
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    location.reload(); // Reload to update dashboard
}
