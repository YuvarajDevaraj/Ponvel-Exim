import React, { useEffect, useState } from "react";
import axios from "axios";
import { rootUrl1 } from "./url";
const ThingWorxComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchThingWorxData = async () => {
      try {
        const response = await axios.post(
          rootUrl1 + "/Thingworx/Things/bF_MobileAPI_Hotpack_TH/Services/GetMachineDetails",
          {
            PlantName: "DIP2",
            DepartmentName: "Injection Moulding",
          },
          {
            headers: {
              appKey: "a56247e4-63d6-4834-b89c-739284c94a60",
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        setData(response.data);
        console.log("Service response:", response.data);
      } catch (error) {
        console.error("Error fetching data from ThingWorx", error);
      }
    };

    fetchThingWorxData();
  }, []);

  return (
    <div>
      {data}
    </div>
  );
};

export default ThingWorxComponent;
