const team = [
  {
    name: 'Fatima Ahmad Usman',
    role: 'CEO & Founder',
    image: '/img/fatima.jpg', // Replace with real image later
  },
  {
    name: 'Adamu Ahmad',
    role: 'Secretary',
    image: '/img/adamu.jpg', // Replace with real image later
  },
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-14">
          Our Leadership
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            <div 
              key={index}
              className="relative bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md w-[280px] pt-16 pb-6 flex flex-col items-center"
            >
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute -top-12 w-24 h-24 object-cover object-center rounded-full border-4 border-white dark:border-gray-900 shadow-md"
              />
              
              {/* Content */}
              <div className="text-center mt-2">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
