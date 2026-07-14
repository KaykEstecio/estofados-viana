const steps = [
  ["01", "Atendimento", "Você envia medidas, fotos e referências para entendermos o que procura."],
  ["02", "Definição", "Alinhamos desenho, proporções e acabamento conforme o ambiente."],
  ["03", "Produção", "A peça é preparada de acordo com as escolhas combinadas no atendimento."],
  ["04", "Entrega", "Entrega ou instalação é combinada para cada projeto."],
];

export function Process() {
  return (
    <section id="processo" className="bg-coffee py-20 text-cream sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_2fr]">
          <div><p className="editorial-label text-caramel">Como funciona</p><h2 className="font-display mt-4 text-5xl font-medium leading-[0.94]">Do primeiro contato à peça pronta.</h2></div>
          <ol className="grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([number, title, text]) => <li key={number} className="border-b border-cream/20 py-7 sm:px-5 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"><span className="editorial-label text-caramel">{number}</span><h3 className="font-display mt-8 text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-linen">{text}</p></li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
