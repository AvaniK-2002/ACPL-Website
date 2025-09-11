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
            {/* Article 1 - Cat Beds */}
            <article className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src="https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Organic cotton cat beds with cats sleeping"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                      
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
                    5 Ways AI Is Revolutionizing Business in 2025
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    Nearly 70% of pet owners in the United States worry about chemicals in pet products. This worry is making them choose natural options like Organic Cotton Cat Beds. This article is a U.S.-focused product review. It rounds up five vetted...
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
                    src="https://images.pexels.com/photos/6131071/pexels-photo-6131071.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Natural eco-friendly dog shampoo bottle"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                      Dog Products
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
                    A Beginner's Guide to Choosing a Natural, Eco-Friendly Dog Shampoo
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    As a dog owner, you want the best for your furry friend. This includes the products you use on them. Choosing a natural, eco-friendly dog shampoo is good for your dog's health and the planet. Many dog shampoos have harsh...
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
                    src="https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Compostable and biodegradable dog waste bags"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                      Dog Products
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
                    Compostable vs. Biodegradable Dog Bags: What's the Real Difference?
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    If you have a pet, you know how important it is to take care of the environment. You might wonder about the difference between compostable and biodegradable dog bags. These terms are often mixed up, but they really matter for...
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
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Best biodegradable dog waste bags in natural setting"
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase tracking-wide font-semibold">
                      Dog Products
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-green-600 cursor-pointer transition-colors">
                    The 7 Best Biodegradable Dog Waste Bags in 2025
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    As a pet owner, you know plastic dog waste bags harm the environment. We're looking at the best biodegradable dog waste bags for 2025. This will help you pick eco-friendly pet waste bags wisely, making better choices, making it...
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
                  placeholder="Cat Products..."
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
              <div className="space-y-4">
                <div className="flex gap-3">
                  <img
                    src="https://images.pexels.com/photos/1404819/pexels-photo-1404819.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Cat beds"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
                      Top 5 Organic Cotton Cat Beds Your Cat Will Actually Sleep In
                    </h4>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img
                    src="https://images.pexels.com/photos/6131071/pexels-photo-6131071.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Dog shampoo"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
                      A Beginner's Guide to Choosing a Natural, Eco-Friendly Dog Shampoo
                    </h4>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img
                    src="https://images.pexels.com/photos/4498151/pexels-photo-4498151.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Dog waste bags"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
                      Compostable vs. Biodegradable Dog Bags: What's the Real Difference?
                    </h4>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img
                    src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Biodegradable bags"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900 hover:text-green-600 cursor-pointer transition-colors">
                      The 7 Best Biodegradable Dog Waste Bags in 2025
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
                    Cat Products
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
                    Dog Products
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
