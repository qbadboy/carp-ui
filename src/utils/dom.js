// 设计稿按iPhone8尺寸
export function px2vw(px) {
  return px && (px / 375).toFixed(3) * 100 + 'vw';
}

// 添加前缀
export function prefixStyle(styleName) {
  let prefixs = ['webkit', 'moz', 'ms'];
  let style = document.createElement('div').style;

  let name = styleName.charAt(0).toUpperCase() + styleName.substr(1);
  prefixs = prefixs.map(prefix => `${prefix}${name}`).concat([styleName]);

  for (let i = 0; i < prefixs.length; i++) {
    if (style[prefixs[i]] !== null) {
      return prefixs[i];
    }
  }

  return false;
}
