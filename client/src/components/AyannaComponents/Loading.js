import React from 'react';

const Loading = (props) => {
  return (
    // <a class="btn btn-primary loading disabled">Loading</a>

    <div class='ui active inverted dimmer'>
      <div class='ui text loader'>{props.text}</div>
    </div>
  );
};

export default Loading;
