import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SmallSizeDecorator } from 'utilities';

import { ImageHolder } from 'components';

export default {
  title: 'Molecules/ImageHolder',
  component: ImageHolder,
  decorators: [SmallSizeDecorator],
} as Meta;

const Template: Story = () => <ImageHolder image="" />;

export const Primary = Template.bind({});
