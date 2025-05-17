/**
 * 객체의 키를 스네이크 케이스에서 카멜 케이스로 변환
 */
export const toCamelCase = (str: string): string => {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
};

/**
 * 객체의 키를 카멜 케이스에서 스네이크 케이스로 변환
 */
export const toSnakeCase = (str: string): string => {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};

/**
 * 객체 키를 재귀적으로 변환
 */
export const convertKeys = (
  obj: any,
  converter: (str: string) => string
): any => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeys(item, converter));
  }

  return Object.keys(obj).reduce((acc: Record<string, any>, key: string) => {
    const newKey = converter(key);
    acc[newKey] = convertKeys(obj[key], converter);
    return acc;
  }, {});
};

/**
 * Express 미들웨어: 요청 본문의 키를 스네이크 케이스에서 카멜 케이스로 변환
 */
export const snakeToCamelMiddleware = (req: any, res: any, next: any) => {
  if (req.body && typeof req.body === 'object') {
    req.body = convertKeys(req.body, toCamelCase);
  }
  if (req.query && typeof req.query === 'object') {
    req.query = convertKeys(req.query, toCamelCase);
  }
  next();
};

/**
 * Express 미들웨어: 응답 본문의 키를 카멜 케이스에서 스네이크 케이스로 변환
 */
export const camelToSnakeMiddleware = (req: any, res: any, next: any) => {
  const originalJson = res.json;

  res.json = function(body: any) {
    const converted = convertKeys(body, toSnakeCase);
    return originalJson.call(this, converted);
  };

  next();
}; 