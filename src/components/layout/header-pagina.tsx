interface HeaderPaginaProps {
  titulo: string;
  subtitulo: string;
  titleClass: string;
  subtitleClass: string;
}

export default function HeaderPagina({
  titulo,
  subtitulo,
  titleClass,
  subtitleClass,
}: HeaderPaginaProps) {
  return (
    <div className="px-6 pt-24">
      <h1 className={`${titleClass} text-white text-3xl`}>
        {titulo}
      </h1>

      <p
        className={`${subtitleClass} text-white/80 mt-2 text-sm`}
      >
        {subtitulo}
      </p>
    </div>
  );
}