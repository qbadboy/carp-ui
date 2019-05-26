let timer = null;

export default function debounce(fn, time = 200) {
  return function() {
    if (timer !== null) {
      clearTimeout(timer);
    }

    timer = setTimeout(fn, time);
  };
}
