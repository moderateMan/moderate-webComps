import { newSpecPage } from '@stencil/core/testing';
import { ModerateLifecycle } from '../moderate-lifecycle';

describe('moderate-lifecycle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModerateLifecycle],
      html: `<moderate-lifecycle></moderate-lifecycle>`,
    });
    expect(page.root).toEqualHtml(`
      <moderate-lifecycle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </moderate-lifecycle>
    `);
  });
});
