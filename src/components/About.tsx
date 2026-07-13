export function About() {
  return (
    <section id="sobre" className="bg-linen py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <figure className="image-wash min-h-[460px]"><img src="/images/about/artesao-estofando.png" alt="Mãos trabalhando no acabamento de uma peça estofada" className="h-full w-full object-cover" /><figcaption className="absolute bottom-4 left-4 z-10 bg-[#f5f0e9]/90 px-3 py-2 text-[0.58rem] uppercase tracking-[0.12em] text-[#302720]">Imagem ilustrativa</figcaption></figure>
        <div className="flex flex-col justify-center lg:pl-10"><p className="editorial-label text-caramel">Aconche Decor</p><h2 className="font-display mt-4 text-5xl font-medium leading-[0.94] sm:text-6xl">O cuidado aparece no conjunto.</h2><p className="mt-8 text-base leading-8 text-coffee">Somos especializados em camas, cabeceiras e estofados personalizados. O atendimento começa pela escuta: entendemos o ambiente, as referências e as necessidades de cada projeto.</p><p className="mt-5 text-base leading-8 text-coffee">Nosso objetivo é criar uma peça coerente com o espaço e com a forma como você deseja viver nele.</p><div className="mt-10 border-t border-line pt-6"><p className="editorial-label text-coffee">Atendimento</p><p className="mt-2 font-display text-2xl">Grande São Paulo</p></div></div>
      </div>
    </section>
  );
}
