import { useEffect, useState } from "react";
import Home from "./pages/Home";

export default function App() {
  const [pageConfig, setPageConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPageConfig = async () => {
    const cacheKey = "pageConfigCache";
    const cachedData = localStorage.getItem(cacheKey);

    if (cachedData) {
      // Use cached data for faster load
      setPageConfig(JSON.parse(cachedData));
      setLoading(false);
    } else {
      try {
        const response = await fetch(
          "https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config"
        );
        if (!response.ok) throw new Error("Failed to fetch page config");
        const data = await response.json();
        console.log(data[0]);

        // Save to cache for future use
        localStorage.setItem(cacheKey, JSON.stringify(data[0].page_config));
        setPageConfig(data[0].page_config);
      } catch (error) {
        console.error("Error fetching page config:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchPageConfig();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Placeholder for skeleton UI
  }

  return pageConfig && <Home pageConfig={pageConfig} />;
}