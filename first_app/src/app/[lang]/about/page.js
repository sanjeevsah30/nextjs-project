import React from "react";
import { getDictionary } from "../../../../getDictionary";
import Link from "next/link";

const AboutPage = async ({ params }) => {
  const translatedData = await getDictionary(params?.lang);

  return (
    <>
    <Link href={"/"}>
      Go to home
    </Link>
      <div className="flex items-center justify-center h-[100vh] font-semibold">
        AboutPage : {translatedData?.data}
      </div>
    </>
  );
};

export default AboutPage;
