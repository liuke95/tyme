const OrderMap = new Map<string, string>([
  ['Low_to_hight', 'asc'],
  ['hight_to_low', 'desc'],
]);
const KeyMap = new Map<string, string>([['priceRange', 'price']]);

export function objectToQueryParams(obj: Record<string, unknown>) {
  const params = new URLSearchParams();

  Object.keys(obj).forEach((key) => {
    const value = obj[key];
    if (Array.isArray(value)) {
      value.forEach((val, index) => {
        if (index === 0) {
          params.append(`${KeyMap.get(key)}_gte`, val);
        } else {
          params.append(`${KeyMap.get(key)}_lte`, val);
        }
      });
    } else {
      if (value && value !== 'All') {
        if (key === 'price' || key === 'createDate') {
          // sort
          if (params.has('_sort')) {
            params.set('_sort', `${params.get('_sort')},${key}`);
          } else {
            params.append('_sort', key);
          }

          // order
          if (params.has('_order')) {
            params.set(
              '_order',
              `${params.get('_order')},${OrderMap.get(value as string)}`
            );
          } else {
            params.append('_order', OrderMap.get(value as string) as string);
          }
        } else {
          params.append(key, value as string);
        }
      }
    }
  });

  return params.toString();
}
