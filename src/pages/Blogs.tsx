import React from "react";
import { Search } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";

const PetBlog: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-6 py-4">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Pet Blog", href: "/blog/pet" },
          ]}
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8 flex-1">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Articles */}
          <main className="lg:w-2/3 space-y-8">
            {/* Article 1  */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://www.northamericanexec.com/wp-content/uploads/sites/13/2024/12/ai_business_growth_2025.png"
                    alt="5 Ways AI Is Revolutionizing Business in 2025"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                      Transforming Business Growth
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
                    5 Ways AI Is Revolutionizing Business in 2025
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                     In 2025, AI has become a core driver of business success, going beyond automation to support 
               predictive analytics, customer support, fraud detection, and personalized experiences.
               Companies use AI to make smarter decisions, reduce manual work, and innovate faster — making it a
                strategic must-have, not just a tech trend.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">ISLAM H RAULA</span>
                    <span className="mx-2">•</span>
                    <span>AUGUST 18, 2025</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Article 2 - Dog Shampoo */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGm5ce_O_JIl0vptpDqzELYWccmlTrxmSgA&s"
                    alt=" Shaping Tomorrow’s Software"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                      Shaping Tomorrow’s Software
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
                    The Future of SaaS: Trends You Can’t Ignore
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    In 2025, intelligent automation combines AI and automation to speed up workflows and reduce human errors. 
                  It helps businesses save costs by automating repetitive tasks like document processing and approvals.
                  This technology enables companies to scale efficiently without increasing staff. Overall, it boosts productivity while
                   cutting operational expenses.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">ISLAM H RAULA</span>
                    <span className="mx-2">•</span>
                    <span>AUGUST 18, 2025</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Article 3 - Dog Bags */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://cdn.prod.website-files.com/6448bf6f064020ce1b2ca19d/65574e135bc9d86536302abe_intelligent-automation123456765432-min.jpg"
                    alt="Efficiency Through Automation"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                      Efficiency Through Automation
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
                    How Intelligent Automation Saves Time and Costs
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                     Intelligent automation (IA) combines artificial intelligence (AI) technologies with robotic process automation (RPA) to 
                streamline and optimize business operations.
                 In 2025, IA is becoming a critical driver of efficiency and cost savings for companies across industries.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">ISLAM H RAULA</span>
                    <span className="mx-2">•</span>
                    <span>AUGUST 18, 2025</span>
                  </div>
                </div>
              </div>
            </article>

            {/* Article 4 - Biodegradable Waste Bags */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://www.hanbury-autogil.co.uk/wp-content/uploads/2021/09/3-Effective-Ways-to-Assure-Business-Agility-01-696x392-1.jpg"
                    alt="Adaptive, Secure Operations"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                      Adaptive, Secure Operations
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
                    Business Agility and Compliance
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Intelligent Automation enables businesses to adapt quickly to changing market 
                 demands by streamlining workflows and ensuring consistent adherence to regulatory requirements. 
                 Automated audit trails and compliance checks reduce risk and enhance transparency.
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="font-medium">ISLAM H RAULA</span>
                    <span className="mx-2">•</span>
                    <span>AUGUST 18, 2025</span>
                  </div>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-6">
            {/* Search */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative">
                <input
                  type="text"
                  placeholder="products..."
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-sm transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Recent Posts */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Posts</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <img
        src="https://www.northamericanexec.com/wp-content/uploads/sites/13/2024/12/ai_business_growth_2025.png"
        alt="5 Ways AI Is Revolutionizing Business in 2025"
        className="w-full h-28 object-cover rounded mb-2"
      />
      <h4 className="text-xs font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
        5 Ways AI Is Revolutionizing Business in 2025.
      </h4>
    </div>

    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpGm5ce_O_JIl0vptpDqzELYWccmlTrxmSgA&s"
        alt="Shaping Tomorrow’s Software"
        className="w-full h-28 object-cover rounded mb-2"
      />
      <h4 className="text-xs font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
       The Future of SaaS: Trends You Can’t Ignore
      </h4>
    </div>

    <div>
      <img
        src="https://cdn.prod.website-files.com/6448bf6f064020ce1b2ca19d/65574e135bc9d86536302abe_intelligent-automation123456765432-min.jpg"
        alt="Efficiency Through Automation"
        className="w-full h-28 object-cover rounded mb-2"
      />
      <h4 className="text-xs font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
        How Intelligent Automation Saves Time and Costs
      </h4>
    </div>

    <div>
      <img
        src="https://www.hanbury-autogil.co.uk/wp-content/uploads/2021/09/3-Effective-Ways-to-Assure-Business-Agility-01-696x392-1.jpg"
        alt="Adaptive, Secure Operationss"
        className="w-full h-28 object-cover rounded mb-2"
      />
      <h4 className="text-xs font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
        The 7 Best Biodegradable Dog Waste Bags in 2025
      </h4>
    </div>
  </div>
</div>


            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
                    Shaping Tomorrow’s Software
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
                    Adaptive, Secure Operations
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PetBlog;
