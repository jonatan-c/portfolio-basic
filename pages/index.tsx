import Image from "next/image";
import { Inter } from "@next/font/google";
import { MainLayout } from "@/components/layouts/MainLayout";
import Skills from "@/components/Skills";
import awsImageBudget from "@/public/aws-certified-cloud-practitioner.png";
import linkedinIcon from "@/public/linkedin-icon.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className="relative min-h-screen bg-[#212121] text-[#ededed]">
          <div className="flex flex-col justify-center items-center w-[80%] mx-auto">
            <h1 className="pt-24 font-extrabold text-4xl lg:text-6xl">Jonatan Claros</h1>
            <div className="py-6 font-normal text-2xl text-center lg:text-center">
              Full stack developer  + 2 years of experience | React | Node | 1X AWS
            </div>
            <div className="py-6 font-normal text-2xl text-center lg:text-center">
              Indie creator | Solving problems with code
            </div>


            Certifications
            <div className="pb-4 mb-10 flex flex-row mt-6">
              <div>
                <a
                  href="https://www.credly.com/badges/41bb7ed9-02d4-4869-ac96-0a3539efe218/public_url"
                  target="_blank"
                >
                  <Image
                    src={awsImageBudget}
                    width={140}
                    height={140}
                    alt="awsImageBudget"
                    className="hover:opacity-50"
                  />
                </a>
              </div>
              <div className="opacity-30">

                <a
                // href=""
                // target="_blank"
                >
                  <Image
                    src="/aws-sa.png"
                    width={140}
                    height={140}
                    alt="AWS Solution Architect Associate"
                    className="hover:opacity-50 cursor-not-allowed"
                  />
                </a>
                <p className="text-xs">
                  Schedule 6/02/2024
                </p>
              </div>
            </div>

            <Skills />


            <div className="footer">
              <p className="text-center">Contact</p>
              <a
                href="https://www.linkedin.com/in/jonatan-claros/"
                target="_blank"
              >
                <Image
                  src={linkedinIcon}
                  width={100}
                  height={100}
                  alt="linkedinIcon"
                  className="hover:opacity-50 "
                  title="linkedin"
                />
              </a>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
