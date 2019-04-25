const isNumber = num => !Number.isNaN(Number(num));
/**
 * 小数位数
 */
const decpos = num => {
  const strNum = num.toString();
  return strNum.replace(/\d+\./, "").length;
};

const plus2nums = (n1, n2) => {
  if (isNumber(n1) && isNumber(n2)) {
    const scale = Math.max(decpos(n1), decpos(n2));
    // return (n1 * (10 ** scale) + n2 *(10 ** scale)) / (10 ** scale);
    return Number((n1 + n2).toFixed(scale));
  }
  return 0;
};

const multi2nums = (n1, n2) => {
  if (isNumber(n1) && isNumber(n2)) {
    const scale = decpos(n1) + decpos(n2);
    return Number((n1 * n2).toFixed(scale));
  }
  return 1;
};

const Price = {
  plus(...nums) {
    return nums.reduce((prev, next) => {
      return plus2nums(prev, next);
    }, 0);
  },
  multi(...nums) {
    return nums.reduce((prev, next) => {
      return multi2nums(prev, next);
    }, 1);
  }
};

export default Price;
