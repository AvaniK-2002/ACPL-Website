import { Brain, Route, Package, BarChart3 } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";
import bgImage from "../assets/images/bg.jpeg";

function App() {
  const features = [
    {
      id: "01",
      icon: BarChart3,
      title: "Machine Learning & Predictive Analytics",
      description:
        "Turn data into actionable insights.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "02",
      icon: Route,
      title: "Natural Language Processing (NLP)",
      description:
        "Understand and interact with your customers seamlessly.",
      gradient: "from-teal-500 to-purple-600",
    },
    {
      id: "03",
      icon: Package,
      title: "AI Process Automation",
      description:
        "Automate repetitive tasks and reduce operational costs.",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      id: "04",
      icon: Brain,
      title: "Custom AI Development",
      description: "Tailored AI tools to suit your business goals.",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Hero / Heading Section */}
      <section
  className="relative pt-12 pb-10 bg-cover bg-center text-white"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 "></div>

  <div className="relative container mx-auto px-6">
    {/* Breadcrumb (left aligned) */}
    <div className="mb-4">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
        ]}
      />
    </div>

    {/* Heading + Subtitle */}
    <div className="text-center mt-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-3">AI Solutions </h1>
      <p className="text-lg md:text-xl opacity-90">
        Harness the Power of Artificial Intelligence.
      </p>
    </div>
  </div>
</section>


      {/* Content */}
      <main className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI-Powered Logistics Solutions
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Transform your logistics operations with cutting-edge artificial
              intelligence and machine learning technologies designed for the
              modern supply chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                    index < 3 ? "lg:col-span-1" : ""
                  } ${
                    index === 6
                      ? "md:col-span-2 lg:col-span-1 xl:col-start-2"
                      : ""
                  }`}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">
                      {feature.id}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-100 to-teal-100 py-16">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
              Ready to Transform Your Logistics?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover how AI can revolutionize your supply chain operations and
              drive unprecedented efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-300 shadow-lg">
                Get Started Today
              </button>
              
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
