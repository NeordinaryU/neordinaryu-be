import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY as string;
const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN || '15m';
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET_KEY is not defined in the environment variables.');
}

export interface UserPayload {
  id: number; 
  userId: string; 
}

export const generateAccessToken = (user: UserPayload): string => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: String(ACCESS_TOKEN_EXPIRES_IN) });
};

export const generateRefreshToken = (user: UserPayload): string => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: String(REFRESH_TOKEN_EXPIRES_IN) });
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