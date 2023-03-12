import React from 'react';

import { HeadRow } from '../../components/HeadRow/index';
import { useDayPicker } from '../../contexts/DayPicker/index';

/** Render the table head. */
export function Head(): JSX.Element {
  const { classNames, styles, components } = useDayPicker();
  const HeadRowComponent = components?.HeadRow ?? HeadRow;
  return (
    <thead style={styles.head} className={classNames.head}>
      <HeadRowComponent />
    </thead>
  );
}
