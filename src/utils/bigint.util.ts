/**
 * BigInt를 문자열로 변환하는 함수
 * JSON 직렬화를 위해 사용
 */
export const bigintToString = (obj: any): any => {
  // 객체가 아니면 그대로 반환
  if (obj === null || obj === undefined || typeof obj !== 'object') {
    return typeof obj === 'bigint' ? obj.toString() : obj;
  }

  // 배열인 경우
  if (Array.isArray(obj)) {
    return obj.map(item => bigintToString(item));
  }

  // 객체인 경우
  const result: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      result[key] = typeof value === 'bigint' 
        ? value.toString() 
        : bigintToString(value);
    }
  }
  
  return result;
};

/**
 * BigInt 변환을 위한 JSON.stringify 래퍼 함수
 */
export const safeStringify = (obj: any): string => {
  return JSON.stringify(bigintToString(obj));
};

/**
 * 문자열을 BigInt로 복원하는 함수 (필요시 사용)
 */
export const restoreBigInt = (obj: any): any => {
  if (obj === null || obj === undefined) return obj;
  
  if (typeof obj === 'string' && /^\d+$/.test(obj) && obj.length > 15) {
    return BigInt(obj);
  }
  
  if (typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => restoreBigInt(item));
  }
  
  const result: Record<string, any> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = restoreBigInt(obj[key]);
    }
  }
  
  return result;
}; 