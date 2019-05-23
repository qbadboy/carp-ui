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

// 设计稿按iPhone8尺寸
export function px2vw(px) {
  return px && (px / 375).toFixed(3) * 100 + 'vw';
}
