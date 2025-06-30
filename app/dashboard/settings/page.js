import Button from "@/app/components/Button";
import React from "react";

console.log("Settings page loaded");

const page = () => {
  return (
    <div>
      <h1 className="text-5xl">Settings Page</h1>
      <p className="mt-10">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sint
        doloribus sed molestiae libero minima, nulla nemo incidunt possimus
        dicta consequatur consequuntur? Asperiores quidem quas nemo placeat
        odit. A, sunt!
      </p>
      <Button>Go to Analytics page </Button>
    </div>
  );
};

export default page;
