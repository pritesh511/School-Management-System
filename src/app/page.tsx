import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import LandingPageHeader from "@/components/landigPage/LandingPageHeader";
import ContactUs from "@/components/landigPage/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <LandingPageHeader />

      {/* Hero Section */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto">
          <img
            src="https://aws.vedmarg.com/wp-content/uploads/2022/09/ved-blog-1.png"
            alt="School Management"
            className="mx-auto mb-8 max-w-md"
          />
          <h2 className="text-4xl font-bold mb-4">Welcome to EduTrack</h2>
          <p className="text-lg text-gray-600 mb-8">
            Streamlining education with modern solutions.
          </p>
          <Link href={"/signup"}>
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-8">About Us</h3>
          <p className="text-lg text-gray-700">
            We provide comprehensive educational management solutions that
            simplify administrative processes and enhance learning outcomes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-8">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Student Management",
                description:
                  "Manage student records, attendance, and performance.",
                icon: "https://cdn-icons-png.flaticon.com/512/271/271229.png",
              },
              {
                title: "Teacher Scheduling",
                description:
                  "Schedule classes and manage teacher workloads efficiently.",
                icon: "https://cdn-icons-png.flaticon.com/512/3176/3176361.png",
              },
              {
                title: "Parent Communication",
                description:
                  "Enhance communication between schools and parents.",
                icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center shadow-md hover:shadow-lg transition"
              >
                <CardContent>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="mx-auto mb-4 w-20"
                  />
                  <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-3xl font-bold mb-8">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              "Streamlined our school processes!",
              "Amazing features and support!",
              "Highly recommended!",
            ].map((testimonial, index) => (
              <blockquote
                key={index}
                className="bg-white p-6 rounded shadow-md flex flex-col items-center"
              >
                <Image
                  className="mb-4 rounded-md"
                  src={"/assets/testimonial_avtar.jpg"}
                  alt="Testimonial-image"
                  width={80}
                  height={80}
                />
                <p className="text-gray-600">“{testimonial}”</p>
                <footer className="mt-4 text-sm text-gray-500">
                  - Satisfied User
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-6">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} EduTrack. All rights reserved.</p>
      </footer>
    </div>
  );
}
