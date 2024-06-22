// CustomerQuoteType.ts
interface Data {
  id: number
  projectId: number
  name: string
  projectName: string
  description: string
  estimateDate: string
  serviceProvider: {
    id: number
    dbaName: string
    imagUrl: string
    contactPhone: string
    contactEmail: string
    contactFirstName: string
    constactLastName: string
  }
  customer: {
    address: string
    firstName: string
    lastName: string
    phone: string
    email: string
  }
  catalogItems: [
    {
      retailPrice: string
      quantity: number
      name: {
        en: string
      }
      description: {
        'en-us'?: string | null | undefined
      }
    },
    {
      retailPrice: number
      quantity: number
      name: {
        en: string
      }
      description: {
        'en-us'?: string | null | undefined
      }
    },
    {
      retailPrice: number
      quantity: number
      name: {
        en: string
      }
      description: {
        'en-us'?: string | null | undefined
      }
    }
  ]
  retailSubtotal: number
  deposit: number
  totalRetailPrice: number
}

export default Data

/* end-of-file */
