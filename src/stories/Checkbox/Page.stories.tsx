import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../../../packages/checkbox/src";
const meta = {
    title: "Components/Checkbox",
    component: Checkbox.Root,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Checkbox.Root>;

export default meta;
type Story = StoryObj<typeof Checkbox.Input>;

export const Default: Story = {
    args: {
        title: "Default",
    },
    render: (args) => (
        <Checkbox.Root>
            <Checkbox.Input id={args.title} />
            <Checkbox.Label htmlFor={args.title}>{args.title}</Checkbox.Label>
        </Checkbox.Root>
    ),
};

export const Intermediate: Story = {
    args: {
        title: "Intermediate",
        checked: true,
        state: "intermediate",
    },
    argTypes: {
        state: {
            control: false,
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Checkbox.Root>
            <Checkbox.Input
                id={args.title}
                checked={args.checked}
                state={args.state}
            />
            <Checkbox.Label htmlFor={args.title}>{args.title}</Checkbox.Label>
        </Checkbox.Root>
    ),
};

export const Selected: Story = {
    args: {
        title: "Selected",
        checked: true,
    },
    render: (args) => (
        <Checkbox.Root>
            <Checkbox.Input id={args.title} checked={args.checked} />
            <Checkbox.Label htmlFor={args.title}>{args.title}</Checkbox.Label>
        </Checkbox.Root>
    ),
};
export const Disabled: Story = {
    args: {
        title: "Disabled",
        checked: false,
        disabled: true,
    },
    render: (args) => (
        <Checkbox.Root>
            <Checkbox.Input
                id={args.title}
                checked={args.checked}
                disabled={args.disabled}
            />
            <Checkbox.Label htmlFor={args.title}>{args.title}</Checkbox.Label>
        </Checkbox.Root>
    ),
};
