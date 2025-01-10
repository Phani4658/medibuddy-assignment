import Banner from "@/components/Banner";
import FAQs from "@/components/FAQs";
import HealthCheckPackages from "@/components/HealthCheckPackages";
import HeroIcons from "@/components/HeroIcons";
import Navbar from "@/components/Navbar";
import { IoIosSearch } from "react-icons/io";

export default function Home({ pageConfig }: { pageConfig: any }) {
  console.log(pageConfig);
  return (
    <div className="space-y-4">
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
      <FAQs faqs={pageConfig[6]} />
    </div>
  );
}
