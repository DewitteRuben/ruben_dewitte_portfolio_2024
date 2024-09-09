import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work experience and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        my work experience
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Driven by a love for creating things that matter, I work hard to make
          solutions that really make a difference. Here’s a look at my journey
          and what I’ve accomplished.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Record Evolution GmbH
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Lead Developer, Aug 2020 — Sep 2024
        </p>
        <p>
          I joined{" "}
          <a href="https://record-evolution.de/" target="_blank">
            Record Evolution GmbH
          </a>{" "}
          in August 2020 when I first arrived in Germany. During my time at RE,
          I played a pivotal role in designing the architecture for the Record
          Evolution IoT and data science platform.
        </p>
        <p>
          After a year and a half, I was promoted to Lead Developer following my
          consistent dedication, successful project management, and demonstrated
          technical expertise.
        </p>
        <h3>Key contributions</h3>
        <ul>
          <li>
            Led the development of the{" "}
            <a href="https://studio.ironflock.com" target="_blank">
              Record Evolution's IoT platform
            </a>{" "}
            using <strong>Scrum</strong> for task estimation and scheduling.
            Reviewed PRs, set up <strong>GitHub</strong> test automation, and
            mentored junior team members.
          </li>
          <li>
            Engineered an authentication server for a self-hosted{" "}
            <strong>Docker Registry</strong>, ensuring secure management of
            proprietary application images.
          </li>
          <li>
            Developed an{" "}
            <a
              href="https://github.com/RecordEvolution/DeviceManagementAgent"
              target="_blank"
            >
              open-source agent
            </a>{" "}
            application in <strong>Golang</strong> that uses{" "}
            <strong>Docker</strong> and <strong>WAMP</strong> technologies to
            facilitate connectivity to{" "}
            <a href="https://studio.ironflock.com" target="_blank">
              Record Evolution's IoT platform
            </a>{" "}
            . This agent automates the{" "}
            <strong>
              deployment, scaling, and management of containerized applications
              on Linux-based systems
            </strong>
            .
          </li>
          <li>
            Developed an{" "}
            <a
              href="https://github.com/RecordEvolution/REflasher"
              target="_blank"
            >
              open-source flashing tool
            </a>{" "}
            in <strong>Electron</strong> and <strong>Vue.js</strong>, to enable
            users to flash ISO files and proprietary images across Windows,
            macOS, and Linux, streamlining the installation process of Record
            Evolution’s custom operating system.
          </li>
          <li>
            Implemented a custom tunneling service in <strong>Golang</strong>{" "}
            using{" "}
            <a href="https://github.com/fatedier/frp" target="_blank">
              frp
            </a>
            , enabling end-users to initiate a reverse proxy on our backend via
            the frontend. Streamlined secure access to internal resources,
            enhancing accessibility and usability.
          </li>
          <li>
            Developed a Dockerized vehicle counting AI application in Python,
            utilizing{" "}
            <a href="https://www.ultralytics.com/" target="_blank">
              Ultralytics
            </a>{" "}
            and{" "}
            <a href="https://supervision.roboflow.com/latest/" target="_blank">
              Supervision
            </a>
            . Designed a user-friendly frontend and integrated custom mask
            drawing for precise zone-specific vehicle counting.
          </li>
        </ul>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Intracto</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Frontend Developer, Feb 2019 — May 2020
        </p>
        <p>
          Development of web and mobile applications for customers such as
          Janssen Pharmaceutica, Universal, Bayer and the Belgian post using
          technologies such as <strong>React.js</strong>, <strong>Redux</strong>
          , <strong>MobX</strong>, <strong>React Native</strong>,{" "}
          <strong>SASS</strong>, and <strong>Typescript</strong>.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Studio Hyperdrive
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Full-Stack Developer, Feb 2019 — May 2019
        </p>
        <p>
          Assisting development of ‘
          <a href="https://www.slimnaarantwerpen.be/en/home" target="_blank">
            Slim naar Antwerpen
          </a>
          ’ a custom built CMS system and platform that combines and presents
          route information for in and around Antwerp, monthly visited by
          10.000’s of users.
        </p>
      </div>
    </section>
  );
}
