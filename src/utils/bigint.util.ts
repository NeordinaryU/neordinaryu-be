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

/**
 * BigInt를 JSON으로 직렬화할 수 있도록 하는 유틸리티
 */

// BigInt 타입 확장을 위한 인터페이스 선언
declare global {
  interface BigInt {
    toJSON(): string;
  }
}

// BigInt 프로토타입에 toJSON 메서드 추가
BigInt.prototype.toJSON = function() {
  return this.toString();
};

/**
 * BigInt 값을 포함한 객체를 JSON으로 직렬화하는 함수
 * @param data 직렬화할 데이터
 * @returns JSON 문자열
 */
export const jsonStringifyWithBigInt = (data: any): string => {
  return JSON.stringify(data, (_, value) => 
    typeof value === 'bigint' ? value.toString() : value
  );
};

/**
 * Express 응답 객체의 json 메서드를 오버라이드하는 미들웨어
 */
export const bigintMiddleware = (req: any, res: any, next: any) => {
  const originalJson = res.json;
  
  res.json = function(data: any) {
    return originalJson.call(this, JSON.parse(jsonStringifyWithBigInt(data)));
  };
  
  next();
}; 