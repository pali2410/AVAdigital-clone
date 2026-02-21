import React from 'react';

const teamMembers = [
    { name: 'ILYA GOROSH', role: 'AVA DIGITAL ART DIRECTOR', image: 'https://picsum.photos/400/500?grayscale&random=1' },
    { name: 'NIKITA RYZH', role: 'CEO OF AVA DIGITAL', image: 'https://picsum.photos/400/500?grayscale&random=2' },
    { name: 'DENIS FED', role: 'AVA DIGITAL DESIGNER', image: 'https://picsum.photos/400/500?grayscale&random=3' },
    { name: 'POLINA POD', role: 'AVA DIGITAL PROJECT MANAGER', image: 'https://picsum.photos/400/500?grayscale&random=4' },
];

export const Team: React.FC = () => {
  return (
    <section className="bg-[#e8e8e3] py-24 border-t border-black">
        <div className="container mx-auto px-6">
            <div className="flex justify-between items-end mb-16">
                 <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Our Team</h2>
                 <div className="font-mono text-xs mb-4 max-w-xs text-right hidden md:block">
                     [ 11 YEARS OF ENTREPRENEURSHIP ]<br/>
                     [ 50+ SALES ]<br/>
                     [ 500+ STUDENTS ]
                 </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {teamMembers.map((member, idx) => (
                    <div key={idx} className="group relative cursor-pointer">
                        <div className="aspect-[3/4] overflow-hidden bg-gray-300 relative">
                             <img 
                                src={member.image} 
                                alt={member.name} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale contrast-125"
                             />
                             <div className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-20 mix-blend-multiply transition-opacity duration-300"></div>
                             
                             {/* Hover Overlay Tech Elements */}
                             <div className="absolute top-2 left-2 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                             <div className="absolute top-2 right-2 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                             <div className="absolute bottom-2 left-2 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                             <div className="absolute bottom-2 right-2 w-2 h-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <div className="mt-4 border-t border-black pt-2 flex justify-between items-start">
                            <div>
                                <h3 className="font-bold text-sm uppercase">{member.name}</h3>
                                <p className="font-mono text-[10px] text-gray-600 mt-1 uppercase">{member.role}</p>
                            </div>
                            <span className="text-xl leading-none">+</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};