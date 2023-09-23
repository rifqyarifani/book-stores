import axios from "axios";

export const getAllTransactions = async (token: string, callback: Function) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/api/transaction/all",
      config
    );
    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};

export const getTransactionsByUserId = async (
  token: string,
  id: number,
  callback: Function
) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/transaction/user/${id}`,
      config
    );
    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};

export const getTransactionsById = async (
  token: string,
  id: number,
  callback: Function
) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/transaction/id/${id}`,
      config
    );
    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};

type NewTransactionData = {
  account_number: number;
  first_name: string;
  second_name: string;
};

export const newTransaction = async (
  token: string,
  id: number,
  data: NewTransactionData,
  callback: Function
) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.post(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/transaction/new/${id}`,
      data,
      config
    );
    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};

type updateTransaction = {
  status: string;
};

export const updateTransaction = async (
  token: string,
  id: number,
  data: updateTransaction,
  callback: Function
) => {
  try {
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const result = await axios.put(
      process.env.NEXT_PUBLIC_BASE_URL + `/api/transaction/id/${id}`,
      data,
      config
    );

    callback(true, result.data);
  } catch (error) {
    callback(false, error);
  }
};
