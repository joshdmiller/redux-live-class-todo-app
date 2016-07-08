import React from 'react';

export default ({
  remove = e => console.log( 'no remove method defined' ),
  name,
}) => {
  return (
    <span>
      <span>
        {name}
      </span>
      <a href="#" onClick={remove}>X</a>
    </span>
  );
}

