// Initial Inventory Array
let inventory = [
    { name: 'Shampoo', quantity: 3, price: 200, category: 'Personal Care' },
    { name: 'Notebook', quantity: 10, price: 50, category: 'Stationery' },
    { name: 'Toothpaste', quantity: 2, price: 100, category: 'Personal Care' }
  ];
  
  // 1. Function to Add a New Product
  function addProduct(name, quantity, price, category) {
    inventory.push({ name, quantity, price, category, grade: "" });
    console.log(`${name} has been added to the inventory.`);
  }
  
  // 2. Function to Update Quantity
  function updateProductQuantity(productName, newQuantity) {
    const product = inventory.find(item => item.name === productName);
    if (product) {
      product.quantity = newQuantity;
      console.log(`${productName}'s quantity has been updated to ${newQuantity}.`);
    } else {
      console.log(`${productName} not found in the inventory.`);
    }
  }
  
  // 3. Function to Show Low Stock Items
  function showLowStockItems() {
    return inventory.filter(product => product.quantity < 5);
  }
  
  // 4. Function to Calculate Total Inventory Value
  function calculateTotalValue() {
    return inventory.reduce((total, product) => total + (product.quantity * product.price), 0);
  }
  
  // 5. Function to Delete a Product
  function deleteProduct(productName) {
    inventory = inventory.filter(product => product.name !== productName);
    console.log(`${productName} has been deleted from the inventory.`);
  }
  
  // 6. Use Ternary Operator to Check Stock Status
  inventory.forEach(product =>
    console.log(`${product.name} is ${product.quantity > 0 ? 'in stock' : 'out of stock'}`)
  );
  
  // Example Usage:
  addProduct('Pen', 15, 20, 'Stationery');  // Adding a new product
  updateProductQuantity('Shampoo', 5);      // Updating quantity of an existing product
  console.log('Low Stock Items:', showLowStockItems());  // Display low stock items
  console.log('Total Inventory Value: Rs.', calculateTotalValue());  // Calculate total value
  deleteProduct('Notebook');                // Deleting a product
  console.log('Updated Inventory:', inventory);  // Displaying the updated inventory
  