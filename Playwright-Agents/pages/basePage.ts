import { Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get heading(): Locator {
    return this.page.locator('[data-test="title"]');
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }
}
