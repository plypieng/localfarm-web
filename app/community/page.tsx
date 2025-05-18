import { DashboardHeader } from "@/components/DashboardHeader";
import { KnowledgeSearch } from "@/components/KnowledgeSearch";
import { ArticleList } from "@/components/ArticleList";
import { FeaturedArticle } from "@/components/FeaturedArticle";

export default function CommunityPage() {
  return (
    <div className="container mx-auto py-6 px-4 space-y-6">
      <DashboardHeader 
        title="Community Knowledge Base" 
        subtitle="Local farming wisdom and shared expertise from Niigata farmers"
      />
      
      <KnowledgeSearch />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <FeaturedArticle />
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🌾</span>
                  <span className="font-medium">Rice Cultivation</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">24</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🌱</span>
                  <span className="font-medium">Sustainable Farming</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">18</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🌤️</span>
                  <span className="font-medium">Weather & Climate</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">15</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🧪</span>
                  <span className="font-medium">Soil Management</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">12</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">🚜</span>
                  <span className="font-medium">Equipment & Tech</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">10</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="block p-2 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <span className="mr-2 text-xl">💰</span>
                  <span className="font-medium">Business & Markets</span>
                  <span className="ml-auto bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs">9</span>
                </div>
              </a>
            </li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h3 className="text-md font-medium mb-3">Expert Contributors</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center mr-2">TY</div>
                <div>
                  <p className="font-medium text-sm">Tanaka Yamamoto</p>
                  <p className="text-xs text-gray-500">40+ years rice farming</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2">KS</div>
                <div>
                  <p className="font-medium text-sm">Keiko Sato</p>
                  <p className="text-xs text-gray-500">Agronomist, Niigata University</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mr-2">HN</div>
                <div>
                  <p className="font-medium text-sm">Hiroshi Nakamura</p>
                  <p className="text-xs text-gray-500">Organic farming specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ArticleList />
    </div>
  );
}
