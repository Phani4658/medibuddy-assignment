import { BannerProps } from "@/types/types";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Banner({ bannerItems }: { bannerItems: any }) {
  return (
    <Carousel
      opts={{
        slidesToScroll: 1,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {bannerItems.props.map((banner: BannerProps) => (
          <CarouselItem key={banner.order}>
            <a href={banner.deeplink}>
              <img
                src={banner.bannerUrl}
                alt="Banner"
                loading="lazy"
                className="w-full object-cover"
              />
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
