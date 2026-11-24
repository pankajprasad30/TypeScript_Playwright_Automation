import { Page } from '@playwright/test';
import { CartPage } from './cartPage';
import { CheckoutCompletePage } from './checkoutCompletePage';
import { CheckoutOverviewPage } from './checkoutOverviewPage';
import { CheckoutPage } from './checkoutPage';
import { InventoryPage } from './inventoryPage';
import { LoginPage } from './loginPage';

export class PageManager {
  readonly loginPage: LoginPage;
  readonly inventoryPage: InventoryPage;
  readonly cartPage: CartPage;
  readonly checkoutPage: CheckoutPage;
  readonly checkoutOverviewPage: CheckoutOverviewPage;
  readonly checkoutCompletePage: CheckoutCompletePage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutPage = new CheckoutPage(page);
    this.checkoutOverviewPage = new CheckoutOverviewPage(page);
    this.checkoutCompletePage = new CheckoutCompletePage(page);
  }
}
