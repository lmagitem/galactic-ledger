import * as math from 'mathjs';

export const toDecimals = (n: number, decimals: number): string => (Math.round(n * 10 ** decimals) / 10 ** decimals).toFixed(decimals);

export const toSignificantDecimals = (num: number) => {
  const epsilon = 1e-12;
  if (!num || Math.abs(num) < epsilon) {
    return '0.0';
  } else if (num >= 1.0) {
    return num.toFixed(2); // Format number to 2 decimal places
  } else {
    // For numbers less than 1, find the first two non-zero digits after the decimal
    const s = num.toFixed(12); // Convert to string with sufficient precision
    let nonZeroCount = 0;
    let lastNonZeroIndex = 0;
    let zeroCount = 0;
    let dotIndex = null;

    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      if (c === '.') {
        dotIndex = i;
      } else if (dotIndex !== null) {
        if (c !== '0') {
          nonZeroCount += 1;
          lastNonZeroIndex = i;
          zeroCount = 0;
        } else {
          zeroCount += 1;
        }

        if (nonZeroCount === 2 || (nonZeroCount >= 1 && zeroCount >= 3)) {
          // Cut to the last non-zero number or keep two non-zero digits
          return num.toFixed(lastNonZeroIndex - dotIndex);
        }
      }
    }

    return s; // Return original string if conditions not met
  }
};

export const smoothScaleValueLog = (value: number, minVal: number, maxVal: number, newMin: number, newMax: number): number => {
  const logMin = minVal === 0 ? 0 : math.log10(math.bignumber(minVal));
  const logMax = math.log10(math.bignumber(maxVal));
  const logNum = math.log10(math.bignumber(value));
  const logScale = logNum.sub(logMin).div(logMax.sub(logMin));
  const result = logScale.mul(newMax - newMin + newMin);
  return Math.max(newMin, Math.min(newMax, result.toNumber()));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isInteger = (value: any) => {
  let x;
  return isNaN(value) ? !1 : ((x = parseFloat(value)), (0 | x) === x);
};
