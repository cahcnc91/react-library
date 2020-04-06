import React from 'react';

const WithSectionsProps = ({
  component: Component,
  ...rest
}) => {
  return (
    <Component
      {...rest}
    />
  );
};

export default WithSectionsProps;
