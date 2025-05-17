/**
 * 스네이크케이스를 카멜케이스로 변환하는 유틸리티
 */

/**
 * 스네이크케이스 문자열을 카멜케이스로 변환
 * example: user_id -> userId
 */
export const snakeToCamel = (str: string): string => {
  return str.replace(/([-_][a-z])/g, (group) =>
    group.toUpperCase().replace('-', '').replace('_', '')
  );
};

/**
 * 객체의 모든 키를 카멜케이스로 변환
 */
export const convertKeysToCamelCase = (obj: any): any => {
  if (obj === null || obj === undefined || typeof obj !== 'object' || Array.isArray(obj) === false && Object.prototype.toString.call(obj) === '[object Date]') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => convertKeysToCamelCase(item));
  }

  const camelCaseObj: Record<string, any> = {};
  
  Object.keys(obj).forEach(key => {
    const camelKey = snakeToCamel(key);
    camelCaseObj[camelKey] = convertKeysToCamelCase(obj[key]);
  });

  return camelCaseObj;
};

/**
 * 요청 바디의 모든 키를 카멜케이스로 변환하는 미들웨어
 */
export const camelCaseMiddleware = (req: any, _res: any, next: any) => {
  if (req.body) {
    req.body = convertKeysToCamelCase(req.body);
  }
  
  if (req.query) {
    req.query = convertKeysToCamelCase(req.query);
  }
  
  if (req.params) {
    req.params = convertKeysToCamelCase(req.params);
  }
  
  next();
}; 