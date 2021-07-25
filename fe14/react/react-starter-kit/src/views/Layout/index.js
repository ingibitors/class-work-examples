/* Core */
import React from 'react';

import './styles.scss';

export const Layout = props => {
  return (
    <>
      {/*<head>*/}
      {/*  <link rel="description" />*/}
      {/*  <title>{props.title}</title>*/}
      {/*</head>*/}
      <main className="page">{props.children}</main>;
    </>
  );
};

Layout.defaultProps = {
  title: 'Our amazing solutions',
};

// const H1 = (props) => {
//   return <h1>{props.children}</h1>
// };

// <H1>Title</H1>
