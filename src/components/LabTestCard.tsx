import { iconUrls } from "@/helpers/constants";
import { LabTestProps } from "@/types/types";

export default function LabTestCard({
  labDetails,
}: {
  labDetails: LabTestProps;
}) {
  return (
    <div className="relative custom-shadow bg-white rounded-md p-2 pt-4 flex gap-2 border border-[#E0E0E0]">
      {labDetails.isCashless && (
        <p className="absolute top-0 right-0 px-4 text-sm text-white bg-[#459F49] rounded-bl-xl rounded-tr-md flex gap-1">
          {" "}
          <img src="/icons/tick.svg" />
          Cashless
        </p>
      )}
      <div className="w-2/3 space-y-1">
        <h1>{labDetails.name}</h1>
        <p className="flex gap-1 items-center font-sm">
          <img src="/icons/reports.svg" width="20" /> Reports in{" "}
          {labDetails.reportTime}
        </p>
        <ul className="flex gap-2">
          {labDetails.avalibleIn.map((item: any) => (
            <li key={item} className="flex gap-1">
              <img src={iconUrls[item]} width={17} />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-1 flex flex-col justify-end items-end pt-5">
        <div className="flex items-center justify-center gap-1">
          <p className="text-gray-500 line-through">₹ {labDetails.price}</p>
          <p className="bg-[#EDF7EE] text-[#459F49] p-1 rounded-sm text-sm ">
            {labDetails.offerPercentage}% OFF
          </p>
        </div>
        <p className="text-sm">
          ₹ {labDetails.discountPrice}/-{" "}
          <span className="text-gray-500">Onwards</span>
        </p>
        <button className="border-[#1778F2] border text-[#1778F2] px-5 font-bold rounded-lg ">
          Add
        </button>
      </div>
    </div>
  );
}
