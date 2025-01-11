import { labsVisited } from "@/helpers/constants";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClock4 } from "react-icons/lu";

export default function LabsVisited() {
  return (
    <section className="default-margin space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-xl">Labs Visited</h2>
      </div>
      <Carousel
        opts={{
          dragFree: true,
        }}
      >
        <CarouselContent className="flex space-x-4 py-2 px-6">
          {labsVisited.map((lab, index: number) => (
            <CarouselItem
              key={index}
              className="pl-0 basis-[90%] custom-shadow rounded-2xl  border border-b-[#EBEEF1] box-border"
            >
              <div className="relative">
                <p className="text-sm absolute bottom-0 right-0 rounded-tl-lg p-1 bg-[#FFFAD6]">
                  {lab.averageRating}/5 ({lab.noOfRatings} ratings)
                </p>
                <img
                  src={lab.image}
                  className="w-full object-cover rounded-t-2xl h-[150px]"
                />
              </div>
              <div className="bg-white p-4 space-y-1 rounded-b-2xl">
                <h2>{lab.name}</h2>
                <p className="font-light text-[#47566A] flex items-center gap-1">
                  <HiOutlineLocationMarker />
                  {lab.location}
                </p>
                <p className="font-light text-[#47566A] flex items-center gap-1">
                  <LuClock4 />
                  Next Slot - {lab.nextSlot}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
