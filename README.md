# prettyCart

This is a React Native application written in TypeScript. The Home screen shows a list of products and a cart icon. When a user adds a product to the cart, the cart icon updates with the number of items in the cart. Clicking on the cart icon takes the user to the checkout screen where they can see a list of items in the cart and the total price of those items.

The Home screen consists of a FlatList that renders ProductItem components. The ProductItem component displays the product image, name, price, and a button to add the product to the cart. The add to cart button updates the state of the checkout items and the cart quantity and price.

The Home screen has two state variables, `cart` and `checkoutItems`. `cart` holds the list of products fetched from a fake REST API using the `fetch` function. The `checkoutItems` state variable holds the list of items added to the cart. When a user adds an item to the cart, the `handleAddToCart` function is called, which checks if the item already exists in the cart. If the item exists, the quantity is increased. If the item doesn't exist, it is added to the cart. The `handleRemoveItem` function is called when the user removes an item from the cart. It decreases the quantity of the item in the cart and updates the total price of the cart.

The Home screen also has three state variables for `loading`, `error`, `totalQuantity`, and `totalPrice`. `loading` is set to `true` initially and changes to `false` after the product list is fetched. `error` is set to `true` if there is an error fetching the product list. `totalQuantity` and `totalPrice` hold the total quantity and price of items in the cart.

The `navigateToCart` function is called when the user clicks on the cart icon. It navigates to the Checkout screen and passes the cart items, total quantity, and total price as props.
#Find the application screenshots below:

#Home screen
![Screenshot_1683609949](https://user-images.githubusercontent.com/132593114/237002335-9abe416b-0266-4c44-b676-7e3bfa333b8d.png)
#Image View
![Screenshot_1683609968](https://user-images.githubusercontent.com/132593114/237002569-00d1ccea-bd27-4132-aca6-e280694f3f10.png)
#Checkout screen
![Screenshot_1683609955](https://user-images.githubusercontent.com/132593114/237002489-46e13db6-4e8b-4367-96a2-9e7ae9f2299f.png)
