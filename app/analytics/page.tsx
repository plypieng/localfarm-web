import { DashboardHeader } from "@/components/DashboardHeader";
import { AnalyticsCharts } from "@/components/AnalyticsCharts";
import { AnalyticsFilters } from "@/components/AnalyticsFilters";
import { CostRevenueAnalysis } from "@/components/CostRevenueAnalysis";
import { YieldComparisonTable } from "@/components/YieldComparisonTable";

export default function AnalyticsPage() {
  return (
    <div className="container mx-auto py-6 px-4 space-y-6">
      <DashboardHeader 
        title="Detailed Farm Analytics" 
        subtitle="Historical data analysis and performance metrics"
      />
      
      <AnalyticsFilters />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Historical Yield Analysis</h2>
          <div className="h-80">
            <AnalyticsCharts chartType="yield" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Climate Impact Analysis</h2>
          <div className="h-80">
            <AnalyticsCharts chartType="climate" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Cost vs. Revenue Analysis</h2>
          <CostRevenueAnalysis />
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Crop Yield Comparison</h2>
          <YieldComparisonTable />
        </div>
      </div>
    </div>
  );
}
