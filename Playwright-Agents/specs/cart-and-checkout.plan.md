# Sauce Demo Cart and Checkout Test Plan

## Application Overview

Seeded end-to-end test plan for the Sauce Demo cart and checkout flows. All scenarios assume a fresh authenticated inventory page established by tests/seed.spec.ts.

## Test Scenarios

### 1. Cart and inventory controls

**Seed:** `tests/seed.spec.ts`

#### 1.1. Add a single item and update the cart badge

**File:** `tests/cart/add-single-item.spec.ts`

**Steps:**
  1. Start from the Products page with an empty cart.
    - expect: The cart control is present and displays no item count.
  2. Select Add to cart for Sauce Labs Backpack.
    - expect: The button changes to Remove.
    - expect: The cart badge updates to 1.
  3. Open the cart.
    - expect: The Your Cart page contains Sauce Labs Backpack.
    - expect: The displayed quantity is 1.
    - expect: The item price is $29.99.

#### 1.2. Add multiple items and remove items from cart

**File:** `tests/cart/add-and-remove-items.spec.ts`

**Steps:**
  1. Start from an empty cart and add Sauce Labs Backpack and Sauce Labs Bike Light.
    - expect: The cart badge updates from empty to 1 and then to 2.
    - expect: Each inventory button changes from Add to cart to Remove.
  2. Open the cart.
    - expect: Both products appear with quantity 1.
    - expect: Both product names and prices are shown.
  3. Remove Sauce Labs Bike Light from the cart.
    - expect: The bike light is removed.
    - expect: The cart badge changes to 1.
    - expect: The backpack remains in the cart.
  4. Return to Products and remove the backpack using its Remove button.
    - expect: The backpack is removed from inventory and cart.
    - expect: The cart badge returns to empty.

#### 1.3. Verify empty cart behavior

**File:** `tests/cart/empty-cart.spec.ts`

**Steps:**
  1. Open the cart without adding any items.
    - expect: The Your Cart page loads.
    - expect: The item list contains no products.
    - expect: The cart badge remains empty.
    - expect: Continue Shopping and Checkout are available.
  2. Click Checkout on the empty cart.
    - expect: No product is incorrectly shown in the checkout flow.
    - expect: The application result for an empty cart is consistent and does not complete an order.
  3. Click Continue Shopping.
    - expect: The user returns to the Products/inventory page.

#### 1.4. Verify cart removal and continue shopping navigation

**File:** `tests/cart/cart-navigation.spec.ts`

**Steps:**
  1. Add one product, open the cart, and verify the product.
    - expect: The product and item controls are visible.
  2. Click Continue Shopping.
    - expect: The user returns to Products.
    - expect: The added product remains represented by a Remove button.
    - expect: The cart badge is preserved.
  3. Open the cart again.
    - expect: The previously added product is still present.

### 2. Checkout information validation

**Seed:** `tests/seed.spec.ts`

#### 2.1. Reject blank checkout information

**File:** `tests/checkout/checkout-required-fields.spec.ts`

**Steps:**
  1. Add one product, open the cart, and click Checkout.
    - expect: The Checkout: Your Information page and all three fields are visible.
  2. Leave every field blank and click Continue.
    - expect: The page remains on checkout-step-one.
    - expect: An alert reports that First Name is required.
    - expect: No overview navigation occurs.

#### 2.2. Reject missing last name

**File:** `tests/checkout/checkout-last-name-validation.spec.ts`

**Steps:**
  1. Open checkout with one product in the cart.
    - expect: The information form is visible.
  2. Enter a first name and postal code, leave last name blank, and click Continue.
    - expect: The page remains on the information step.
    - expect: An alert reports that Last Name is required.

#### 2.3. Reject missing postal code

**File:** `tests/checkout/checkout-postal-code-validation.spec.ts`

**Steps:**
  1. Open checkout with one product in the cart.
    - expect: The information form is visible.
  2. Enter first name and last name, leave postal code blank, and click Continue.
    - expect: The page remains on the information step.
    - expect: An alert reports that Postal Code is required.

#### 2.4. Cancel checkout information entry

**File:** `tests/checkout/checkout-cancel.spec.ts`

**Steps:**
  1. Add a product, open the cart, and continue to checkout information.
    - expect: The information form is visible.
  2. Enter partial information and click Cancel.
    - expect: The user returns to the cart page.
    - expect: The cart item remains in the cart.
    - expect: The cart badge is unchanged.

### 3. Checkout overview and completion

**Seed:** `tests/seed.spec.ts`

#### 3.1. Review totals and complete an order

**File:** `tests/checkout/checkout-complete-order.spec.ts`

**Steps:**
  1. Add Sauce Labs Backpack to the cart and open the cart.
    - expect: Your Cart lists the backpack once.
    - expect: The cart badge shows 1.
  2. Click Checkout and enter Test, User, and 12345.
    - expect: The three fields accept the supplied values.
  3. Click Continue.
    - expect: Checkout: Overview loads.
    - expect: Payment Information shows SauceCard #31337.
    - expect: Shipping Information shows Free Pony Express Delivery!.
    - expect: Item total is $29.99, tax is $2.40, and total is $32.39.
  4. Click Finish.
    - expect: Checkout: Complete! loads.
    - expect: The Pony Express image and Thank you for your order! heading are visible.
    - expect: The dispatch confirmation text is visible.
    - expect: The cart badge becomes empty.
    - expect: Back Home and Generate PDF order controls are available.
  5. Click Back Home.
    - expect: The user returns to Products.
    - expect: The cart remains empty.
    - expect: All products show Add to cart.

#### 3.2. Cancel from checkout overview

**File:** `tests/checkout/checkout-overview-cancel.spec.ts`

**Steps:**
  1. Complete checkout information for a cart containing one or more products.
    - expect: Checkout: Overview is visible with item and price totals.
  2. Click Cancel.
    - expect: The user returns to the inventory/Products page.
    - expect: Cart contents remain unchanged.
    - expect: The cart badge remains equal to the number of items in the cart.
