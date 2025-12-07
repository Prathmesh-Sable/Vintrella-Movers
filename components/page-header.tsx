interface PageHeaderProps {
  title: string
  description: string
  backgroundImage?: string
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-primary" />

      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 font-serif">{title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  )
}
