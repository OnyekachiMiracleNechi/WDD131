document.addEventListener('DOMContentLoaded', function () {
    // Populate product names in the select dropdown
    const products = [
        { id: 'product1', name: 'Smartphone X100' },
        { id: 'product2', name: 'Laptop Pro 2024' },
        { id: 'product3', name: 'Wireless Headphones' },
        { id: 'product4', name: 'Smartwatch Series 5' },
        { id: 'product5', name: 'Tablet Mini' },
        { id: 'product6', name: 'Bluetooth Speaker' },
        { id: 'product7', name: '4K Ultra HD TV' },
        { id: 'product8', name: 'Gaming Console' },
        { id: 'product9', name: 'Electric Toothbrush' },
        { id: 'product10', name: 'Air Purifier' }
    ];

    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Form submission handling
    const reviewForm = document.getElementById('reviewForm');
    reviewForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Store the review in local storage
        let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
        reviews.push({ 
            productName: productSelect.value, 
            rating: document.querySelector('input[name="rating"]:checked').value,
            installationDate: document.getElementById('installationDate').value,
            features: Array.from(document.querySelectorAll('input[name="features"]:checked')).map(el => el.value),
            writtenReview: document.getElementById('writtenReview').value,
            userName: document.getElementById('userName').value
        });

        localStorage.setItem('reviews', JSON.stringify(reviews));

        // Redirect to review confirmation page
        window.location.href = 'review.html';
    });
});

// Code for review.html to display the review count
window.onload = function () {
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    document.getElementById('reviewCount').textContent = reviews.length;
};

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;
