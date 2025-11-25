import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircle, ArrowRight, Sparkles, TrendingUp, Video, Music2, ShoppingBag, Upload, DollarSign } from 'lucide-react';

export default function LandingPage() {
  const { t } = useTranslation();

  return (
    <div>
      {/* Hero Section with Real Imagery */}
      <section className="relative px-4 md:px-6 py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Music producer in studio"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90"></div>
        </div>

        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-purple-400" />
          </div>
          <h1 className="text-display text-3xl md:text-5xl lg:text-7xl mb-6 md:mb-8 max-w-5xl mx-auto text-white leading-tight">
            Stop Deleting Videos. Start Using Legal Audio.
          </h1>

          <p className="text-body text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-3xl mx-auto text-slate-200 px-2">
            The world's first pack-based audio utility marketplace for short-form creators. Viral hooks, meme reactions, and brand kits — all copyright-safe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-12 md:mb-16 px-4">
            <Link 
              to="/register"
              className="btn-primary btn-professional inline-flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <span>Get Launch Bundle $29</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/marketplace"
              className="btn-secondary btn-professional w-full sm:w-auto text-center"
            >
              Browse Audio Packs
            </Link>
          </div>
        </div>
      </section>

      {/* Real Artist Stories */}
      <section className="py-12 md:py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingUp className="h-8 w-8 text-purple-400" />
              <h2 className="text-heading text-2xl md:text-4xl font-bold text-white">
                Built for Creators. Monetized for Artists.
              </h2>
            </div>
            <p className="text-body text-lg max-w-3xl mx-auto text-slate-300">
              Founded by Victor Joseph Edet, CEO of Victor360 Brand Limited. The only platform packaging performance audio for TikTok, Reels, Ads & UGC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="card-professional overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Electronic music producer"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">DJ SynthWave</h3>
                <p className="text-slate-400 mb-4">3 tracks available • Electronic</p>
                <p className="text-slate-300 text-sm">"V3B gave me direct access to content creators worldwide. My neon-soaked synthwave tracks are now powering YouTube videos, podcasts, and streaming content."</p>
              </div>
            </div>
            <div className="card-professional overflow-hidden">
              <img
                src="https://images.pexels.com/photos/7520390/pexels-photo-7520390.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hip hop producer"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">BeatsMaster</h3>
                <p className="text-slate-400 mb-4">2 tracks available • Hip Hop</p>
                <p className="text-slate-300 text-sm">"Urban beats that hit hard. I upload my tracks, set my price, and creators license them instantly. Finally, fair pay for my craft."</p>
              </div>
            </div>
            <div className="card-professional overflow-hidden">
              <img
                src="https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Lo-fi music producer"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">LoFi Producer</h3>
                <p className="text-slate-400 mb-4">3 tracks available • Lo-Fi</p>
                <p className="text-slate-300 text-sm">"My chill lo-fi beats help students focus and creators relax their audiences. Simple licensing, instant payouts, no hassle."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* For Content Creators */}
            <div className="card-elevated p-8 md:p-10">
              <div className="mb-8">
                <img
                  src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Content creator filming"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center space-x-3 mb-4">
                  <Video className="h-7 w-7 text-cyan-400" />
                  <h3 className="text-heading text-2xl md:text-3xl font-bold text-white">For Content Creators</h3>
                </div>
                <p className="text-body text-slate-300 mb-6">Copyright-safe audio utilities for TikTok, Reels, YouTube Shorts & commercial projects</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Viral Hook Starter Kit: 8 assets, $9 (launch price)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Meme Reaction Arsenal: 10 assets, $12 (launch price)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">60-Second Brand Kit: 6 assets, $15 (launch price)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Launch Bundle: All 3 packs for $29 (save $7)</span>
                </li>
              </ul>
              <Link
                to="/marketplace"
                className="btn-primary btn-professional w-full text-center inline-flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Browse Marketplace</span>
              </Link>
            </div>

            {/* For Artists */}
            <div className="card-elevated p-8 md:p-10">
              <div className="mb-8">
                <img
                  src="https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Artist uploading music"
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                <div className="flex items-center space-x-3 mb-4">
                  <Music2 className="h-7 w-7 text-purple-400" />
                  <h3 className="text-heading text-2xl md:text-3xl font-bold text-white">For Audio Creators</h3>
                </div>
                <p className="text-body text-slate-300 mb-6">Package your sounds into viral-ready utility packs. Get paid instantly.</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Create packs of 6-10 assets (hooks, reactions, transitions)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Set pack pricing $9-$25 — you keep 80% of every sale</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Instant payouts via Stripe Connect (no 30-day holds)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-slate-300">Blockchain royalty ledger — full transparency, zero disputes</span>
                </li>
              </ul>
              <Link
                to="/register"
                className="btn-primary btn-professional w-full text-center inline-flex items-center justify-center space-x-2"
              >
                <Music2 className="h-5 w-5" />
                <span>Start Selling Packs</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Tracks Preview */}
      <section className="py-12 md:py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-heading text-2xl md:text-4xl font-bold text-white mb-4">Launch Trio — Limited Time Pricing</h2>
            <p className="text-body text-lg text-slate-300 mb-8">3 performance packs, 24 total assets, designed for viral content</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-professional p-6 relative">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-red-500 rounded-full text-xs font-bold text-white">LAUNCH</span>
              </div>
              <img
                src="https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Viral Hook Starter Kit"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-bold text-lg mb-1">Viral Hook Starter Kit</h3>
              <p className="text-slate-400 text-sm mb-3">8 assets • TikTok, Reels, Shorts</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-slate-400 text-sm line-through">$12.00</span>
                <span className="text-green-400 font-bold text-xl">$9.00</span>
              </div>
              <p className="text-slate-500 text-xs">High-energy hooks for viral intros</p>
            </div>
            <div className="card-professional p-6 relative">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-red-500 rounded-full text-xs font-bold text-white">LAUNCH</span>
              </div>
              <img
                src="https://images.pexels.com/photos/1370545/pexels-photo-1370545.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Meme Reaction Arsenal"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-bold text-lg mb-1">Meme Reaction Arsenal</h3>
              <p className="text-slate-400 text-sm mb-3">10 assets • Commentary, UGC</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-slate-400 text-sm line-through">$15.00</span>
                <span className="text-green-400 font-bold text-xl">$12.00</span>
              </div>
              <p className="text-slate-500 text-xs">Perfectly timed reaction sounds</p>
            </div>
            <div className="card-professional p-6 relative">
              <div className="absolute top-3 right-3">
                <span className="px-2 py-1 bg-red-500 rounded-full text-xs font-bold text-white">LAUNCH</span>
              </div>
              <img
                src="https://images.pexels.com/photos/1376867/pexels-photo-1376867.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="60-Second Brand Kit"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-bold text-lg mb-1">60-Second Brand Kit</h3>
              <p className="text-slate-400 text-sm mb-3">6 assets • Ads, Brand Content</p>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-slate-400 text-sm line-through">$18.00</span>
                <span className="text-green-400 font-bold text-xl">$15.00</span>
              </div>
              <p className="text-slate-500 text-xs">Broadcast-ready, white-label approved</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/marketplace"
              className="btn-secondary btn-professional"
            >
              View All
            </Link>
          </div>
        </div>
      </section>


      {/* How It Works - Visual Process */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-display text-2xl md:text-4xl font-bold text-white mb-4">
              The Process
            </h2>
          </div>

          {/* Visual Process Flow - Redesigned */}
          <div className="relative max-w-6xl mx-auto">
            {/* Animated Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-400 to-green-400 transform -translate-y-1/2 z-0 opacity-30"></div>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 z-10">
              {/* Step 1: Upload - Purple Theme */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-slate-900/50 backdrop-blur-xl border border-purple-500/30 p-8 h-full transform transition-all duration-700 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(168,85,247,0.5)]">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Content */}
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon Container with Pulse Effect */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-purple-500 rounded-full blur-xl opacity-50 animate-pulse"></div>
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
                        <Upload className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      01
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Upload Packs</h3>
                    <p className="text-purple-200 text-sm leading-relaxed">Artists create viral-ready audio utility packs with 6-10 curated assets</p>

                    {/* Decorative Element */}
                    <div className="mt-6 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-bl-full"></div>
                </div>
              </div>

              {/* Step 2: License - Cyan Theme */}
              <div className="relative group md:mt-12">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-900/40 via-cyan-800/30 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 p-8 h-full transform transition-all duration-700 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(34,211,238,0.5)]">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Content */}
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon Container with Pulse Effect */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-cyan-500 rounded-full blur-xl opacity-50 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 shadow-2xl">
                        <ShoppingBag className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      02
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">License Instantly</h3>
                    <p className="text-cyan-200 text-sm leading-relaxed">Creators browse, preview, and license copyright-safe audio for $9-$25 per pack</p>

                    {/* Decorative Element */}
                    <div className="mt-6 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 left-0 w-20 h-20 bg-cyan-500/10 rounded-tr-full"></div>
                </div>
              </div>

              {/* Step 3: Get Paid - Green Theme */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-900/40 via-green-800/30 to-slate-900/50 backdrop-blur-xl border border-green-500/30 p-8 h-full transform transition-all duration-700 hover:scale-105 hover:shadow-[0_20px_60px_-15px_rgba(34,197,94,0.5)]">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  {/* Content */}
                  <div className="relative flex flex-col items-center text-center">
                    {/* Icon Container with Pulse Effect */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center transform rotate-3 group-hover:rotate-6 transition-transform duration-500 shadow-2xl">
                        <DollarSign className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      03
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Instant Payouts</h3>
                    <p className="text-green-200 text-sm leading-relaxed">Artists receive 80% revenue split with instant payouts and blockchain transparency</p>

                    {/* Decorative Element */}
                    <div className="mt-6 flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-500/10 rounded-bl-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8">
              <Link
                to="/register"
                className="btn-primary btn-professional inline-flex items-center justify-center space-x-2"
              >
                <span>Start Creating</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/marketplace"
                className="btn-secondary btn-professional text-center"
              >
                Browse Marketplace
              </Link>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-6 md:pt-8 border-t border-slate-700">
            <p className="text-caption mb-4">{t('landing.cta.trustIndicators')}</p>
            <div className="flex justify-center items-center opacity-80">
              <span className="text-sm md:text-lg font-semibold text-slate-300 text-center">TikTok • Instagram • YouTube • Twitter • Snapchat • Discord</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Legal Links */}
      <footer className="py-12 bg-slate-900/50 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h4 className="text-white font-bold mb-4">V3B Music AI</h4>
              <p className="text-slate-400 text-sm mb-4">
                The world's first pack-based audio utility marketplace for short-form creators.
              </p>
              <div className="flex space-x-3">
                <Music2 className="h-5 w-5 text-purple-400" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/marketplace" className="text-slate-400 hover:text-white transition-colors">Browse Marketplace</Link></li>
                <li><Link to="/register" className="text-slate-400 hover:text-white transition-colors">Sign Up</Link></li>
                <li><Link to="/login" className="text-slate-400 hover:text-white transition-colors">Login</Link></li>
                <li><Link to="/safety" className="text-slate-400 hover:text-white transition-colors">Safety Center</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/legal/terms-of-service.html" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/legal/privacy-policy.html" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/legal/cookie-policy.html" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/legal/dmca-policy.html" className="text-slate-400 hover:text-white transition-colors">DMCA Policy</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="text-slate-400">General Inquiries:</li>
                <li><a href="mailto:info@v3bmusic.ai" className="text-purple-400 hover:text-purple-300 transition-colors">info@v3bmusic.ai</a></li>
                <li className="text-slate-400 mt-3">Partnerships:</li>
                <li><a href="mailto:partnership@v3bmusic.ai" className="text-purple-400 hover:text-purple-300 transition-colors">partnership@v3bmusic.ai</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-500 text-sm text-center md:text-left">
                © 2025 V3B Music AI. All rights reserved. Founded by Victor Joseph Edet, CEO of Victor360 Brand Limited.
              </p>
              <div className="flex items-center space-x-4 text-sm text-slate-500">
                <span>🇬🇧 UK Registered</span>
                <span>•</span>
                <span>GDPR Compliant</span>
                <span>•</span>
                <span>CCPA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}