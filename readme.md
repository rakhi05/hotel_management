# 🍽️ Grand Hotel Restaurant - Fine Dining Website

A modern, responsive website for a fine dining restaurant featuring menu browsing, table reservations, and online ordering capabilities.

## 📋 Project Overview

**Grand Hotel Restaurant** is a multi-page web application that showcases a premium dining establishment. The website provides a complete digital experience for customers including browsing the menu, making reservations, placing orders, and getting in touch with the restaurant.

### Key Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Menu** - Browse dishes across multiple categories with prices in Indian Rupees (₹)
- **Shopping Cart** - Add items to cart and manage quantities with localStorage persistence
- **Table Reservations** - Book tables with date, time, and party size selection
- **Contact System** - Multiple contact options with a contact form
- **User Notifications** - Toast notifications for user actions
- **Modern UI** - Elegant design with gold accents and smooth animations

---

## 🏗️ Project Structure

```
hotel-management/
├── index.html           # Home page with hero section and about
├── menu.html            # Menu page with all dishes and shopping cart
├── reservation.html     # Table reservation booking page
├── contact.html         # Contact information and contact form
├── style.css            # All styling and responsive design
├── script.js            # JavaScript functionality for all pages
└── readme.md            # Project documentation
```

---

## 📄 File Descriptions

### HTML Pages

#### `index.html` - Home Page
- **Hero Section**: Eye-catching welcome banner with call-to-action buttons
- **Navigation**: Quick links to Menu, Reservations, and Contact pages
- **About Section**: Restaurant history and story since 1985
- **Features Showcase**: Highlights like "Award Winning", "Organic Sweets", and "Live Music"
- **Footer**: Newsletter subscription and social media links

#### `menu.html` - Menu Page
- **Menu Categories**:
  - 🥗 Appetizers (Starters): Paneer Tikka, Veg Spring Rolls, Aloo Chaat, Hara Bhara Kebab
  - 🍛 Main Course: Paneer Butter Masala, Dal Makhani, Pulao, Chole Bhature
  - 🍮 Desserts: Gulab Jamun, Rasmalai, Kheer, Gajar ka Halwa
  - 🥤 Beverages: Masala Chai, Lassi, Fresh Lime Soda, Cold Coffee
- **Shopping Cart**: Add items, adjust quantities, and view total price
- **Cart Modal**: Displays selected items with quantity controls and checkout option
- **Price Range**: ₹49 - ₹189 per item

#### `reservation.html` - Reservations Page
- **Reservation Form** with fields:
  - Full Name (required)
  - Email Address (required)
  - Phone Number (required)
  - Reservation Date (required)
  - Preferred Time (required) - 5:00 PM to 9:00 PM slots
  - Party Size (required) - 1 to 8+ people options
  - Special Requests (optional) - dietary restrictions, occasions, seating preferences
- **Operating Hours Information**:
  - Monday - Thursday: 5:00 PM - 10:00 PM
  - Friday - Saturday: 5:00 PM - 11:00 PM
  - Sunday: 4:00 PM - 9:00 PM
- **Additional Info**: Large party guidelines, live jazz music schedule, dress code

#### `contact.html` - Contact Page
- **Contact Information**:
  - Address: 123 Grand Avenue, Downtown District, New York, NY 10001
  - Phone Numbers: Separate lines for Reservations, General Inquiries, Private Events
  - Email Addresses: info, reservations, and events contact emails
  - Operating Hours and Parking Information
- **Contact Form** with subject categories:
  - General Inquiry, Reservation Question, Private Event, Feedback, Complaint
- **Interactive Map Placeholder**: Location information section
- **Social Media Links**: Facebook, Instagram, Twitter, Yelp

### `style.css` - Styling (900+ lines)

**Color Scheme**:
- Primary Gold: `#d4af37` (premium accent color)
- Dark Background: `rgba(0, 0, 0, 0.95)` (navigation)
- Light Background: `#f8f9fa` (sections)
- Text: `#333` (primary), `#666` (secondary)

**Key Sections**:
- **Navigation (.navbar)**: Fixed top navigation with logo and menu links
- **Hero Section (.hero)**: Full-screen welcome banner with gradient background
- **Page Headers (.page-header)**: Consistent header styling for all pages
- **Menu Display (.menu-item, .menu-grid)**: Product cards with hover effects
- **Forms (.reservation-form, .contact-form)**: Input styling with focus states
- **Modal (.modal, .modal-content)**: Shopping cart and confirmation dialogs
- **Cart UI**: Quantity controls, item displays, total calculations
- **Footer**: Responsive footer with multiple sections
- **Responsive Design**: Media queries for screens up to 768px

**Typography**:
- Serif Font: 'Playfair Display' (headings, elegant text)
- Sans-serif Font: 'Inter' (body text, clean readability)

### `script.js` - Functionality (350+ lines)

**Cart Management**:
- `addToCart(itemName, price)` - Add items to cart or increase quantity
- `updateCartDisplay()` - Update cart count in navigation
- `toggleCart()` - Show/hide shopping cart modal
- `displayCartItems()` - Render cart items with quantity and price
- `changeQuantity(index, delta)` - Modify item quantities (+/-)
- `removeItem(index)` - Delete items from cart
- `clearCart()` - Empty entire cart
- `checkout()` - Process order and show confirmation

**Persistence**:
- Uses browser `localStorage` to save cart between sessions
- Cart data: `JSON.parse(localStorage.getItem('cart'))`

**User Interactions**:
- `showNotification(message)` - Toast notifications with auto-dismiss
  - Stacks vertically on right side
  - 3-second display duration
  - Smooth slide-in/out animations
- Modal management for cart and confirmations
- Click-outside modal closing functionality

**Reservations**:
- `initializeReservationForm()` - Form submission handler
- `showReservationConfirmation(details)` - Display confirmation modal
- Form validation for required fields
- Date and time formatting for display
- Automatic form reset after submission

**Events**:
- `DOMContentLoaded` - Initialize cart display and forms on page load
- Click handlers for all interactive elements

---

## 🎨 Design Features

### Color Palette
- **Gold (#d4af37)**: Premium accent throughout
- **Black/Dark Gray**: Elegant navigation and backgrounds
- **White**: Clean content areas
- **Light Gray (#f8f9fa)**: Section backgrounds

### Visual Effects
- **Hover Effects**: Buttons scale up, colors change
- **Smooth Transitions**: 0.3s ease animations on interactions
- **Gradient Backgrounds**: Hero section and page headers
- **Box Shadows**: Depth on cards and modals
- **Animations**: Fade-in, slide-in, and modal transitions

### Responsive Features
- Mobile-first approach
- CSS Grid and Flexbox layouts
- Adaptive navigation for smaller screens
- Optimized touch targets for mobile
- Flexible image placeholders

---

## 💻 Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Grid, Flexbox, Animations
- **JavaScript (Vanilla)**: No frameworks, pure DOM manipulation
- **LocalStorage API**: Client-side data persistence
- **Google Fonts**: Playfair Display & Inter typography

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or installation required

### Usage
1. Open `index.html` in a web browser
2. Navigate using the top menu bar:
   - **Home**: View restaurant information
   - **Menu**: Browse dishes and add to cart
   - **Reservations**: Book a table
   - **Contact**: Get in touch or view contact details
3. Click the 🛒 Cart button to view selected items (on Menu page)
4. All data persists using browser localStorage

### Features to Try
- Add items to cart and change quantities
- Submit a reservation to see confirmation
- Fill out the contact form
- Resize browser to see responsive design
- Check notifications when interacting with the site

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above (full layout)
- **Tablet**: 768px - 1199px (optimized columns)
- **Mobile**: Below 768px (single column, touch-optimized)

---

## 🛒 Menu Items & Pricing

### Appetizers (₹89-₹149)
- Paneer Tikka: ₹149
- Veg Spring Rolls: ₹99
- Aloo Chaat: ₹89
- Hara Bhara Kebab: ₹129

### Main Course (₹139-₹189)
- Paneer Butter Masala: ₹189
- Dal Makhani: ₹169
- Pulao: ₹139
- Chole Bhature: ₹179

### Desserts (₹59-₹89)
- Gulab Jamun: ₹69
- Rasmalai: ₹89
- Kheer: ₹59
- Gajar ka Halwa: ₹79

### Beverages (₹49-₹79)
- Masala Chai: ₹49
- Lassi: ₹69
- Fresh Lime Soda: ₹59
- Cold Coffee: ₹79

---

## 📞 Restaurant Information

**Address**: 123 Grand Avenue, Downtown District, New York, NY 10001

**Phone Numbers**:
- Reservations: (555) 123-4567
- General Inquiries: (555) 123-4568
- Private Events: (555) 123-4569

**Email**:
- General: info@grandhotelrestaurant.com
- Reservations: reservations@grandhotelrestaurant.com
- Events: events@grandhotelrestaurant.com

**Operating Hours**:
- Monday - Thursday: 5:00 PM - 10:00 PM
- Friday - Saturday: 5:00 PM - 11:00 PM
- Sunday: 4:00 PM - 9:00 PM

**Special Features**:
- Live Jazz Music: Every Friday & Saturday from 7:00 PM
- Dress Code: Smart casual to formal attire preferred
- Parking: Valet parking, public garage, and street parking available

---

## ⚙️ Local Storage

The application uses browser localStorage to persist the shopping cart:

```javascript
// Cart structure stored in localStorage
{
  cart: [
    {
      name: "Paneer Tikka",
      price: 149,
      quantity: 2
    }
  ]
}
```

Clear browser cache to reset cart data.

---

## 🔄 Future Enhancement Ideas

- Backend integration for order management
- Payment gateway integration
- Email confirmation system
- User accounts and order history
- Admin panel for menu management
- Review and rating system
- Table availability calendar
- Real-time reservation management
- Search functionality
- Filter options (vegetarian, spicy level, etc.)

---

## 📝 Notes

- This is a frontend-only implementation with no backend server
- Reservations and contact forms are not connected to a database
- All cart data is stored locally in the browser
- Notifications are browser-based (not sent via email currently)

---

## 👨‍💻 Author

Created as a fine dining restaurant website project.

---

## 📄 License

This project is open for educational and personal use.

---

**Last Updated**: November 15, 2025
