import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@ignite-ui/react'
import type { AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/nelsoncastanha.png',
    alt: 'Nelson Castanha',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      }
    }
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {

}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}