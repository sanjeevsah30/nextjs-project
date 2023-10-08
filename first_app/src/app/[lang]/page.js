import Image from "next/image";
import { getDictionary } from "../../../getDictionary";
import Link from "next/link";

export default async function Home({ params }) {
  const translatedData = await getDictionary(params?.lang);

  return (
    <>
      <Link href={"/about"}>Go to about page</Link>
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <p className="font-semibold">locale : {params?.lang}</p>
        <p className="font-semibold">{translatedData.data}</p>
        <div className="flex flex-col  ">
          <label>{translatedData.form?.name}</label>
          <input type="text" className="border-2 border-slate-700" />
          <label>{translatedData.form?.age}</label>
          <input type="text" className="border-2 border-slate-700" />
          <label>{translatedData.form?.city}</label>
          <input type="text" className="border-2 border-slate-700" />
          <button className="bg-lime-500 mt-2 font-bold">submit </button>
        </div>
      </div>
    </>
  );
}
