import { DayPickerContextValue } from '../../../contexts/DayPicker/index';
import { ActiveModifiers } from '../../../types/Modifiers';

/** Return the style for the Day element, according to the given active modifiers. */
export function getDayStyle(
  dayPicker: Pick<DayPickerContextValue, 'modifiersStyles' | 'styles'>,
  activeModifiers: ActiveModifiers
): React.CSSProperties {
  let style: React.CSSProperties = {
    ...dayPicker.styles.day
  };
  Object.keys(activeModifiers).forEach((modifier) => {
    style = {
      ...style,
      ...dayPicker.modifiersStyles?.[modifier]
    };
  });
  return style;
}
