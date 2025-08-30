import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/about/800/600" 
              alt="Tim SSDI" 
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-4">Tentang SSDI</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Lembaga Sistem dan Sumber Daya Informasi (SSDI) adalah unit pusat yang bertanggung jawab atas perencanaan, pengembangan, pengelolaan, dan pemeliharaan seluruh infrastruktur dan sistem teknologi informasi di Universitas Nahdlatul Ulama Al Ghazali (UNUGHA) Cilacap.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Visi Kami</h3>
                <p className="text-gray-600">Menjadi pusat teknologi informasi yang inovatif dan terdepan dalam mendukung tridharma perguruan tinggi dan mewujudkan smart campus.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-dark mb-2">Misi Kami</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Menyediakan layanan IT yang prima dan andal.</li>
                  <li>Mengembangkan sistem informasi yang terintegrasi.</li>
                  <li>Memastikan keamanan data dan informasi akademik.</li>
                  <li>Mendorong pemanfaatan teknologi untuk inovasi pembelajaran.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;