import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const numberOfParticles = 80;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
      }

      update() {
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        this.x += this.speedX;
        this.y += this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    init();

    const connect = () => {
        if (!ctx) return;
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    opacityValue = 1 - (distance / 100);
                    ctx.strokeStyle = 'rgba(255, 255, 255,' + opacityValue + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setCanvasSize();
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center animate-kenburns" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}></div>
      <div className="absolute inset-0 bg-dark opacity-70"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-10"></canvas>
      <div className="relative z-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight drop-shadow-lg animate-fadeInUp">
          Mendorong Inovasi Digital di Kampus
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-neutral-200 drop-shadow-md animate-fadeInUp animation-delay-200">
          Lembaga Sistem dan Sumber Daya Informasi (SSDI) berkomitmen untuk menyediakan infrastruktur dan layanan teknologi informasi yang andal dan modern bagi seluruh civitas akademika.
        </p>
        <a 
          href="#services" 
          onClick={scrollToServices}
          className="bg-accent hover:bg-lime-600 text-dark font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block animate-fadeInUp animation-delay-400"
        >
          Jelajahi Layanan Kami
        </a>
      </div>
    </section>
  );
};

export default Hero;