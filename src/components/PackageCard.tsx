import Counter from "./Counter";

export default function PackageCard({
  packageDetails,
}: {
  packageDetails: any;
}) {
  return (
    <div className="bg-white p-6 pb-2 rounded-md min-w-[90%] relative space-y-2">
      {packageDetails.isSponsered && (
        <p className="absolute top-0 right-0 p-[1px] bg-[#FF0000] text-white rounded-tr-lg rounded-bl-xl text-sm px-6">
          Sponsored
        </p>
      )}
      <h4 className="min-h-[38px]">{packageDetails.packageDisplayName}</h4>
      <span className="flex gap-1 font-base text-[#1778F2]">
        <img src="/icons/reports.svg" width="20" />
        {packageDetails.reportsTatText}
      </span>
      <div className="grid grid-cols-2 gap-3 h-[94px]">
        <div>
          <p>{packageDetails.testCount} Tests</p>
          <ul className="text-sm font-light list-disc pl-3 text-[#4F4F4F] line-clamp-3">
            {packageDetails.testsSummary.map((test: string) => (
              <li key={test}>{test}</li>
            ))}
          </ul>
        </div>
        <div>
          <h6>Includes</h6>
          <span className="flex gap-2 items-center text-[#4F4F4F]">
            <img src="/icons/radiology.svg" width="18" />
            <p>Radiology</p>
          </span>
        </div>
      </div>
      <div className="bg-[#F8F8F8] p-2 grid grid-cols-2 rounded-md mb-3">
        <div>
          <p>Fasting</p>
          <p className="text-gray-500 text-sm">
            {packageDetails.fastingHoursText}
          </p>
        </div>
        <div>
          <p>Avalible At</p>
          <p className="text-gray-500 text-sm">
            {packageDetails.currentVisitType.replace("Visit","")}
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg">₹ {packageDetails.estimatedPrice}</p>
        <Counter />
      </div>
    </div>
  );
}
