import React from 'react';

import { ModifiersProvider } from '../contexts/Modifiers/ModifiersContext';
import { DayPickerBase } from '../types/DayPickerBase';

import { DayPickerProvider } from './DayPicker/index';
import { FocusProvider } from './Focus/index';
import { NavigationProvider } from './Navigation/index';
import { SelectMultipleProvider } from './SelectMultiple/index';
import { SelectRangeProvider } from './SelectRange/index';
import { SelectSingleProvider } from './SelectSingle/index';

/** The props of {@link RootProvider}. */
export type RootContext = DayPickerBase & {
  children: React.ReactNode;
};

/** Provide the value for all the context providers. */
export function RootProvider(props: RootContext): JSX.Element {
  const { children, ...initialProps } = props;

  return (
    <DayPickerProvider initialProps={initialProps}>
      <NavigationProvider>
        <SelectSingleProvider initialProps={initialProps}>
          <SelectMultipleProvider initialProps={initialProps}>
            <SelectRangeProvider initialProps={initialProps}>
              <ModifiersProvider>
                <FocusProvider>{children}</FocusProvider>
              </ModifiersProvider>
            </SelectRangeProvider>
          </SelectMultipleProvider>
        </SelectSingleProvider>
      </NavigationProvider>
    </DayPickerProvider>
  );
}
