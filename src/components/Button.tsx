import React from 'react';

interface Button extends React.HTMLProps<HTMLButtonElement> {}

export default (props: Button) => {
  return (
    <div className="root">
      <button {...props}>{props.children}</button>
      <style jsx>
        {`
          .root > button {
            text-transform: uppercase;
            background-color: #0070f3;
            padding: 16px 24px;
          }
        `}
      </style>
    </div>
  );
};
