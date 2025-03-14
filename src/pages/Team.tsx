import { useEffect } from "react";
import TeamMember from "@/components/ui/TeamMember";

// Import images for each team member (ensure filenames match exactly)
import weerapatImg from "../img/Weerapat.jpg";
import patanakiatImg from "../img/Patanakiat.jpg";
import waravitImg from "../img/Waravit.jpg";
import sastrasilpImg from "../img/Sastrasilp.jpg";
import phiyadaImg from "../img/Phiyada.jpg";
import chidchanokImg from "../img/Chidchanok.jpg";
import penthipImg from "../img/Penthip.jpg";
import manussanunImg from "../img/Manussanun.jpg";

const Team = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 text-gray-900 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-scoop-600 to-scoop-500 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              The passionate individuals behind ScoopLearn who are dedicated to revolutionizing education.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-gray-900 mb-12 text-center">Leadership</h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
              <TeamMember
                name="Weerapat Khankaew"
                position="Chief Executive Officer"
                image={weerapatImg}
                delay={0.1}
              />
              <TeamMember
                name="Patanakiat Onsiri"
                position="Chief Technology Officer"
                image={patanakiatImg}
                delay={0.2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-3 text-gray-900 mb-12 text-center">Management Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <TeamMember
              name="Waravit Siri-ittiwong"
              position="Marketing Manager"
              image={waravitImg}
              delay={0.1}
            />
            <TeamMember
              name="Sastrasilp Pongsud"
              position="Smart Learning Application Manager"
              image={sastrasilpImg}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="heading-3 text-gray-900 mb-12 text-center">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Phiyada Samong"
              position="Data Analyst"
              image={phiyadaImg}
              delay={0.1}
            />
            <TeamMember
              name="Chidchanok Phaingam"
              position="Accountant"
              image={chidchanokImg}
              delay={0.2}
            />
            <TeamMember
              name="Penthip Pongsuea"
              position="Human Resource"
              image={penthipImg}
              delay={0.3}
            />
            <TeamMember
              name="Manussanun Anon"
              position="Public Relations"
              image={manussanunImg}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h2 className="heading-3 text-gray-900 mb-4">Join Our Team</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals who are passionate about education and technology. Check our careers page for current openings.
            </p>
            <button className="bg-scoop-500 hover:bg-scoop-600 text-white py-2 px-6 rounded-md font-medium transition-colors duration-200">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
