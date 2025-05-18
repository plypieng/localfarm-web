import { DashboardHeader } from "@/components/DashboardHeader";
import { CalendarView } from "@/components/CalendarView";
import { ScheduleSidebar } from "@/components/ScheduleSidebar";

export default function CalendarPage() {
  return (
    <div className="container mx-auto py-6 px-4 space-y-6">
      <DashboardHeader 
        title="Advanced Crop Scheduling" 
        subtitle="Plan and manage your farming activities"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <CalendarView />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <ScheduleSidebar />
        </div>
      </div>
    </div>
  );
}
