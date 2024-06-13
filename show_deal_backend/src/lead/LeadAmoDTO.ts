export interface LeadAmoDTO {
  id: number,
  name: string,
  created_at: number,
  price: number,
  status_id: number,
  responsible_user_id: number,
  _embedded: {
    contacts: {
      id: number
    }[]
  }
}

export interface LeadAmoResponse {
  _embedded: {
    leads: LeadAmoDTO[]
  }
}