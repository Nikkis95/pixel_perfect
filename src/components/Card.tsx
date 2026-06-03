import react from 'react';

interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    linkText: string;
    imageSrc: string;
}

export default function Card({ title, subtitle, description, linkText, imageSrc }: CardProps) {
    return (
         <div className="bg-white flex flex-col">
      <div className="border border-gray-200 overflow-hidden shadow-xs aspect-[4/3] bg-gray-50">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover object-top" /> // object-top för att hålla fokus på överdelen av bilden
      </div>

      <div className="pt-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[15px] font-bold text-zinc-800 mb-0.5">{title}</h3>
          <p className="text-[11px] font-medium text-gray-400 uppercase tracking-wider mb-3">{subtitle}</p>
          <p className="text-[13px] text-zinc-500 font-light leading-relaxed mb-4">{description}</p>
        </div>
        
        <a href={`https://${linkText}`} target="_blank" rel="noreferrer" className="custom-project-link inline-block mt-auto align-bottom">
          {linkText}
        </a>
      </div>
    </div>
  );
}