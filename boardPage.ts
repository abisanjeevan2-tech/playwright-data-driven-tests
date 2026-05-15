import { Page, expect } from '@playwright/test';

export class BoardPage {
  constructor(private page: Page) {}

  async navigateToProject(project: string) {
    await this.page.getByText(project, { exact: true }).click();
  }

  async verifyTask(column: string, task: string, tags: string[]) {
    const columnSection = this.page.locator(`text=${column}`).locator('..');

    const card = columnSection.locator(`text=${task}`);
    await expect(card).toBeVisible();

    for (const tag of tags) {
      await expect(card.locator(`text=${tag}`)).toBeVisible();
    }
  }
}
