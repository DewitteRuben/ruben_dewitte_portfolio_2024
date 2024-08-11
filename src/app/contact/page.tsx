export const metadata = {
  title: "Contact",
  description:
    "If you have any questions or would like to connect, you can contact me!",
};

export default function Contact() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter">contact</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          If you have any questions or would like to connect, you can contact me
          through the following options.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <span className="font-semibold text-l">Email</span>
            <a target="_blank" href="mailto:rubendewitte1998@gmail.com">
              rubendewitte1998@gmail.com
            </a>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-l">Twitter</span>
            <a target="_blank" href="https://twitter.com/Holo__LoL">
              @Holo__LoL
            </a>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-l">GitHub</span>
            <a target="_blank" href="https://github.com/DewitteRuben">
              git/DewitteRuben
            </a>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-l">LinkedIn</span>
            <a target="_blank" href="https://www.linkedin.com/in/rubendewitte/">
              in/rubendewitte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
