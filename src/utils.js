export function first2Upper(str) {
  const namespace = 'carp-';
  str = str.split(namespace);

  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
