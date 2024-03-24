// Sample product data with image URLs (replace with your actual product data)
const products = [
    { name: 'Product 1', price: '$19.99', image: 'https://example.com/product1.jpg' },
    { name: 'Product 2', price: '$29.99', image: 'https://example.com/product2.jpg' },
    { name: 'Product 3', price: '$14.99', image: 'https://example.com/product3.jpg' },
    // Add more products as needed
];

// Function to generate product cards
function generateProductCards(products) {
    const productList = $('#product-list');
    productList.empty(); // Clear existing content

    products.forEach(product => {
        const card = `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">Add to Cart</a>
                    </div>
                </div>
            </div>
        `;
        productList.append(card);
    });
}

// Generate product cards when the page loads
$(document).ready(() => {
    generateProductCards(products);
});
