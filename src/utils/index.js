export function first2Upper(str) {
  const namespace = 'carp-';
  str = str.split(namespace);

  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

export function propValidator(value) {
  return ({ propName = '', keys = [], checkFn } = {}) => {
    if (process.env.NODE_ENV === 'production') return true;

    if (checkFn) {
      checkFn();
      return true;
    }

    if (keys.indexOf(value) == -1) {
      console.warn(`[carp-tab ${propName} warn] 只接收${keys.join('、')}`);
    }

    return true;
  };
}

export function px2rem(px) {
  return px / 20 + 'rem';
}
