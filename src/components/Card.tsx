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
         <div className="bg-white flex flex-col border border-gray-300  overflow-hidden shadow-sm ">
      <div className="overflow-hidden shadow-xs aspect-[4/3] bg-gray-200">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover" /> 
      </div>

      <div className="pt-4 flex-1 flex flex-col justify-between p-6">
        <div>
          <h3 className="text-[18px] font-bold text-zinc-800 mb-0.5">{title}</h3>
          <p className="text-[13px] font-medium text-zinc-800 uppercase tracking-wider mb-3">{subtitle}</p>
          <p className="text-[14px] text-zinc-700 font-light leading-relaxed mb-4">{description}</p>
        </div>
        
        <a href={`https://${linkText}`} target="_blank" rel="noreferrer" className="text-blue-700 custom-project-link inline-block mt-auto align-bottom">
          {linkText}
        </a>
      </div>
    </div>
  );
}