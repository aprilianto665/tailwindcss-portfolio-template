import React from "react";

// Loading skeleton component for when images are loading
const Skeleton = () => (
  <div className="animate-pulse">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Image skeleton */}
      <div className="w-full md:w-3/5">
        <div className="h-[350px] sm:h-[400px] md:h-[380px] bg-gray-700 rounded-md mb-4"></div>
      </div>
      
      {/* Content skeleton */}
      <div className="w-full md:w-2/5">
        <div className="h-8 bg-gray-700 rounded mb-4 w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded mb-2 w-full"></div>
        <div className="h-4 bg-gray-700 rounded mb-2 w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded mb-6 w-4/6"></div>
        
        {/* Tags skeleton */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="h-6 bg-gray-700 rounded w-16"></div>
          <div className="h-6 bg-gray-700 rounded w-20"></div>
          <div className="h-6 bg-gray-700 rounded w-24"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="h-10 bg-gray-700 rounded w-32"></div>
      </div>
    </div>
  </div>
);

export default Skeleton;