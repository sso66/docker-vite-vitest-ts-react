export interface ISchoolame {
  name: string
}

export interface IStudent {
  name: string
  surname: string
  age?: number
  address?: {
    houseNo: number
    street: string
    town: string
  }
}

export interface IAddress {
  houseNo: number
  street: string
  town: string
}

export enum Level {
  Undergraduate = 'Undergraduate',
  Postgraduate = 'Postgraduate',
}

export interface IStudent {
  name: string
  surname: string
  age?: number
  address?: IAddress
  level?: string
}
