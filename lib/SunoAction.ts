"use server"
import axios from "axios"
const baseUrl = 'http://localhost:3000'; // Assuming backend API is running on this port

async function getQuotaInformation() {
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
