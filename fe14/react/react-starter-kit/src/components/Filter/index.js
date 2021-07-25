/* Core */
import React, { useEffect, useRef, useState } from 'react';
import dialogPolyfill from 'dialog-polyfill';
import { v4 } from 'uuid';

/* Instruments */
import './styles.scss';

class MailItem {
  constructor(title, body) {
    this.id = v4(); // Math.random();
    this.title = title;
    this.body = body;
  }
}

export const Filter = props => {
  const { mailList, setMailList } = props;

  const [isModalOpen, setModalState] = useState(false);
  const [titleValue, setTitleValue] = useState('');
  const [bodyValue, setBodyValue] = useState('');
  const titleInputRef = useRef();

  const openModal = () => setModalState(true);
  const closeModal = () => setModalState(false);

  const createMailItem = event => {
    event.preventDefault();

    if (!titleValue || !bodyValue) {
      return null;
    }

    setMailList([new MailItem(titleValue, bodyValue), ...mailList]);
    setTitleValue('');
    setBodyValue('');
    titleInputRef.current.focus();
  };

  useEffect(() => {
    if (isModalOpen) {
      titleInputRef.current.focus();
    }
  }, [isModalOpen]);

  useEffect(() => {
    const dialog = document.querySelector('dialog');
    dialogPolyfill.registerDialog(dialog);
  }, []);

  return (
    <section className="filter">
      <button onClick={openModal}>Написать письмо</button>
      <header>
        <h1>Фильтр</h1>
      </header>
      <dialog open={isModalOpen}>
        <section>
          <button onClick={closeModal}>Закрыть</button>
          <header>
            <h1>Написать письмо</h1>
          </header>
          <form onSubmit={createMailItem}>
            <input
              type="text"
              placeholder="Title..."
              value={titleValue}
              onChange={event => setTitleValue(event.target.value)}
              ref={titleInputRef}
            />
            <input
              type="text"
              placeholder="Body..."
              value={bodyValue}
              onChange={event => setBodyValue(event.target.value)}
            />
            <input type="submit" value="Создать" />
          </form>
        </section>
      </dialog>
    </section>
  );
};
