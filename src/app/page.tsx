import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const apps = [
  {
    name: "Pianuance",
    description: "Sheet music that listens while you practise piano.",
    icon: "/images/project/pianuance/icon.png",
    href: "/project/pianuance",
  },
  {
    name: "PSSD Connect",
    description: "A calm place for people with PSSD to meet.",
    icon: "/images/project/pssd-connect-2026/icon.png",
    href: "/project/pssd-connect",
  },
  {
    name: "Wietly",
    description: "A social map for cannabis lovers.",
    icon: "/images/project/wietly/icon.png",
    href: "/project/wietly",
  },
];

const work = [
  { company: "Rabobank", role: "DevOps engineer", years: "2024 — now" },
  { company: "FrontValue", role: "Consultant", years: "2024 — now" },
  { company: "Record Evolution", role: "Lead developer", years: "2020 — 2024" },
  { company: "Intracto", role: "Frontend developer", years: "2019 — 2020" },
];

const socials = [
  { href: "mailto:rubendewitte1998@gmail.com", label: "Email", Icon: FaEnvelope },
  { href: "https://github.com/DewitteRuben", label: "GitHub", Icon: FaGithub },
  { href: "https://www.linkedin.com/in/rubendewitte/", label: "LinkedIn", Icon: FaLinkedin },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <section className="flex flex-col gap-14">
      <div>
        <Image
          src="/images/circular_profile.jpg"
          alt="Ruben Dewitte"
          width={72}
          height={72}
          priority
          className="mb-6 h-[72px] w-[72px] rounded-full"
        />
        <h1 className="text-2xl font-medium tracking-tighter">hoi, I'm Ruben 👋</h1>
        <div className="mt-4 space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
          <p>
            I'm a software developer from Belgium, living in the Netherlands. I
            build web and mobile apps, from the interface down to the servers
            they run on.
          </p>
          <p>
            By day I'm a DevOps engineer at Rabobank, as a consultant for{" "}
            <a className="link-underline" href="https://frontvalue.nl" target="_blank" rel="noopener noreferrer">
              FrontValue
            </a>
            . In my own time I run{" "}
            <a className="link-underline" href="https://hololabs.rubendewitte.com" target="_blank" rel="noopener noreferrer">
              Holo Labs
            </a>
            , a small studio where I make my own apps.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              <Icon aria-hidden /> {label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>apps I'm building</SectionTitle>
        <div className="-mx-3 flex flex-col">
          {apps.map((app) => (
            <Link
              key={app.name}
              href={app.href}
              className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-900"
            >
              <Image src={app.icon} alt="" width={44} height={44} className="h-11 w-11 rounded-[10px]" />
              <div className="min-w-0 flex-1">
                <p className="font-medium">{app.name}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{app.description}</p>
              </div>
              <FaArrowRight
                aria-hidden
                className="text-sm text-neutral-400 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>work</SectionTitle>
        <ul className="flex flex-col">
          {work.map((job) => (
            <li
              key={job.company}
              className="flex items-baseline gap-3 border-b border-neutral-100 py-3 last:border-0 dark:border-neutral-800/70"
            >
              <span className="font-medium">{job.company}</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">{job.role}</span>
              <span className="ml-auto whitespace-nowrap text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
                {job.years}
              </span>
            </li>
          ))}
        </ul>
        <Link
          href="/work"
          className="mt-3 inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          more about my work <FaArrowRight aria-hidden className="text-xs" />
        </Link>
      </div>
    </section>
  );
}
