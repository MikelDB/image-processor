import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ImageHolder } from '../../components';

export default {
  title: 'Molecules/ImageHolder',
  component: ImageHolder,
} as Meta;

const Template: Story = () => <ImageHolder image='' onFileDrop={(string) => console.log(string)}/>;

export const Primary = Template.bind({});

