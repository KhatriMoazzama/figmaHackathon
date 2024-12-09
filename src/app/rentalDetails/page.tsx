import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="w-full flex md:flex-row">
      {/* Sidebar for larger screens */}
      <div className="first hidden md:flex w-[25%] lg:w-[20%]">
        <Image
          src="/Nav Bar.png"
          alt="Nav Bar"
          width={360}
          height={1600}
          priority
        />
      </div>

      {/* Content section for larger screens */}
      <div className="sec hidden md:flex w-full md:w-[75%] lg:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 gap-7 flex-nowrap justify-center">
        <Image
          src="/Details Rental.png"
          alt="Details Rental"
          width={534}
          height={272}
          className="ml-1 w-full md:w-[45%] lg:w-[534px]"
        />
      </div>

      {/* Content section for small screens */}
      <div className="small-screens  bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-6">
        <Image
          src="/Top 5.png"
          alt="Top 5"
          width={327}
          height={508}
          className="w-full"
        />
        <Image
          src="/Recent Transaction.png"
          alt="Recent Transaction"
          width={327}
          height={352}
          className="w-full"
        />
      </div>
    </div>
  );
}