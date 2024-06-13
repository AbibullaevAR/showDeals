export interface Lead {
  id: number,
  name: string,
  createDate: string,
  price: number,
  status: {
    name: string,
    color: string
  },
  responsibleUser: {
    name: string
  },
  contacts: {
    name: string,
    email: string,
    phone: string
  }[]
}