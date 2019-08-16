import React from 'react';

interface Button extends React.HTMLProps<HTMLDivElement> {}

export default (props: Button) => {
  const { className, ..._props } = props;
  const classes = className ? `root ${props.className}` : 'root';

  return (
    <div className={classes} {..._props}>
      <button>{_props.children}</button>
      <style jsx>
        {`
          .root > button {
            cursor: pointer;
            text-transform: uppercase;
            color: white;
            border: none;
            background-color: #0070f3;
            padding: 16px 24px;
            border-radius: 8px;
            font-size: 0.8rem;
          }

          .root > button:focus {
            outline: none;
          }
        `}
      </style>
    </div>
  );
};
