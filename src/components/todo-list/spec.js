import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import { TodoList } from './';

test( 'TodoList', t => {
  t.plan( 1 );

  const wrapper = shallow( <TodoList /> );
  const expected = true;
  const actual = wrapper.is( 'div' );

  t.ok( actual === expected, 'renders a div' );
});

