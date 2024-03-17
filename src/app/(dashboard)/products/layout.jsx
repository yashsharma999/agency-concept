import React from 'react';

export default function layout(props) {
  return (
    <>
      {props.children}
      {props.modal}
    </>
  );
}
