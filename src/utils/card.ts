const cardTypes: {[key: string]: string[]} = {
  'visa': ['4'],
  'amex': ['34', '37'],
  'master': ['51', '52', '53', '54', '55']
};

export const getCardType = (numbers: string) => {
  for (const type in cardTypes) {
    if (cardTypes.hasOwnProperty(type)) {
      for (const range of cardTypes[type]) {
        if (numbers.startsWith(range)) {
          return type;
        }
      }
    }
  }
  return 'default';
};
