import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@ignite-ui/react'
import type { ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  }
}