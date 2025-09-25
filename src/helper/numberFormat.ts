export const formatNumberWithCommas = (amount: number | string) => {
  const num = typeof amount === 'string' ? Number(amount) : amount;
  return new Intl.NumberFormat('en-US').format(num);
};
