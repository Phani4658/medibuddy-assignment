import { useState, useEffect } from "react";
import { activeBookings } from "@/helpers/constants";
import BookingCard from "./BookingCard";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "./ui/carousel";
import { ActiveBookingProps } from "@/types/types";

export default function ActiveBookings() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    // Set the total count of slides and the initial selected slide
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    // Update the current slide when selection changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="default-margin space-y-4">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Your Active Bookings</h2>
        <a className="text-blue-600 text-sm font-bold cursor-pointer" href="">
          View All
        </a>
      </div>

      {/* Carousel Section */}
      <Carousel
        setApi={setApi}
        opts={{
          slidesToScroll: 1,
          loop: true,
        }}
      >
        <CarouselContent>
          {activeBookings.map((bookings: ActiveBookingProps, index: number) => (
            <CarouselItem key={index} className="w-[95%]">
              <BookingCard bookingDetails={bookings} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              current === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}