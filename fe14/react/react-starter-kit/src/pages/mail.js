/* Core */
import React, { useState } from 'react';

/* Views */
import * as Views from '../views';

/* Components */
import * as Components from '../components';

export const Mail = () => {
  // Изначальный список писем
  const [mailList, setMailList] = useState([]);

  return (
    <Views.Layout>
      <Views.Navigation />
      <Components.Filter mailList={mailList} setMailList={setMailList} />
      {/* Создание писем */}
      <Components.Mailbox mailList={mailList} />
      {/* Рендеринг писем */}
    </Views.Layout>
  );
};
