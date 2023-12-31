interface transaction {
  id: number;
  title: string;
  price: number;
  account_number: number;
  first_name: string;
  second_name: string;
  status: string;
  user_id: number;
  pricing_id: number;
  createdAt?: Date;
  updatedAt?: Date;
}
