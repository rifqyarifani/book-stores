import React from "react";
import BackButton from "@/components/molecules/BackButton/index";
import { updateTransaction } from "@/services/transaction.services";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

const Edit = () => {
  const [cookie] = useCookies(["token"]);
  const router = useRouter();
  const id = router.query.id;

  const handleEditTransaction: React.FormEventHandler<HTMLFormElement> = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    confirm("Apakah anda yakin?");
    const param = parseInt(id as string);
    const data = {
      status: e.currentTarget.status.value,
    };

    updateTransaction(
      cookie.token as string,
      param,
      data,
      (status: boolean, res: any) => {
        if (status) {
          alert("Berhasil mengubah status transaksi");
          router.push("/admin/transactions");
        } else {
          alert("Gagal mengubah status transaksi");
          router.push("/admin/transactions");
        }
      }
    );
  };

  return (
    <div className=" p-4">
      <BackButton id="transactions" />
      <h1 className=" text-3xl my-4">Ubah Status Transaksi</h1>
      <form
        onSubmit={handleEditTransaction}
        className=" flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto"
      >
        <label htmlFor="status" className=" text-xl mr-4 text-gray-500">
          Status
        </label>
        <select id="status" name="status" defaultValue={""} required>
          <option value="" disabled>
            Pilih Status
          </option>
          <option value="failed">Failed</option>
          <option value="success">Success</option>
        </select>
        <button className=" p-2 bg-sky-300 m-8 rounded-2xl" type="submit">
          Ubah
        </button>
      </form>
    </div>
  );
};

export default Edit;
