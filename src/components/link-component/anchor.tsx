/* eslint-disable react/display-name */

import React from 'react';
interface IHrefState {
  href?: string;
}

/**
 * Renders anchor taf as HTML
 */
const AnchorWrap = React.forwardRef((children: IHrefState, ref) => {
  console.log(children);
  return (
    <a href={children.href} className="font-cursive text-3xl text-primary">
      Krishna Kishore
    </a>
  );
});

export default AnchorWrap;
