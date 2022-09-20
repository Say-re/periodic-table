import logger from '../../helpers/logger';

export const remConversion = (values: number | Array<number>, baseFontSize = 16): string => {
  if (!values || !baseFontSize) {
    logger({
      type: 'error',
      message: 'Missing parameters. Unable to calculate remConversion',
      values,
      baseFontSize,
    });
    return 'invalidValue';
  }

  if (typeof values !== 'number' && !Array.isArray(values)) {
    logger({
      type: 'error',
      message: 'Invalid value type passed through',
      values,
    });
    return 'invalidValue';
  }

  if (typeof values === 'number') return (`${values / baseFontSize}rem`);

  const conversion = [];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    // If number; process
    if (typeof value === 'number') conversion.push(`${value / baseFontSize}rem`);
    // Retry if values is string
    if (typeof value !== 'number' && typeof value === 'string' && typeof parseInt(value, 10) === 'number') conversion.push(`${parseInt(value, 10) / baseFontSize}rem`);
  }
  return conversion.join(' '); // return string
};

export default remConversion;
