import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';

import TodoItems from './';

test( 'TodoItems', t => {
  t.plan( 2 );

  let expected, actual;
  let items = [
    { name: '1' },
    { name: '2' },
    { name: '3' },
  ];

  const wrapper = shallow( <TodoItems items={items} /> );
  expected = true;
  actual = wrapper.is( 'ul' );

  t.ok( actual === expected, 'renders a ul' );

  expected = 3;
  actual = wrapper.find( 'ul > li' ).length;
  t.equal( actual, expected, 'renders an li for each todo item' );
});

