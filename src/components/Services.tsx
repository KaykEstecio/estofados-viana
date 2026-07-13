import { services } from "../data/services";

export function Services() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_2fr]"><div><p className="editorial-label text-caramel">Possibilidades</p><h2 className="font-display mt-4 text-4xl font-medium">Para além da cama.</h2></div><div className="grid border-t border-line sm:grid-cols-2">{services.slice(4).map((service) => <article key={service.title} className="border-b border-line py-7 sm:px-6 sm:[&:nth-child(odd)]:border-r"><h3 className="font-display text-2xl">{service.title}</h3><p className="mt-3 text-sm leading-6 text-coffee">{service.description}</p></article>)}</div></div>
      </div>
    </section>
  );
}
