import { Locator, Page } from '@playwright/test';

export function productRow(page: Page, rowSelector: string, productName: string): Locator {
  return page.locator(rowSelector).filter({
    has: page.getByRole('button', {
      name: `View details for ${productName}`,
      exact: true,
    }),
  });
}
