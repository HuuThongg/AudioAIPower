import { getBaseUrl } from '@/lib/utils';
import axios from 'axios';
const baseUrl = getBaseUrl(); // Assuming backend API is running on this port

async function getQuotaInformation() {
  const url = `${baseUrl}/api/get_limit`;
  const response = await axios.get(url);
  return response.data;
}
export default async function Test() {
  try {
    const response = await getQuotaInformation()

    return (
      <div className="text-white-1 z-50 pl-96">
        {response ? 'Data fetched successfully!' : 'Fetching data...'}
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div className="text-white-1 z-50 pl-96">
        Error: {'An error occurred.'}
      </div>
    );
  }
}
