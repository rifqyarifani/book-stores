interface User {
  id: number;
  email: string;
  name: string;
  password: string;
  avatar?: string;
  address?: string;
  phone_number?: number;
  date_of_birth?: Date;
  gender?: "male" | "female";
}
