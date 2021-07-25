/* Core */
import React from 'react';

/* Instruments */
import './styles.scss';

export const Mailbox = props => {
  const { mailList } = props;

  const mailListJSX = mailList.map(mailItem => {
    return (
      <li key={mailItem.id}>
        <div>Title: {mailItem.title}</div>
        <div>Body: {mailItem.body}</div>
      </li>
    );
  });

  return (
    <section className="mailbox">
      <header>
        <h1>Письма</h1>
      </header>
      <ul>{mailListJSX}</ul>
    </section>
  );
};
