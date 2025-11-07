export enum Gender {
  Male = "male",
  Female = "female",
}

export enum Status {
  Active = "active",
  Inactive = "inactive",
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: Gender;
  status: Status;
}
