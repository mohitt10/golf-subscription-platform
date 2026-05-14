import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const Hero = () => (
  <section className="hero relative">
    <img 
      className="hero-img" 
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIFxVQJ65mwGOPZxooyMM3ekQgFrI-nqBLJEhv2hnPVNkMF3gGv7koTnIwkoJSH-ReSJYOtD3Vpir6TCN-sFng1hCh0KtBH5-BBmI0V39Q33JrZnCLp0_8LUq_upZcdJBykIf9g3fFKJwuNBwgpGU5UWwXt8tbqJDeEtlnWNhBBDmM-XoNKxysd4U3AxH7zfb0srOyGBDjPz20FH7r9HeXtrzKqYhDzdn9iof8LIfJ_UzM5e-DSa_caoPC8VqeuKHex3Mj2zSJTG4" 
      alt="Golf course"
    />
    <div className="max-w-container relative w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <span className="hero-tag label-md">
          Established 2024
        </span>
        <h1 className="display-lg text-on-primary mb-24">Golf for Good.</h1>
        <p className="body-lg text-on-primary hero-desc">
          Join an exclusive community of golfers committed to driving social impact. We transform your passion for the game into a force for change through our transparent membership model.
        </p>
        <div className="flex gap-4">
          <button className="btn-secondary">Join the Community</button>
          <button className="btn-outline label-md text-on-primary flex items-center gap-4">
            Explore Charities <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const SectionMembership = () => (
  <section className="py-section max-w-container">
    <div className="flex flex-col md:flex-row gap-16 items-center">
      <div className="w-full md:w-1/2">
        <h2 className="display-md text-primary mb-24">The Membership Model</h2>
        <p className="body-lg text-on-surface-variant" style={{ marginBottom: '32px' }}>
          Our philosophy is built on absolute transparency. Your monthly membership fee is split with precision to ensure maximum impact and community reward.
        </p>
        <div className="flex flex-col gap-8">
          {[
            { icon: 'volunteer_activism', title: '50% Charity Contribution', desc: 'Directly funding our vetted charity partners for measurable environmental and social impact.' },
            { icon: 'workspace_premium', title: '40% Lucky Draw Pool', desc: 'Funding premium golf experiences, high-end equipment, and luxury travel for our members.' },
            { icon: 'account_balance_wallet', title: '10% Platform Growth', desc: 'Covering administrative costs and ensuring the longevity of our philanthropic mission.' }
          ].map((item, i) => (
            <div key={i} className="membership-item flex items-center gap-4 p-6 bg-surface-container-low">
              <span className="material-symbols-outlined membership-icon">{item.icon}</span>
              <div>
                <h4 className="headline-md" style={{ fontSize: '20px', marginBottom: '4px' }}>{item.title}</h4>
                <p className="body-md text-on-surface-variant">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="membership-image-container">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsLE5JZnV9Z-lZ-Q8T6GmOD9lABpGyrX2zUEtjI3m691t0CjbxBJXrJ57L8-RVvAJrIbTvoqPUfFAxO64WdVJwLvK_D4zWf5P49b-LtTV-64HlpiAR2czr9_lwH10mY94whZKNZJutW3MxezLAeCFTA8iXNwarKGC0j5lU3UetQXowxv2KbDnIojfqF7WQdBrZZ3KNbrgxrQ53TVWTZszaXbOxAnQ_gSvC1v3yy1TvMcRyzMfHJnVjB-dZmkdx8HnPH5zzxkInlx4" 
            alt="Golf scene"
          />
          <div className="membership-overlay"></div>
          <div className="membership-stat-overlay absolute">
            <div className="flex justify-between items-end">
              <div className="text-on-primary">
                <p className="label-md stat-label">Total Raised</p>
                <p className="display-md">$1,248,500</p>
              </div>
              <div className="stat-icon-container">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>trending_up</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionLuckyDraw = () => (
  <section className="bg-primary py-section relative overflow-hidden">
    <div className="absolute inset-0 shimmer-gold section-shimmer"></div>
    <div className="max-w-container w-full relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-64 gap-8">
        <div>
          <h2 className="display-md text-secondary-fixed mb-16">Monthly Lucky Draw</h2>
          <p className="body-lg text-on-primary draw-desc">
            Exclusive rewards for our members. Every month, we celebrate our community with premium prizes that elevate your game.
          </p>
        </div>
        <button className="label-md text-on-secondary-fixed draw-prizes-btn">
          View Past Prizes
        </button>
      </div>
      <div className="prizes-grid">
        {[
          { date: 'MARCH WINNER', name: 'David S.', title: 'St. Andrews Experience', desc: 'All-inclusive 4-day trip for two to the home of golf, including premium tee times.' },
          { date: 'APRIL WINNER', name: 'Elena R.', title: 'Custom Club Fitting', desc: 'Full bag fitting and complete set of custom clubs from a premier manufacturer.' },
          { date: 'MAY DRAW', name: 'Pending...', title: 'Luxury Golf Watch', desc: 'Garmin Marq Golfer Gen 2 – The pinnacle of golf-specific wearable technology.' }
        ].map((item, i) => (
          <div key={i} className="prize-card">
            <div className="flex justify-between items-start mb-24">
              <span className="material-symbols-outlined text-secondary-fixed" style={{ fontSize: '48px' }}>golf_course</span>
              <div style={{ textAlign: 'right' }}>
                <p className="label-md text-secondary-fixed">{item.date}</p>
                <p className="body-md text-on-primary" style={{ fontWeight: 'bold' }}>{item.name}</p>
              </div>
            </div>
            <h3 className="headline-md text-on-primary" style={{ marginBottom: '8px' }}>{item.title}</h3>
            <p className="body-md text-on-primary draw-item-desc">{item.desc}</p>
            <div className="draw-progress-bg">
              <div className="draw-progress-fill" style={{ width: i === 2 ? '33%' : '100%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SectionDashboard = () => (
  <section className="bg-surface py-section">
    <div className="max-w-container text-center mb-64">
      <h2 className="display-md text-primary mb-24">Impact Dashboard</h2>
      <div className="body-lg text-on-surface-variant mx-auto">
        Real-time data on how the Modern Fairway community is making a difference across the globe.
      </div>
    </div>
    <div className="max-w-container stats-grid">
      <div className="dashboard-stat">
        <p className="display-md text-secondary mb-8">$840k+</p>
        <p className="label-md text-on-surface-variant stat-label">Charity Grants</p>
      </div>
      <div className="dashboard-stat">
        <p className="display-md text-secondary mb-8">12,400</p>
        <p className="label-md text-on-surface-variant stat-label">Trees Planted</p>
      </div>
      <div className="dashboard-stat">
        <p className="display-md text-secondary mb-8">42</p>
        <p className="label-md text-on-surface-variant stat-label">Active Partners</p>
      </div>
      <div className="dashboard-stat">
        <p className="display-md text-secondary mb-8">100%</p>
        <p className="label-md text-on-surface-variant stat-label">Transparency</p>
      </div>
    </div>
    <br></br>
    <div className="max-w-container">
      <div className="cta-banner relative">
        <img 
          className="absolute inset-0 w-full h-full object-cover cta-bg-img" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu8FU0OqxzntfVJ9aqVTOgL3MjaczjbTaTu5Sj6mNTxOGSCu4KSm9qqKljWEZCYKj8bCbuCxCZcrIUCf2hhNh0t6jOQNo_HEXjxWnh9PJP40lXGUT10_3Iap_BHIMjAh0S380KoykFl5XuTwL8vYn7HtMLF2_AKopZKDytMt9VX8dH-ZHpp1EZwejR68wP5XUZ5BnPuSvR9L7TWnsrC21RDdm-1pqrHjKLVR62OGqs2B-m7_c0JZ4FTjbYKJABlYqy0V1peJKpZZA" 
          alt="Clubhouse"
        />
        <div className="relative z-10">
          <h2 className="display-md text-on-primary mb-32">Ready to swing for change?</h2>
          <p className="body-lg text-on-primary cta-desc mx-auto">
            Join thousands of golfers who believe the game can be about more than just a lower handicap.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <button className="btn-secondary cta-btn">Start Your Membership</button>
            <button className="btn-prospectus label-md text-on-primary"> Download Prospectus</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default function LandingPage() {
      return (
    <div className="body-md">
      <Header />
      <main>
        <Hero />
        <SectionMembership />
        <SectionLuckyDraw />
        <SectionDashboard />
      </main>
      <Footer />
    </div>
  );
}