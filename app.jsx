const { useState, useEffect } = React;
const { createClient } = window.supabase;

// ==========================================
// CONFIGURACIÓN DE SUPABASE
// ==========================================
// Reemplaza con tus credenciales de Supabase
const supabaseUrl = 'TU_SUPABASE_URL';
const supabaseKey = 'TU_SUPABASE_ANON_KEY';

// Evitamos que crashee si no has puesto tus credenciales reales aún
const isSupabaseConfigured = supabaseUrl !== 'TU_SUPABASE_URL' && supabaseUrl.startsWith('http');
const supabase = isSupabaseConfigured ? createClient(supabaseUrl, supabaseKey) : null;

// ==========================================
// ICONOS (SVG en lugar de Lucide para CDN)
// ==========================================
const Icons = {
  Rocket: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
  ),
  Code: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  ),
  Zap: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
  ),
  WhatsApp: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  ),
  Dollar: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  )
};

// ==========================================
// COMPONENTES
// ==========================================

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 glass border-b border-gray-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              E
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              Eterno<span className="text-primary">.</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#servicios" className="text-gray-600 hover:text-primary font-medium transition-colors">Servicios</a>
            <a href="#precios" className="text-gray-600 hover:text-primary font-medium transition-colors">Métodos de Pago</a>
            <a href="#contacto" className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
              Cotizar Proyecto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 border border-primary/20">
            Aceleramos tu negocio digital 🚀
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
            Sitios web y apps que <span className="gradient-text">venden por ti</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Diseñamos soluciones veloces, modernas y optimizadas para emprendedores y negocios locales. Entregas rápidas con flexibilidad de pago.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contacto" className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Iniciar Proyecto Ahora
            </a>
            <a href="#servicios" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-sm hover:shadow-md">
              Ver Servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Icons.Rocket />,
      title: 'Landing Pages',
      desc: 'Páginas de aterrizaje ultrarrápidas y optimizadas para máxima conversión. Perfectas para campañas y lanzamientos.',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
    {
      icon: <Icons.Code />,
      title: 'Web Apps',
      desc: 'Aplicaciones web a la medida con paneles de administración y funcionalidades avanzadas para tu negocio.',
      color: 'bg-purple-50 text-purple-600 border-purple-100'
    },
    {
      icon: <Icons.Zap />,
      title: 'Automatizaciones',
      desc: 'Conecta tus herramientas, automatiza correos y procesos repetitivos para que ahorres tiempo y dinero.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Soluciones integrales diseñadas para hacer crecer tu presencia online.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((srv, idx) => (
            <div key={idx} className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${srv.color} transition-transform group-hover:scale-110 duration-300`}>
                {srv.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{srv.title}</h3>
              <p className="text-gray-600 leading-relaxed">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PaymentMethodsSection = () => {
  return (
    <section id="precios" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] p-10 md:p-14 shadow-2xl border border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Plan de Pago Accesible</h2>
              <p className="text-lg text-gray-600 mb-6">
                Adaptados a las necesidades locales. Paga cómodamente con nuestra modalidad estrella:
              </p>
              
              <div className="inline-block bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-2xl p-6 mb-8 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary"><Icons.CheckCircle /></div>
                  <span className="text-2xl font-bold text-gray-900">50% al inicio</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-primary"><Icons.CheckCircle /></div>
                  <span className="text-2xl font-bold text-gray-900">50% contra entrega</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-xl border border-gray-200">
                  <div className="text-purple-600"><Icons.Dollar /></div>
                  <span className="font-bold text-gray-800 text-lg">Zelle</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-xl border border-gray-200">
                  <div className="text-emerald-600"><Icons.Dollar /></div>
                  <span className="font-bold text-gray-800 text-lg">Efectivo (Cash)</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-tr from-primary to-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transform hover:scale-105 transition-transform">
                  <span className="text-white font-bold text-2xl text-center px-4">Flexibilidad<br/>Total</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const QuoteFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'web', // default: web
    goal: 'whatsapp', // default: whatsapp
    sections: [],
    payment: 'zelle',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const serviceOptions = [
    { id: 'web', label: 'Página para vender/captar clientes', icon: '🚀' },
    { id: 'app', label: 'Aplicación o sistema a medida', icon: '📱' },
    { id: 'auto', label: 'Automatizar procesos', icon: '⚡' }
  ];

  const goalOptions = [
    { id: 'whatsapp', label: 'Que me contacten por WhatsApp' },
    { id: 'portfolio', label: 'Mostrar mis servicios/trabajos' },
    { id: 'sales', label: 'Vender o cobrar en línea' }
  ];

  const featureOptions = [
    'Presentación impactante',
    'Lista de servicios',
    'Fotos de trabajos',
    'Botón de WhatsApp',
    'Ubicación/Mapa'
  ];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleCheckboxChange = (value) => {
    if (formData.sections.includes(value)) {
      setFormData({ ...formData, sections: formData.sections.filter(s => s !== value) });
    } else {
      setFormData({ ...formData, sections: [...formData.sections, value] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      // FormSubmit para enviar estructurado al correo
      const response = await fetch('https://formsubmit.co/ajax/eternodyb@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          WhatsApp: formData.phone,
          'Necesidad del negocio': serviceOptions.find(o => o.id === formData.service)?.label,
          'Objetivo principal': goalOptions.find(o => o.id === formData.goal)?.label,
          'Detalles/Secciones incluidas': formData.sections.length > 0 ? formData.sections.join(', ') : 'Ninguna especificada',
          'Método de Pago Preferido': formData.payment,
          'Idea o Detalle Adicional': formData.message || 'Sin notas extra',
          _subject: `Nueva Solicitud de Proyecto - ${formData.name}`
        })
      });

      if (!response.ok) throw new Error('Error en el envío');
      
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', service: 'web', goal: 'whatsapp', sections: [], payment: 'zelle', message: '' });
    } catch (error) {
      console.error('Error enviando formulario:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Solicita tu Cotización</h2>
          <p className="text-xl text-gray-500">Completa nuestro cuestionario rápido y te responderemos el mismo día.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-xl relative overflow-hidden">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in">
              <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-8 shadow-sm">
                <Icons.CheckCircle />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">¡Gracias por tu confianza!</h3>
              <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
                Hemos recibido la información de tu proyecto. Nos pondremos en contacto contigo lo antes posible.
              </p>
              <button onClick={() => setStatus('idle')} className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-black transition-colors shadow-md">
                Enviar otra solicitud
              </button>
            </div>
          ) : (
            <>
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl text-center">
                  Hubo un error al enviar. Verifica tu conexión o intenta más tarde.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* 1. Datos Personales */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                    Tus Datos Personales
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Nombre Completo</label>
                      <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Ej. Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Correo Electrónico</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="juan@ejemplo.com" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-gray-700">Teléfono / WhatsApp</label>
                      <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+1 840 232 0865" />
                    </div>
                  </div>
                </div>
                
                {/* 2. Cuestionario del Proyecto */}
                <div className="bg-gray-50 -mx-8 md:-mx-12 px-8 md:px-12 py-8 border-y border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                    Sobre tu Proyecto
                  </h3>
                  
                  {/* Pregunta 1 */}
                  <div className="mb-8">
                    <label className="block text-base font-semibold text-gray-900 mb-4">¿Qué necesita tu negocio hoy?</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {serviceOptions.map(opt => (
                        <div 
                          key={opt.id}
                          onClick={() => setFormData({...formData, service: opt.id})}
                          className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex flex-col items-center text-center gap-2 ${formData.service === opt.id ? 'border-primary bg-primary/5 text-primary shadow-sm transform scale-[1.02]' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-100'}`}
                        >
                          <span className="text-3xl mb-1">{opt.icon}</span>
                          <span className="font-semibold text-sm">{opt.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pregunta 2 */}
                  <div className="mb-8">
                    <label className="block text-base font-semibold text-gray-900 mb-4">¿Qué quieres lograr principalmente?</label>
                    <div className="flex flex-wrap gap-3">
                      {goalOptions.map(opt => (
                        <div 
                          key={opt.id}
                          onClick={() => setFormData({...formData, goal: opt.id})}
                          className={`cursor-pointer px-5 py-3 rounded-full border-2 transition-all font-medium text-sm ${formData.goal === opt.id ? 'border-primary bg-primary text-white shadow-md' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-100'}`}
                        >
                          {opt.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pregunta 3 */}
                  <div className="mb-8">
                    <label className="block text-base font-semibold text-gray-900 mb-4">¿Qué detalles te gustaría incluir?</label>
                    <div className="flex flex-wrap gap-3">
                      {featureOptions.map(feat => {
                        const isSelected = formData.sections.includes(feat);
                        return (
                          <div 
                            key={feat}
                            onClick={() => handleCheckboxChange(feat)}
                            className={`cursor-pointer px-4 py-2 rounded-lg border-2 transition-all text-sm font-medium flex items-center gap-2 ${isSelected ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'}`}
                          >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-primary border-primary' : 'border-gray-300'}`}>
                              {isSelected && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                            </div>
                            {feat}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Campo opcional */}
                  <div>
                    <label className="block text-base font-semibold text-gray-900 mb-3">¿Alguna otra idea o detalle en mente? (Opcional)</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none bg-white" placeholder="Escribe aquí..."></textarea>
                  </div>
                </div>

                {/* 3. Pago */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                    Método de Pago Preferido
                  </h3>
                  <div className="flex gap-4">
                    <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.payment === 'zelle' ? 'border-primary bg-primary/5 text-primary' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                      <input type="radio" name="payment" value="zelle" checked={formData.payment === 'zelle'} onChange={handleChange} className="hidden" />
                      <span className="font-semibold">Zelle</span>
                    </label>
                    <label className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition-all ${formData.payment === 'cash' ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-gray-200 text-gray-600 hover:bg-gray-50'}`}>
                      <input type="radio" name="payment" value="cash" checked={formData.payment === 'cash'} onChange={handleChange} className="hidden" />
                      <span className="font-semibold">Efectivo (Cash)</span>
                    </label>
                  </div>
                </div>

                <button type="submit" disabled={status === 'loading'} className="w-full py-5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:transform-none">
                  {status === 'loading' ? 'Enviando...' : 'Enviar Solicitud'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/18402320865" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
    >
      <Icons.WhatsApp />
      <span className="absolute right-16 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
        ¡Chatea con nosotros!
      </span>
    </a>
  );
};

const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 text-center">
    <div className="max-w-7xl mx-auto px-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 opacity-80">E</div>
      <p className="mb-4">© 2026 Eterno. Todos los derechos reservados.</p>
      <p className="text-sm">Diseñado para convertir.</p>
    </div>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <PaymentMethodsSection />
        <QuoteFormSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
