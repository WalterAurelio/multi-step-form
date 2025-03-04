interface TitleSubtitleProps {
  className?: string;
  title: string;
  subtitle: string;
}

function TitleSubtitle({ className, title, subtitle }: TitleSubtitleProps) {
  return (
    <div className={className}>
      <h1 className="text-2xl font-bold text-blue-custom mb-2">{title}</h1>
      <p className="text-grey-custom text-lg">{subtitle}</p>
    </div>
  )
}

export default TitleSubtitle;