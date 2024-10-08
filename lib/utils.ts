import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import pino from "pino";

const logger = pino();

/**
 * Pause for a specified number of seconds.
 * @param x Minimum number of seconds.
 * @param y Maximum number of seconds (optional).
 */
export const sleep = (x: number, y?: number): Promise<void> => {
  let timeout = x * 1000;
  if (y !== undefined && y !== x) {
    const min = Math.min(x, y);
    const max = Math.max(x, y);
    timeout = Math.floor(Math.random() * (max - min + 1) + min) * 1000;
  }
  // console.log(`Sleeping for ${timeout / 1000} seconds`);
  logger.info(`Sleeping for ${timeout / 1000} seconds`);

  return new Promise(resolve => setTimeout(resolve, timeout));
}


export const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://audio-ai-power.vercel.app', // Replace with your frontend origin', // Replace with your frontend origin
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export const getBaseUrl = (): string => {
  if (process.env.NODE_ENV === 'production') {
    return process.env.BASE_URL || 'https://audio-ai-power.vercel.app/';
  } else {
    return 'http://localhost:3000';
  }
};

