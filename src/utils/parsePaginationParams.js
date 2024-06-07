const parseNumber = (number, defaultValue) => {
  const isString = typeof number === 'string';
  if (!isString) return defaultValue;
  //second variant if(typeof number !== 'string') return defaultValue;

  const parsedNumber = parseInt(number);
  if (Number.isNaN(parsedNumber)) return defaultValue;

  return parsedNumber;
};

//Pagination will be work when function parseNumber return parsedNumber (value = number);

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;

  const parsedPage = parseNumber(page, 1); //if page is not number then the parsedPage = 1 (see function parseNumber);
  const parsedPerPage = parseNumber(perPage, 10); //if perPage is not number then the parsePerdPage = 10 (see function parseNumber);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
