// Get the order button and other elements
const orderBtn = document.getElementById('orderBtn');
const formContainer = document.getElementById('formContainer');
const step1Form = document.getElementById('step1Form');
const step2Form = document.getElementById('step2Form');
const productTypeDropdown = document.getElementById('productType');
const productOptionsDropdown = document.getElementById('productOptionsDropdown');
const quantityTypeDropdown = document.getElementById('quantityType');
const quantityInput = document.getElementById('quantityInput');
const successMessage = document.getElementById('successMessage');
const aboutSection = document.getElementById('about');
const servicesSection = document.getElementById('services');
const contactSection = document.getElementById('contact');

let isFormOpen = false;

// Function to toggle the form visibility
function toggleForm() {
    if (isFormOpen) {
        formContainer.style.display = 'none';
        isFormOpen = false;
    } else {
        step1Form.style.display = 'block';
        step2Form.style.display = 'none';
        formContainer.style.display = 'block';
        isFormOpen = true;
    }
}

// Function to populate the product options based on the selected product type
function populateProductOptions(selectedProductType) {
    const products = productOptions[selectedProductType];
    let options = '';

    products.forEach((product) => {
        options += `<option value="${product}">${product}</option>`;
    });

    productOptionsDropdown.innerHTML = options;
}

// Function to handle the quantity type change event
function handleQuantityTypeChange() {
    const selectedQuantityType = quantityTypeDropdown.value;

    // Show or hide the quantity input based on the selected quantity type
    quantityInput.style.display = selectedQuantityType === 'pieces' ? 'block' : 'none';
}

orderBtn.addEventListener('click', () => {
    step1Form.reset();
    step2Form.reset();
    toggleForm();
});

step1Form.addEventListener('submit', (e) => {
    e.preventDefault();
    step1Form.style.display = 'none';
    step2Form.style.display = 'block';
});

step2Form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Get the form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const productTypeOptions = Array.from(document.querySelectorAll('#productType option:checked'));
    const productTypes = productTypeOptions.map((option) => option.value);
    const selectedQuantityType = quantityTypeDropdown.value;
    const quantity = selectedQuantityType === 'pieces' ? quantityInput.value : '';

    // Perform further processing or submit the form data
    console.log('Name:', name);
    console.log('Phone Number:', phone);
    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);
    console.log('Product Types:', productTypes);
    console.log('Quantity Type:', selectedQuantityType);
    console.log('Quantity:', quantity);

    // Reset the form and hide the form container
    step1Form.reset();
    step2Form.reset();
    toggleForm();
    successMessage.style.display = 'block';
});

// Define the product options
const productOptions = {
    'Fruits & Vegetables': [
        'Cabbages',
        'Mangoes',
        'Apples',
        'Grapes',
        'Strawberries',
        'Melons',
        'Avocados',
        'Blueberries',
        'Mandarins',
        'Potatoes',
        'Onions',
        'Tomatoes',
        'Lettuce',
        'Carrots',
        'Peppers',
        'Cucumbers',
        'Celery',
    ],
    Meat: [
        'Pork',
        'Beef',
        'Chicken',
        'Mutton',
        'Seafood',
        'Fresh Fish',
        'Lobster',
        'Mussels',
        'Oysters',
        'Scallops',
        'Clams',
    ],
    Pantry: ['Rice', 'Pasta', 'Cooking Oil', 'Ginger', 'Pepper'],
};

// Add change event listener to the product type dropdown
productTypeDropdown.addEventListener('change', () => {
    const selectedProductType = productTypeDropdown.value;

    // Populate the product options dropdown based on the selected product type
    populateProductOptions(selectedProductType);
});

// Add change event listener to the quantity type dropdown
quantityTypeDropdown.addEventListener('change', handleQuantityTypeChange);

const aboutLink = document.getElementById('aboutLink');
const servicesLink = document.getElementById('servicesLink');
const homeLink = document.getElementById('home');

aboutLink.addEventListener('click', () => {
    aboutSection.classList.toggle('hidden');
});

servicesLink.addEventListener('click', () => {
    servicesSection.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.getElementById('contactLink');

    contactLink.addEventListener('click', () => {
        contactSection.classList.toggle('hidden');
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});

homeLink.addEventListener('click', () => {
    aboutSection.classList.add('hidden');
    servicesSection.classList.add('hidden');
    contactSection.classList.add('hidden');


});


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const productList = document.querySelectorAll('.products .grid-item');

searchButton.addEventListener('click', () => {
    const searchValue = searchInput.value.toLowerCase();

    productList.forEach((product) => {
        const productName = product.querySelector('h3').innerText.toLowerCase();

        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

