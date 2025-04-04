import React, { useState,useRef, useEffect } from 'react';
import { Rocket, Users, Globe, ChevronRight, Mail, Phone, User, Check, Loader2 } from 'lucide-react';

function App() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (Object.values(formData).some(value => value.trim() !== "")) {
        savePartialData();
      }
    }, 5000);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formDataToSend = {
      name: formData.name || "",  
      email: formData.email || "",
      phone: formData.phone || "",
      message: formData.message || ""
    };
  
    try {
      
      const response = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY5MDYzZjA0MzU1MjY0NTUzMjUxM2Ii_pc", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });
  
      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.log(response);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  //Bonus
  const savePartialData = async () => {
    try {
      const formDataToSend = {
        name: formData.name || "",  
        email: formData.email || "",
        phone: formData.phone || "",
        message: formData.message || ""
      };
      const response = await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTY5MDYzZjA0MzY1MjZjNTUzNDUxM2Ei_pc", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });
  
      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.log(response);
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Un cours d'Anglais, Votre passeport pour le monde 
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Des cours d’anglais personnalisés pour améliorer votre aisance, enrichir votre vocabulaire et gagner en confiance.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center mx-auto"
          >
            Commencer ! <ChevronRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Pourquoi Choisir Nos Cours d'Anglais
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Apprentissage Rapide</h3>
              <p className="text-gray-600">Une méthode d’enseignement efficace pour acquérir rapidement de nouvelles compétences linguistiques.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Enseignants Qualifiés</h3>
              <p className="text-gray-600">Des formateurs expérimentés pour vous guider dans chaque étape de votre apprentissage de l’anglais.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flexibilité Internationale</h3>
              <p className="text-gray-600">Accédez à nos cours d'anglais depuis n'importe où dans le monde, à votre propre rythme et selon vos horaires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
                alt="Students learning English"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Notre Approche Pédagogique</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Nos cours d'anglais sont conçus pour répondre aux besoins spécifiques de chaque apprenant. Que vous soyez débutant ou avancé, nous adaptons notre méthode à votre niveau et à vos objectifs.
                </p>
                <p>
                  Chaque session combine :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Des exercices de conversation pour améliorer votre fluidité</li>
                  <li>Des activités d'écoute pour affiner votre compréhension</li>
                  <li>Des leçons de grammaire contextualisées</li>
                  <li>Des jeux de rôle pour pratiquer en situation réelle</li>
                </ul>
                <p>
                  Nos cours sont dispensés par des professeurs natifs et certifiés, passionnés par l'enseignement et déterminés à vous faire progresser rapidement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Inscrivez-vous
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nom Complet
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Numéro de téléphone
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-md font-semibold flex items-center justify-center transition-colors ${
                  isSuccess
                    ? 'bg-green-500 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Envoi...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Envoyé avec succés!
                  </>
                ) : (
                  'Commencer !'
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;