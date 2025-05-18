import { DashboardHeader } from "@/components/DashboardHeader";
import { WebChatInterface } from "@/components/WebChatInterface";
import { ChatSidebar } from "@/components/ChatSidebar";

export default function ChatPage() {
  return (
    <div className="container mx-auto py-6 px-4 space-y-6">
      <DashboardHeader 
        title="AI Farming Assistant" 
        subtitle="Get strategic farming advice and planning assistance"
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[700px] flex flex-col">
            <WebChatInterface />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <ChatSidebar />
        </div>
      </div>
    </div>
  );
}
