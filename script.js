let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(itemName, price) {
    const existingItem = cart.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    showNotification(`${itemName} added to cart!`);
}

// Function to update cart display in nav
function updateCartDisplay() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

// Function to toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        if (modal.style.display === 'block') {
            displayCartItems();
        }
    }
}

// Function to display cart items in modal
function displayCartItems() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    if (cartItems && cartTotal) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p>Your cart is empty</p>';
            cartTotal.textContent = '0.00';
        } else {
            cartItems.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <span class="item-name">${item.name}</span>
                        <div class="quantity-section">
                            <div class="quantity-controls">
                                <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                                <span class="qty">${item.quantity}</span>
                                <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                            </div>
                            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                        </div>
                        <span class="item-price">₹${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                </div>
            `).join('');
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            cartTotal.textContent = total.toFixed(2);
        }
    }
}

// Function to clear cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    displayCartItems();
    showNotification('Cart cleared!');
}

// Function to change quantity
function changeQuantity(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        displayCartItems();
        if (cart.length === 0) {
            toggleCart(); // Close modal if empty
        }
    }
}

// Function to remove entire item
function removeItem(index) {
    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        displayCartItems();
        if (cart.length === 0) {
            toggleCart(); // Close modal if empty
        }
        showNotification('Item removed from cart!');
    }
}

// Function for checkout (static alert)
function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Thank you for your order! Total: ₹${total.toFixed(2)}. Your order has been placed.`);
    clearCart();
    toggleCart();
}

// Utility function for notifications
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    const existingNotifications = document.querySelectorAll('.notification').length;
    const topPosition = 120 + existingNotifications * 80; // Stack vertically with 80px spacing
    notification.style.cssText = `
        position: fixed;
        top: ${topPosition}px;
        right: 20px;
        background: #d4af37;
        color: black;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 3000;
        font-weight: 600;
        animation: slideIn 0.3s ease-out;
        max-width: 300px;
        word-wrap: break-word;
        border: 1px solid rgba(212, 175, 55, 0.3);
    `;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Add slide-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out reverse';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }, 300);
    }, 3000);
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('cartModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Initialize cart display on load
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    initializeReservationForm();
});

// Function to handle reservation form submission
function initializeReservationForm() {
    const reservationForm = document.querySelector('.reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('resName').value;
            const email = document.getElementById('resEmail').value;
            const phone = document.getElementById('resPhone').value;
            const date = document.getElementById('resDate').value;
            const time = document.getElementById('resTime').value;
            const party = document.getElementById('resParty').value;
            const notes = document.getElementById('resNotes').value;

            // Validate required fields
            if (!name || !email || !phone || !date || !time || !party) {
                showNotification('Please fill in all required fields.');
                return;
            }

            // Format date for display
            const formattedDate = new Date(date).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            // Format time for display
            const timeOptions = {
                '17:00': '5:00 PM',
                '17:30': '5:30 PM',
                '18:00': '6:00 PM',
                '18:30': '6:30 PM',
                '19:00': '7:00 PM',
                '19:30': '7:30 PM',
                '20:00': '8:00 PM',
                '20:30': '8:30 PM',
                '21:00': '9:00 PM'
            };
            const formattedTime = timeOptions[time] || time;

            // Show confirmation modal
            showReservationConfirmation({
                name,
                email,
                phone,
                date: formattedDate,
                time: formattedTime,
                party,
                notes
            });

            // Clear form
            reservationForm.reset();
        });
    }
}

// Function to show reservation confirmation modal
function showReservationConfirmation(details) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 4000;
        animation: fadeIn 0.3s ease-out;
    `;

    modal.innerHTML = `
        <div style="
            background: white;
            padding: 2rem;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            animation: modalSlideIn 0.3s ease-out;
        ">
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <h2 style="color: #d4af37; margin-bottom: 0.5rem; font-family: 'Playfair Display', serif;">🎉 Reservation Confirmed!</h2>
                <p style="color: #666; margin: 0;">Your table has been reserved successfully</p>
            </div>

            <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px; margin-bottom: 1.5rem;">
                <h3 style="margin-top: 0; color: #333; font-family: 'Playfair Display', serif;">Reservation Details</h3>
                <div style="display: grid; gap: 0.5rem; color: #555;">
                    <p><strong>Name:</strong> ${details.name}</p>
                    <p><strong>Email:</strong> ${details.email}</p>
                    <p><strong>Phone:</strong> ${details.phone}</p>
                    <p><strong>Date:</strong> ${details.date}</p>
                    <p><strong>Time:</strong> ${details.time}</p>
                    <p><strong>Party Size:</strong> ${details.party} ${details.party === '1' ? 'Person' : 'People'}</p>
                    ${details.notes ? `<p><strong>Special Requests:</strong> ${details.notes}</p>` : ''}
                </div>
            </div>

            <div style="background: #d4edda; border: 1px solid #c3e6cb; padding: 1rem; border-radius: 10px; margin-bottom: 1.5rem;">
                <p style="margin: 0; color: #155724; text-align: center; font-weight: 600;">
                    ✅ You will receive a confirmation email shortly with all the details.
                </p>
            </div>

            <div style="text-align: center;">
                <button onclick="this.closest('.modal-overlay').remove()" style="
                    background: #d4af37;
                    color: black;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                " onmouseover="this.style.background='#b8941f'" onmouseout="this.style.background='#d4af37'">
                    Close
                </button>
            </div>
        </div>
    `;

    // Add modal to body
    modal.className = 'modal-overlay';
    document.body.appendChild(modal);

    // Add styles for animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes modalSlideIn {
            from { transform: translateY(-50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
            if (document.head.contains(style)) {
                document.head.removeChild(style);
            }
        }
    });
}
