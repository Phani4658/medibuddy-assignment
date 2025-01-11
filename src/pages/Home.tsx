import ActiveBookings from "@/components/ActiveBookings";
import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import HealthCheckPackages from "@/components/HealthCheckPackages";
import HeroIcons from "@/components/HeroIcons";
import Navbar from "@/components/Navbar";
import UserReview from "@/components/UserReview";
import {
  howItWorks,
  lifeStyleFeatures,
  secureFeatures,
  trustedFeatures,
} from "@/helpers/constants";
import { IoIosSearch } from "react-icons/io";

export default function Home({ pageConfig }: { pageConfig: any }) {
  console.log(pageConfig);
  return (
    <div className="space-y-6 pb-10">
      <Navbar />
      <div className="custom-shadow default-margin flex items-center border border-[#D2D8E0] rounded-lg px-3">
        <input
          type="search"
          className="flex-1 placeholder:text-[#4D5C6F] outline-none p-3"
          placeholder="Find lab tests, diagnostics centres"
        />
        <IoIosSearch size={24} className="text-gray-500" />
      </div>
      <main className="default-margin space-y-4">
        <HeroIcons iconsInfo={pageConfig[0]} />
        <Banner bannerItems={pageConfig[1]} />
      </main>
      <HealthCheckPackages packages={pageConfig[2]} />
      <ActiveBookings />
      <section className="default-margin">
        <div className="flex justify-between">
          <h2 className="text-lg font-bold">
            <span className="font-normal">Trusted By</span>{" "}
            <span className="text-[#0066DC]">20,00,000 +</span> <br /> Users
            Every month
          </h2>
          <img src="/icons/shield.svg" />
        </div>
        <ul className="grid grid-cols-2 justify-between gap-3 my-2">
          {trustedFeatures.map((feature, index) => (
            <li key={index} className="flex gap-2 items-center">
              <img src={feature.image} width={30} />
              <h3 className="font-normal">{feature.displayText}</h3>
            </li>
          ))}
        </ul>
      </section>
      <UserReview reviews={pageConfig[5]} />
      <section className="default-margin space-y-3">
        <h2 className="font-semibold">
          Lifestyle Health Check-up Packages
        </h2>
        <ul className="grid grid-cols-3 gap-4">
          {lifeStyleFeatures.map((feature, index) => (
            <li key={index} className="flex flex-col items-center justify-center text-[#050A4E] bg-white p-2 space-y-2 rounded-xl shadow-md">
              <img src={feature.icon} width={40} />
              <p className="font-normal text-sm">{feature.displayText}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="default-margin space-y-3">
        <h2 className="font-bold text-xl">How it Works</h2>
        <ul className="space-y-3">
          {howItWorks.map((details, index) => (
            <li key={index} className="flex items-start gap-4">
              <img src={details.icon} width={30} />
              <p className="font-light">{details.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section className="default-margin space-y-3">
        <h2 className="text-[#050A4E] text-2xl font-semibold">
          100% Safe & Secure Lab Tests
        </h2>
        <ul className="grid grid-cols-2 gap-4">
          {secureFeatures.map((feature, index) => (
            <li key={index} className="p-2 rounded-md bg-[#F1F7FF]">
              <img src={feature.icon} />
              <p className="text-[#050A4E] font-light text-sm">
                {feature.displayText}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <FAQs faqs={pageConfig[6]} />
    </div>
  );
}
