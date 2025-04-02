import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from '../../../packages/switch/src';
const meta = {
    title: 'Components/Switch',
    component: Switch,
    argTypes: {
        ref: {
            control: false,
            table: {
                disable: true
            }
        }
    },
    parameters: {
        layout: 'fullscreen',
    },

} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;
export const Inactive: Story = {
    name: 'Inactive',
    args: {
        checked: false,
    },
};

export const Active: Story = {
    name: 'Active',
    args: {
        checked: true,
    },
};

export const Disable: Story = {
    name: 'Disable',
    args: {
        disabled:true
    },
};
export const ActiveDisabled: Story = {
    name: 'Active-Disable',
    args: {
        disabled:true,
        checked: true,
    },
};