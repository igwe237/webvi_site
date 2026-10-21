import React, { useState } from 'react';
import { Logo } from './Logo.tsx';
import { COMPANY, buildWhatsAppLink } from '../data/company.ts';
import { Phone, MessageCircle, Menu, X, Shield, Clock, MapPin, Calculator, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const directWhatsAppUrl = buildWhatsAppLink(
    `Bonjour WEBVI (${COMPANY.slogan}), je vous contacte depuis votre site internet pour une demande de renseignement / devis.`
  );

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs transition-all">
      {/* Top micro announcement bar with Slogan and contact info */}
      <div className="bg-[#111827] text-white text-[11px] py-1.5 px-4 hidden sm:block border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#00d2ff]" />
              <strong className="text-white">BEEDI</strong> - Douala, Cameroun
            </span>
            <span className="flex items-center gap-1.5 text-[#00d2ff] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              {COMPANY.slogan}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#00d2ff]" />
              Intervention rapide & Devis 24/7
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-slate-300 hover:text-[#00d2ff] transition-colors"
            >
              {COMPANY.email}
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`tel:${COMPANY.phone}`}
              className="text-white font-semibold flex items-center gap-1 hover:text-[#00d2ff] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#00d2ff]" />
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo brand using official uploaded image */}
          <a href="#" className="flex items-center gap-2 focus:outline-none" aria-label="WEBVI Accueil">
            <Logo size="md" theme="light" />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-slate-700">
            <a href="#services" className="hover:text-[#00d2ff] transition-colors py-1">
              Nos 11 Services
            </a>
            <a href="#starlink-special" className="hover:text-[#00d2ff] transition-colors py-1 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping" />
              Starlink
            </a>
            <a href="#charte" className="hover:text-[#00d2ff] transition-colors py-1">
              Identité
            </a>
            <a href="#avis" className="hover:text-[#00d2ff] transition-colors py-1">
              Avis Clients (7)
            </a>
            <a href="#contact" className="hover:text-[#00d2ff] transition-colors py-1">
              Contact & Plan
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white text-xs font-bold transition-all"
            >
              <Calculator className="w-3.5 h-3.5" />
              Simulateur Devis
            </button>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold shadow-md shadow-emerald-500/15 transition-all hover:scale-[1.02]"
              aria-label="Contacter WEBVI sur WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          {/* Mobile slogan */}
          <div className="px-2 py-1.5 rounded-lg bg-[#111827] text-white text-xs font-bold text-center">
            {COMPANY.slogan}
          </div>

          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-800">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Nos 11 Services de Sécurité</span>
              <span className="text-xs bg-slate-100 px-2 py-0.5 rounded text-slate-600">Complet</span>
            </a>
            <a
              href="#starlink-special"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Installation Starlink Cameroun</span>
              <span className="text-xs bg-[#00d2ff]/20 text-[#0099cc] px-2 py-0.5 rounded font-bold">Nouveau</span>
            </a>
            <a
              href="#charte"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50"
            >
              Charte & Technologie
            </a>
            <a
              href="#avis"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Avis Clients Africains (7 Recommandations)</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold">★ 4.9/5</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-50"
            >
              Contact Beedi - Douala
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-[#111827] text-white text-xs font-bold flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#00d2ff]" />
              Calculer un Devis Immédiat
            </button>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Discuter sur WhatsApp (690759196)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
