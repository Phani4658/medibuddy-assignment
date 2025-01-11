import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { formatDistanceToNow, parse } from "date-fns";

export default function UserReview({ reviews }: { reviews: any }) {
  function getRelativeTime(dateString: string): string {
    try {
      // Parse the input date string into a JavaScript Date object
      const parsedDate = parse(dateString, "dd MMMM yyyy", new Date());
      // Format the distance to now and add the "ago" suffix
      return formatDistanceToNow(parsedDate, { addSuffix: true });
    } catch (error) {
      console.error("Invalid date format:", dateString);
      return "Unknown date";
    }
  }

  return (
    <section className="default-margin space-y-4">
      <h1 className="font-semibold text-xl">What Our Users Say</h1>
      {reviews.props && reviews.props.length > 0 ? (
        <Carousel
          opts={{
            dragFree: true,
          }}
        >
          <CarouselContent>
            {reviews.props.map((review: any, index: number) => (
              <CarouselItem key={index} className="basis-[85%]">
                <div className="space-y-3 bg-[#FBFCFF] rounded-lg p-3">
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <img
                          key={index}
                          src="/icons/star.svg"
                          alt="Star"
                          className="w-4 h-4"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">
                      {getRelativeTime(review.days)}
                    </p>
                  </div>
                  <p className="line-clamp-3 text-sm text-gray-700 w-[95%] mx-auto">
                    "{review.content}"
                  </p>
                  <hr />
                  <div className="flex gap-2 items-center">
                    <img
                      src="/icons/profile_placeholder.svg"
                      alt="profile placeholder"
                    />
                    <h5 className="font-light text-sm">{review.name}</h5>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      ) : (
        <p className="text-gray-500">No reviews available at the moment.</p>
      )}
    </section>
  );
}
