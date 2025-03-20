import type { Meta, StoryObj } from '@storybook/react';

import { Icons } from './Icons';
const meta = {
  title: 'Pages',
  component: Icons,
  tags: ['!autodocs'],
  parameters: {
    controls: {
      disable: true,
    },
    actions: {
      disable: true,
    },

  },

} satisfies Meta<typeof Icons>;

export default meta;
type Story = StoryObj<typeof Icons>;
export const Primary: Story = {
  name: 'Icons',

};
