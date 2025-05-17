/**
 * BigInt 값을 숫자로 변환하는 JSON 직렬화 처리기
 * BigInt 값을 숫자로 변환하여 정밀도 손실을 방지합니다.
 */
export const bigintJsonSerializer = () => {
  // JSON.stringify가 BigInt 값을 처리할 수 있도록 재정의
  const originalJSONStringify = JSON.stringify;
  
  JSON.stringify = function(value: any, replacer?: any, space?: any) {
    return originalJSONStringify(
      value,
      (key, value) => {
        // BigInt 값을 숫자로 변환
        if (typeof value === 'bigint') {
          return Number(value); // BigInt를 Number로 변환
        }
        // 기존 replacer가 있으면 적용
        return replacer ? replacer(key, value) : value;
      },
      space
    );
  };
};

/**
 * Express 응답에서 BigInt를 숫자로 변환하는 미들웨어
 * BigInt 값을 숫자로 변환하여 정밀도 손실을 방지합니다.
 */
export const bigintMiddleware = (req: any, res: any, next: any) => {
  const originalJson = res.json;
  
  res.json = function(body: any) {
    // 여기의 JSON.stringify는 bigintJsonSerializer에 의해 패치된 전역 JSON.stringify를 사용하거나,
    // 자체 replacer를 통해 BigInt를 숫자로 변환합니다.
    body = JSON.parse(JSON.stringify(body, (key, value) => 
      typeof value === 'bigint' ? Number(value) : value // BigInt를 Number로 변환
    ));
    
    return originalJson.call(this, body);
  };
  
  next();
};