/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  MapPin, 
  Globe, 
  Mail, 
  Phone, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Gamepad2, 
  ExternalLink,
  Info,
  ChevronRight,
  X
} from 'lucide-react';
import { OSLO_STUDIOS, Studio, Game } from './studios';

const StudioCard = ({ studio, onClick }: { studio: Studio; onClick: () => void }) => {
  return (
    <motion.div
      layoutId={studio.id}
      onClick={onClick}
      className="bg-white rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer group flex flex-col h-full"
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-16 h-16 rounded-xl overflow-hidden bg-zinc-100 border border-black/5">
          <img 
            src={studio.logo} 
            alt={studio.name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex gap-2">
          {studio.socials.twitter && <Twitter className="w-4 h-4 text-zinc-400" />}
          {studio.socials.linkedin && <Linkedin className="w-4 h-4 text-zinc-400" />}
        </div>
      </div>

      <h3 className="text-xl font-semibold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">
        {studio.name}
      </h3>
      <p className="text-zinc-500 text-sm line-clamp-2 mb-4 flex-grow">
        {studio.description}
      </p>

      <div className="space-y-2 mt-auto">
        <div className="flex items-center text-xs text-zinc-400">
          <MapPin className="w-3 h-3 mr-1.5" />
          {studio.contact.address}, {studio.contact.city}
        </div>
        <div className="flex items-center text-xs text-zinc-400">
          <Gamepad2 className="w-3 h-3 mr-1.5" />
          {studio.games.length} spill lansert
        </div>
      </div>
    </motion.div>
  );
};

const StudioModal = ({ studio, onClose }: { studio: Studio; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        layoutId={studio.id}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 bg-zinc-900 overflow-hidden">
          <img 
            src={`https://picsum.photos/seed/${studio.id}-cover/800/400`} 
            className="w-full h-full object-cover opacity-50"
            alt="Cover"
            referrerPolicy="no-referrer"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="absolute -bottom-8 left-8">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white border-4 border-white shadow-lg">
              <img 
                src={studio.logo} 
                alt={studio.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="pt-12 px-8 pb-8 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900">{studio.name}</h2>
              <a 
                href={studio.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline flex items-center mt-1 text-sm font-medium"
              >
                <Globe className="w-4 h-4 mr-1.5" />
                {studio.website.replace('https://', '')}
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
            <div className="flex gap-3">
              {studio.socials.twitter && (
                <a href={studio.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5 text-zinc-600" />
                </a>
              )}
              {studio.socials.linkedin && (
                <a href={studio.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5 text-zinc-600" />
                </a>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Om studioet</h4>
                <p className="text-zinc-600 leading-relaxed">{studio.description}</p>
              </section>

              <section>
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Spillportefølje</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {studio.games.map((game, i) => (
                    <div key={i} className="flex items-center p-3 bg-zinc-50 rounded-xl border border-black/5">
                      <Gamepad2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-zinc-800">{game.title}</div>
                        <div className="text-xs text-zinc-500">{game.year || 'TBA'}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-3">Kontakt & Lokasjon</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-zinc-400 mr-2 mt-0.5" />
                    <div className="text-sm text-zinc-600">
                      {studio.contact.address}<br />
                      {studio.contact.city}
                    </div>
                  </div>
                  {studio.contact.email && (
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-zinc-400 mr-2" />
                      <a href={`mailto:${studio.contact.email}`} className="text-sm text-zinc-600 hover:text-emerald-600">{studio.contact.email}</a>
                    </div>
                  )}
                </div>
              </section>

              <div className="h-32 rounded-xl bg-zinc-100 overflow-hidden relative border border-black/5">
                <img 
                  src={`https://picsum.photos/seed/${studio.id}-map/300/200?grayscale`} 
                  className="w-full h-full object-cover opacity-60"
                  alt="Map Placeholder"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-2 rounded-full shadow-lg">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudio, setSelectedStudio] = useState<Studio | null>(null);

  const filteredStudios = useMemo(() => {
    return OSLO_STUDIOS.filter(studio => 
      studio.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      studio.games.some(game => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#F9FAFB] text-zinc-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header */}
      <header className="bg-white border-bottom border-black/5 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Oslo Game Studios</h1>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Bransjeoversikt</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-4 text-sm font-medium text-zinc-500">
              <a href="#" className="text-zinc-900">Oversikt</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Kart</a>
              <a href="#" className="hover:text-zinc-900 transition-colors">Om oss</a>
            </nav>
            <div className="h-6 w-px bg-zinc-200" />
            <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">
              Legg til studio
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero & Search */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-4">
            Oppdag spillbransjen i Oslo
          </h2>
          <p className="text-lg text-zinc-600 mb-8">
            En komplett oversikt over studioer som utvikler og lanserer egne spill fra hjertet av Norge.
          </p>

          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-emerald-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Søk etter studio eller spill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white border border-black/5 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-lg"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Studioer', value: OSLO_STUDIOS.length },
            { label: 'Spill Lansert', value: OSLO_STUDIOS.reduce((acc, s) => acc + s.games.length, 0) },
            { label: 'Ansatte', value: '500+' },
            { label: 'Lokasjon', value: 'Oslo' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border border-black/5 text-center">
              <div className="text-2xl font-bold text-zinc-900">{stat.value}</div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStudios.map((studio) => (
              <StudioCard 
                key={studio.id} 
                studio={studio} 
                onClick={() => setSelectedStudio(studio)} 
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredStudios.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 mb-4">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900">Ingen treff</h3>
            <p className="text-zinc-500">Prøv et annet søkeord.</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-zinc-200 rounded-lg flex items-center justify-center text-zinc-600">
                <Gamepad2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-zinc-900">Oslo Game Studios</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-zinc-500">
              <a href="#" className="hover:text-zinc-900">Personvern</a>
              <a href="#" className="hover:text-zinc-900">Vilkår</a>
              <a href="#" className="hover:text-zinc-900">Kontakt</a>
            </div>
            <p className="text-sm text-zinc-400">
              © 2026 Oslo Game Studios. Alle rettigheter reservert.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedStudio && (
          <StudioModal 
            studio={selectedStudio} 
            onClose={() => setSelectedStudio(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
