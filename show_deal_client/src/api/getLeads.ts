import { Lead } from "@/types/lead";

export const getLeads = async (query = ''): Promise<Lead[]> => {
  try {
    const response = await fetch(`/api/leads?query=${query}`);
    
    return response.json();
  } catch (e) {
    console.log(e)
    return [];
  }
}