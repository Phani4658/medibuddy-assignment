import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { bookLabTests } from "@/helpers/constants";
import { useEffect, useState } from "react";
import LabTestCard from "./LabTestCard";

export default function PopularLabTests() {
  const [activeTab, setActiveTab] = useState(bookLabTests.categories[0]);
  const tabsList = bookLabTests.categories;
  const [packagesToShow, setPackagesToShow] = useState<any[]>([]);

  const handleTabClick = (tabValue: string) => {
    setPackagesToShow(
      bookLabTests.tests.filter((pkg: any) => pkg.category.includes(tabValue))
    );
    setActiveTab(tabValue);
  };

  useEffect(() => {
    handleTabClick(activeTab);
  }, []);
  return (
    <div className="default-margin">
      <section className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Book Popular Lab Tests</h2>
        <a href="" className="text-blue-600 cursor-pointer font-semibold">
          View All
        </a>
      </section>

      <Tabs defaultValue={activeTab} orientation="vertical">
        <div className="max-w-full overflow-scroll py-4 no-scrollbar">
          <TabsList className="bg-transparent space-x-3">
            {tabsList.map((tabKey) => (
              <TabsTrigger
                key={tabKey}
                value={tabKey}
                className="bg-white rounded-lg py-2 data-[state=active]:text-[#1778F2] data-[state=active]:border border-[#1778F2]"
                onClick={() => handleTabClick(tabKey)} // Add onClick handler to each tab
              >
                {tabKey}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {/* TabsContent */}
        {tabsList.map((tabKey) => (
          <TabsContent key={tabKey} value={tabKey} >
            {/* Render packages for the selected tab */}
            <div className="py-2">
              {packagesToShow.length > 0 ? (
                <ul className="flex flex-col overflow-scroll max-w-full space-y-3 no-scrollbar" >
                  {packagesToShow.map((test: any, index) => (
                    <LabTestCard key={index} labDetails={test} />
                  ))}
                </ul>
              ) : (
                <p>No packages available for this category</p>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
