import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Breadcrumb from "../components/ui/Breadcrumb";
import bgImage from '../assets/images/bg.jpeg'

const CaseStudy = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section with Breadcrumb */}
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
      <h1 className="text-4xl md:text-5xl font-bold mb-3">Case Studies </h1>
      <p className="text-lg md:text-xl opacity-90">
        Proven Success Across Industries


      </p>
    </div>
  </div>
</section>


      {/* Case Studies Grid */}
      <main className="container mx-auto px-6 py-12 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Case Study 1 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
              alt="AI Revolutionizing Business"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                AI Transforming Business Operations
              </h2>
              <p className="text-gray-600 text-sm">
                See how predictive analytics and intelligent automation improved
                efficiency for global enterprises.
              </p>
            </div>
          </div>

          {/* Case Study 2 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Future of SaaS"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                SaaS Innovations Driving Growth
              </h2>
              <p className="text-gray-600 text-sm">
                Learn how SaaS platforms empowered businesses with flexibility
                and scalability.
              </p>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80"
              alt="Intelligent Automation"
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                Cutting Costs with Automation
              </h2>
              <p className="text-gray-600 text-sm">
                Discover how automation saved time and reduced costs across
                multiple industries.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CaseStudy;
