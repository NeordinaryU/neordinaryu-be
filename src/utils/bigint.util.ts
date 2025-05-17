/**
 * BigInt 값을 문자열로 변환하는 JSON 직렬화 처리기
 */
export const bigintJsonSerializer = () => {
  // JSON.stringify가 BigInt 값을 처리할 수 있도록 재정의
  const originalJSONStringify = JSON.stringify;
  
  JSON.stringify = function(value: any, replacer?: any, space?: any) {
    return originalJSONStringify(
      value,
      (key, value) => {
        // BigInt 값을 문자열로 변환
        if (typeof value === 'bigint') {
          return value.toString();
        }
        // 기존 replacer가 있으면 적용
        return replacer ? replacer(key, value) : value;
      },
      space
    );
  };
};

/**
 * Express 응답에서 BigInt를 문자열로 변환하는 미들웨어
 */
export const bigintMiddleware = (req: any, res: any, next: any) => {
  const originalJson = res.json;
  
  res.json = function(body: any) {
    body = JSON.parse(JSON.stringify(body, (key, value) => 
      typeof value === 'bigint' ? value.toString() : value
    ));
    
    return originalJson.call(this, body);
  };
  
  next();
}; 