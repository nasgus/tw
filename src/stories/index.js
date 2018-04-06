import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import List from '../component/list'
import Popup from '../component/popup'
import TableRow from '../component/tableRow'

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('List', module).add('to Storybook', () => <List/>);
storiesOf('Popup', module).add('to Storybook', () => <Popup/>);
storiesOf('TableRow', module).add('to Storybook', () => <TableRow/>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
