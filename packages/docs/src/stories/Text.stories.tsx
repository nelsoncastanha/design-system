import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@ignite-ui/react'
import type { TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt similique expedita harum officiis dolore sequi exercitationem. Ipsa fugiat rerum, ex consequuntur error molestiae nesciunt impedit, aspernatur ut aliquam esse hic?',
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {

}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}