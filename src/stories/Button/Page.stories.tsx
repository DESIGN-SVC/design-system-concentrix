import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../../../packages/button/src";
import { Gear } from "../../../packages/icons/src";
const meta = {
    title: "Components/Button",
    component: Button.Root,
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Button.Root>;

export default meta;
export type Story = StoryObj<typeof Button.Root>;

export const PrimaryWithIconLeft: Story = {
    name: "Primary with icon left",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "primary",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Icon>
                <Gear />
            </Button.Icon>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const PrimaryWithIconRight: Story = {
    name: "Primary with icon right",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "primary",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
            <Button.Icon>
                <Gear />
            </Button.Icon>
        </Button.Root>
    ),
};

export const PrimaryWithoutLabel: Story = {
    name: "Primary without label",
    args: {
        disabled: false,
        appearance: "primary",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
        width: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Icon>
                <Gear />
            </Button.Icon>
        </Button.Root>
    ),
};

export const PrimarySmall: Story = {
    name: "Primary / Small",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "primary",
        size: "small",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const PrimaryMedium: Story = {
    name: "Primary / Medium",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "primary",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const PrimaryLarge: Story = {
    name: "Primary / Large",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "primary",
        size: "large",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const SecondaryWithIconLeft: Story = {
    name: "Secondary with icon left",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "secondary",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Icon>
                <Gear />
            </Button.Icon>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const SecondaryWithIconRight: Story = {
    name: "Secondary with icon right",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "secondary",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
            <Button.Icon>
                <Gear />
            </Button.Icon>
        </Button.Root>
    ),
};

export const SecondaryWithoutLabel: Story = {
    name: "Secondary without label",
    args: {
        disabled: false,
        appearance: "secondary",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
        width: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Icon>
                <Gear />
            </Button.Icon>
        </Button.Root>
    ),
};

export const SecondarySmall: Story = {
    name: "Secondary / Small",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "secondary",
        size: "small",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const SecondaryMedium: Story = {
    name: "Secondary / Medium",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "secondary",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const SecondaryLarge: Story = {
    name: "Secondary / Large",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "secondary",
        size: "large",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const GhostWithIconLeft: Story = {
    name: "Ghost with icon left",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "ghost",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Icon>
                <Gear />
            </Button.Icon>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const GhostWithIconRight: Story = {
    name: "Ghost with icon right",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "ghost",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
            <Button.Icon>
                <Gear />
            </Button.Icon>
        </Button.Root>
    ),
};

export const GhostWithoutLabel: Story = {
    name: "Ghost without label",
    args: {
        disabled: false,
        appearance: "ghost",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
        width: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Icon>
                <Gear />
            </Button.Icon>
        </Button.Root>
    ),
};

export const GhostSmall: Story = {
    name: "Ghost / Small",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "ghost",
        size: "small",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const GhostMedium: Story = {
    name: "Ghost / Medium",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "ghost",
        size: "medium",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};

export const GhostLarge: Story = {
    name: "Ghost / Large",
    args: {
        disabled: false,
        title: "Label",
        width: 96,
        appearance: "ghost",
        size: "large",
    },
    argTypes: {
        appearance: {
            table: {
                disable: true,
            },
        },
        size: {
            table: {
                disable: true,
            },
        },
        disabled: {
            table: {
                disable: true,
            },
        },
    },
    render: (args) => (
        <Button.Root {...args}>
            <Button.Text>{args.title}</Button.Text>
        </Button.Root>
    ),
};