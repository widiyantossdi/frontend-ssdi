import React, { useState } from 'react';

type FormErrors = {
  name: string;
  phone: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    phone: '',
    message: '',
  });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = { name: '', phone: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Nama lengkap wajib diisi.';
      isValid = false;
    }

    if (formData.phone && !/^\d{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Format nomor telepon tidak valid (minimal 10 digit angka).';
      isValid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan harus berisi minimal 10 karakter.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
        setErrors(prevErrors => ({
          ...prevErrors,
          [name]: '',
        }));
      }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    const targetNumber = '6285647818779';
    // Enhanced message formatting for better readability on WhatsApp
    let messageBody = `Halo SSDI, saya ingin bertanya.\n\n*Nama:*\n${formData.name.trim()}\n\n`;

    if (formData.phone.trim()) {
      messageBody += `*Nomor Telepon:*\n${formData.phone.trim()}\n\n`;
    }

    messageBody += `*Pesan:*\n${formData.message.trim()}`;

    const encodedMessage = encodeURIComponent(messageBody);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${targetNumber}&text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');

    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-neutral" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 id="contact-heading" className="text-3xl font-bold text-primary">Hubungi Kami</h2>
          <p className="text-gray-600 mt-2">Kami siap membantu Anda. Kunjungi kami atau kirim pesan cepat melalui formulir di bawah ini.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 bg-white p-8 md:p-10 rounded-lg shadow-xl">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-dark mb-6">Informasi Kontak</h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div>
                  <h4 className="font-semibold text-dark">Alamat</h4>
                  <p>Gedung AlGhozali 2 Lt. 1 No 106, Universitas Nahdlatul Ulama Al Ghazali<br/>Jl. Kemerdekaan Barat No.17, Kesugihan, Cilacap, Jawa Tengah</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <div>
                  <h4 className="font-semibold text-dark">Email Helpdesk</h4>
                  <a href="mailto:helpdesk.ssdi@unugha.ac.id" className="hover:underline text-primary">helpdesk.ssdi@unugha.ac.id</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <div>
                  <h4 className="font-semibold text-dark">Telepon</h4>
                  <p>(0282) 123-456 ext. 101</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-dark mb-6">Kirim Pesan Cepat</h3>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-primary'}`} placeholder="Contoh: Budi Santoso" aria-invalid={!!errors.name} aria-describedby="name-error" />
                {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon (Opsional)</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-primary'}`} placeholder="Untuk kami hubungi kembali" aria-invalid={!!errors.phone} aria-describedby="phone-error" />
                {errors.phone && <p id="phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan Anda</label>
                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className={`w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition ${errors.message ? 'border-red-500' : 'border-gray-300 focus:border-primary'}`} placeholder="Tuliskan pertanyaan atau pesan Anda di sini..." aria-invalid={!!errors.message} aria-describedby="message-error"></textarea>
                {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>}
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center items-center gap-3 bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.586-1.457l-6.303 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.803 6.122l-.266 1.417.935.932.413-.043z"/></svg>
                  Kirim via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 bg-white p-4 rounded-lg shadow-xl overflow-hidden">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.512613583592!2d109.1136618153631!3d-7.62768809450372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e656d00591b6e6b%3A0x4c44242ce97b2046!2sUniversitas%20Nahdlatul%20Ulama%20Al%20Ghazali%20(UNUGHA)%20Cilacap!5e0!3m2!1sen!2sid!4v1718873491238!5m2!1sen!2sid"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi UNUGHA Cilacap"
            ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Contact;