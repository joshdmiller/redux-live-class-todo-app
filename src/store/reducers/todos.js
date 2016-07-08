export default ( todos = [], { type, ...payload } ) => {
  switch ( type ) {
    case 'ADD_TODO_ITEM':
      return [ ...todos, payload ];
      break;
    case 'REMOVE_TODO_ITEM':
      return todos.filter( t => t !== payload.todo );
    break;
  }

  return todos;
};

