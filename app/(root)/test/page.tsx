import axios from 'axios';
const baseUrl = 'http://localhost:3000'; // Assuming backend API is running on this port

async function getQuotaInformation() {
  const url = `${baseUrl}/api/get_limit`;
  const response = await axios.get(url);
  return response.data;
}
export default async function Test() {
  try {
    const response = await getQuotaInformation()
    console.log('API response:', response); // Log the actual data received

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
