import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import PackageCard from "./PackageCard";

export default function HealthCheckPackages({ packages }: { packages: any }) {
  const [packagesToShow, setPackagesToShow] = useState<any[]>([]);
  const tabsList: string[] = Object.values(
    packages.categories
  ).flat() as string[];
  const [activeTab, setActiveTab] = useState(tabsList[0]);

  const getKeyByValue = (
    obj: { [key: string]: string[] },
    value: string
  ): string | undefined => {
    for (const [key, values] of Object.entries(obj)) {
      if (values.includes(value)) {
        return key;
      }
    }
    return undefined; // If value is not found
  };

  // Handle the tab click event
  const handleTabClick = (tabValue: string) => {
    const key = getKeyByValue(packages.categories, tabValue);

    // Checking for the packages satisfying the tabValue and contractId
    const selectedPackages = packages.props[0].packages.filter(
      (currentPackage: any) => {
        return (
          key == currentPackage.contractId &&
          currentPackage.subCategories.some(
            (item: any) => item.toLowerCase() === tabValue.toLowerCase()
          )
        );
      }
    );
    // If no packages found, set selectedPackages to empty array
    setPackagesToShow(selectedPackages || []);
    setActiveTab(tabValue);
  };

  useEffect(() => {
    handleTabClick(activeTab)
  },[])

  return (
    <section className="bg-[#E8F2FE] px-6 py-4">
      <div className="flex font-semibold text-sm justify-between items-center">
        <h2>{packages.heading}</h2>
        <a href="" className="text-blue-600 text-sm cursor-pointer">View All</a>
      </div>

      <Tabs defaultValue={activeTab}>
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
          <TabsContent key={tabKey} value={tabKey}>
            {/* Render packages for the selected tab */}
            <div className="py-2">
              {packagesToShow.length > 0 ? (
                <ul className="flex overflow-scroll max-w-full space-x-3 no-scrollbar">
                  {packagesToShow.map((pkg: any) => (
                    <PackageCard key={pkg.packageId} packageDetails={pkg} />
                  ))}
                </ul>
              ) : (
                <p>No packages available for this category</p>
              )}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
