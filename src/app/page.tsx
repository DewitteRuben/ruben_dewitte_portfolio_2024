import {
  FaEnvelope,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { getContent } from "./db/content";
import Link from "next/link";
import DarkModeToggle from "./components/darkmode";

export default function Home() {
  const allBlogs = getContent(["personal-projects"]);

  return (
    <section>
      <div className="flex flex-row flex-wrap">
        <img
          className="w-44 h-44 mb-8 ml-auto mr-auto sm:mb-0 sm:ml-0 sm:mr-0 sm:w-32 sm:h-32 rounded-full"
          src="/images/circular_profile.jpg"
          alt="Rounded avatar"
        />
        <div className="sm:ml-8 relative">
          <h1 className="text-2xl font-medium tracking-tighter">
            hoi, I'm Ruben 👋
            <span className="block text-slate-500 dark:text-neutral-400 font-normal text-lg mt-2">
              A Belgian software developer based in NL
            </span>
          </h1>
          <div className="prose prose-neutral dark:prose-invert">
            <div className="flex text-base">
              <a
                href="mailto:rubendewitte1998@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <FaEnvelope />
                  <span className="ml-2 mr-4">Email</span>
                </div>
              </a>
              <a
                href="/resume_dutch.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <FaLink />
                  <span className="ml-2 mr-4">Resume (Dutch)</span>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/rubendewitte/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <FaLinkedin />
                  <span className="ml-2 mr-4">LinkedIn</span>
                </div>
              </a>
              <a
                href="https://github.com/DewitteRuben"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center">
                  <FaGithub />
                  <span className="ml-2 mr-4">Github</span>
                </div>
              </a>
            </div>
          </div>
          <DarkModeToggle />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a passionate and dedicated software developer with a strong
          background in both frontend and backend development. My career has
          been driven by a commitment to creating impactful solutions that make
          a difference.
        </p>
      </div>
    </section>
  );
}
