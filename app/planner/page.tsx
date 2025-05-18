import { DashboardHeader } from "@/components/DashboardHeader";
import { MapPlanner } from "@/components/MapPlanner";
import { CropSelectionPanel } from "@/components/CropSelectionPanel";
import { OptimizationSettings } from "@/components/OptimizationSettings";

export default function PlannerPage() {
  return (
    <div className="container mx-auto py-6 px-4 space-y-6">
      <DashboardHeader 
        title="Generative AI Crop Layout Planner" 
        subtitle="Design and optimize your farm layout with AI-powered recommendations"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="h-[600px]">
              <MapPlanner />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <CropSelectionPanel />
          <OptimizationSettings />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">AI-Generated Layout Suggestions</h2>
        <div className="p-4 bg-green-50 border border-green-100 rounded-lg">
          <div className="flex items-start">
            <div className="bg-green-100 p-2 rounded-full text-green-700 mr-3">
              🤖
            </div>
            <div>
              <h3 className="font-medium">Optimized Crop Rotation Plan</h3>
              <p className="text-sm my-2">
                Based on your soil analysis and crop history, I recommend rotating rice in fields A and B, 
                while dedicating field C to mixed vegetables this season. This rotation will help restore 
                nitrogen levels and reduce pest pressure from last year.
              </p>
              <p className="text-sm text-green-700 font-medium">
                Expected yield increase: 12-15% compared to current layout
              </p>
              <div className="mt-3 flex space-x-2">
                <button className="bg-primary-600 text-white px-3 py-1 rounded text-sm">
                  Apply to Map
                </button>
                <button className="bg-white border border-gray-300 px-3 py-1 rounded text-sm">
                  Modify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
