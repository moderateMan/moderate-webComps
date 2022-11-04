import { newE2EPage } from '@stencil/core/testing';

describe('moderate-lifecycle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<moderate-lifecycle></moderate-lifecycle>');

    const element = await page.find('moderate-lifecycle');
    expect(element).toHaveClass('hydrated');
  });
});
