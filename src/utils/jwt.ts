import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY as string;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET_KEY is not defined in the environment variables.');
}

// Helper function to parse expiry string (e.g., "15m", "7d", "3600") to seconds
const parseExpiryToSeconds = (expiryString: string): number => {
  const unit = expiryString.charAt(expiryString.length - 1);
  let value = parseInt(expiryString.slice(0, -1));

  if (isNaN(value)) { // 단위가 없는 숫자 문자열 (예: "900")인지 확인
    value = parseInt(expiryString);
    if (!isNaN(value)) return value; // 숫자면 초로 간주
    throw new Error(`Invalid expiresIn format: ${expiryString}. Expected like '15m', '7d', or seconds as a number string.`);
  }

  switch (unit) {
    case 's': return value;
    case 'm': return value * 60;
    case 'h': return value * 60 * 60;
    case 'd': return value * 24 * 60 * 60;
    default:
      throw new Error(`Invalid unit '${unit}' in expiresIn format: ${expiryString}. Supported units: s, m, h, d.`);
  }
};

const ACCESS_TOKEN_EXPIRES_SECONDS = parseExpiryToSeconds(process.env.ACCESS_TOKEN_EXPIRES_IN || '7d'); 
const REFRESH_TOKEN_EXPIRES_SECONDS = parseExpiryToSeconds(process.env.REFRESH_TOKEN_EXPIRES_IN || '7d'); 

export interface UserPayload {
  id: number; 
  userId: string; 
}

export const generateAccessToken = (user: UserPayload): string => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRES_SECONDS });
};

export const generateRefreshToken = (user: UserPayload): string => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRES_SECONDS });
};

export const verifyToken = (token: string): UserPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as UserPayload;
  } catch (error: any) {
    if (error instanceof jwt.TokenExpiredError) {
      console.log('Token expired at: ' + error.expiredAt);
    } else if (error instanceof jwt.JsonWebTokenError) {
      console.log('Invalid token:', error.message);
    } else {
      console.error('Token verification failed with an unexpected error:', error);
    }
    return null;
  }
}; 