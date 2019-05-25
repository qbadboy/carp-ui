let timer = null;

export default function debounce(fn) {
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(fn, 200);
  };
}
