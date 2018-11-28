import React from 'react';
import Head from 'next/head';

export default function Body(props) {
  const {title, ...attributes} = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
        <script src="/static/holder.min.js" />
      </Head>
      <div {...attributes} />
    </div>
  );
}
