import { Lead } from "@/types/lead";

export const getLeads = async (query = ''): Promise<Lead[]> => {
  try {
    const response = await fetch(`http://127.0.0.1:3000/api/leads?query=${query}`);
    
    return response.json();
  } catch (e) {
    console.log(e)
    return [];
  }
}