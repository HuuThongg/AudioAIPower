"use server"
import axios from "axios"
import { getBaseUrl } from "./utils";

async function getQuotaInformation() {
  const baseUrl = getBaseUrl()
  const url = `${baseUrl}/api/get_limit`;
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return response.data;
}

export async function getMySongs(audioIds?: string) {
  try {
    const baseUrl = getBaseUrl()
    const url = `${baseUrl}/api/get`;
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json"
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching songs:', error);
    throw error; // Re-throw for potential error handling in the calling code
  }
}
