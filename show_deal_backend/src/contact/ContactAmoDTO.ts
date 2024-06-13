interface CustomField {
  field_code: 'PHONE' | 'EMAIL'
  values: {
    value: string
  }[]
}

export interface ContactAmoDTO {
  name: string
  custom_fields_values: CustomField[]
}
