import logo1 from "../../assets/logo-1.svg";
import logo2 from "../../assets/logo-2.svg";
import logo3 from "../../assets/logo-3.svg";
import logo4 from "../../assets/logo-4.svg";
import logo5 from "../../assets/logo-5.svg";
import logo6 from "../../assets/logo-6.svg";

export default function TrustBadges() {
  const logos = [
    { src: logo1, alt: "Brand A" },
    { src: logo2, alt: "Brand B" },
    { src: logo3, alt: "Brand C" },
    { src: logo4, alt: "Brand D" },
    { src: logo5, alt: "Brand E" },
    { src: logo6, alt: "Brand F" },
  ];

  return (
    <section className="container-p py-10">
      <p className="text-center text-sm uppercase tracking-wide text-neutral-500 dark:text-neutral-300">
        受到這些團隊信賴
      </p>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-80">
        {logos.map((l) => (
          <img
            key={l.alt}
            src={l.src}
            alt={l.alt}
            loading="lazy"
            className="h-8 mx-auto dark:invert"
          />
        ))}
      </div>
    </section>
  );
}
