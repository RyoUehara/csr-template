import React from 'react';

interface Card extends React.HTMLAttributes<HTMLDivElement> {}

export default (props: Card) => {
  const { className, ..._props } = props;
  const classes = className ? `root ${className}` : 'root';

  return (
    <div className={classes} {..._props}>
      {_props.children}
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
};
