import React from 'react';

interface Card extends React.HTMLAttributes<HTMLDivElement> {}

export default (props: Card) => (
  <div className={`${props.className} root`}>
    {props.children}
    <style jsx>
      {`
        .root {
          border-radius: 8px;
          background-color: white;
          padding: 16px;
        }
      `}
    </style>
  </div>
);
