import { ActiveBookingProps } from "@/types/types";

export default function BookingCard({
  bookingDetails,
}: {
  bookingDetails: ActiveBookingProps;
}) {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg space-y-2 border">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2">
            <img src={bookingDetails.profile_image} width={15} />
            <h3>{bookingDetails.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/Success.svg" />
            <p>{bookingDetails.status}</p>
          </div>
        </div>
        <img src="/icons/view-more.svg" />
      </div>
      <div className="bg-[#F6FAFF] grid grid-cols-3 items-center justify-center text-center p-2">
        <div className="">
          <p className="text-sm font-bold">{bookingDetails.date}</p>
          <p className="text-sm font-light">{bookingDetails.day}</p>
        </div>
        <div className="">
          <p className="text-sm font-bold">{bookingDetails.time}</p>
          <p className="text-sm font-light">{bookingDetails.type}</p>
        </div>
        <div className="">
          <p className="text-sm font-light">
            <span className="font-bold">{bookingDetails.noOfTests}</span>{" "}
            {bookingDetails.typeOfTests}
          </p>
        </div>
      </div>
    </div>
  );
}
