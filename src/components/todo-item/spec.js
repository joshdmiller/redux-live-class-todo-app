import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import TodoItem from './';

test( 'TodoItem', t => {
  t.plan( 1 );

  const wrapper = shallow( <TodoItem /> );
  const expected = true;
  const actual = wrapper.is( 'span' );

  t.ok( actual === expected, 'renders a span' );
});

