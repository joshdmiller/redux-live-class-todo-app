import React from 'react';
import { Provider } from 'react-redux';

import store from '../../store';
import TodoList from '../todo-list';

export default () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

