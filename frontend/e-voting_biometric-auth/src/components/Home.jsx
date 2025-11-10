import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from './Home/FeatureCard';
import NewsCard from './Home/NewsCard';

const Homepage = () => {
  const news = [
    { title: "SUG Elections Coming Soon", content: "Prepare to cast your vote and make your voice heard!", date: "Nov 1, 2025" },
    { title: "Candidate Registration Open", content: "Interested candidates can now register for the upcoming elections.", date: "Oct 25, 2025" },
    { title: "Voting Guidelines Released", content: "Read the guidelines to ensure a smooth voting experience.", date: "Oct 20, 2025" },
  ];

  const features = [
    { icon: "bi-shield-lock", title: "Secure Voting", desc: "Fingerprint biometric authentication ensures no duplicate votes." },
    { icon: "bi-speedometer2", title: "Fast & Efficient", desc: "Vote in seconds and track results instantly." },
    { icon: "bi-globe", title: "Easy Access", desc: "Vote anytime, anywhere using your student account." },
    { icon: "bi-eye", title: "Transparent Results", desc: "Election results are recorded and displayed in real-time." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-white d-flex align-items-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1470&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        position: 'relative'
      }}>
        <div className="overlay" style={{
          position: 'absolute', top:0, left:0, right:0, bottom:0, backgroundColor:'rgba(0,0,0,0.5)'
        }}></div>
        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Your Voice, Your Vote</h1>
          <p className="lead mb-4">Participate in SUG elections and make your choice count. Every vote matters!</p>
          <Link to="/login" className="btn btn-primary btn-lg me-3" style={{ backgroundColor: '#00BFFF', border: 'none' }}>Vote Now</Link>
          <Link to="#features" className="btn btn-outline-light btn-lg">Learn More</Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-5">
        <div className="container">
          <h2 className="mb-4 text-center" style={{ color: '#1A3D7C' }}>Why Vote With Us?</h2>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-3">
                <FeatureCard icon={feature.icon} title={feature.title} desc={feature.desc} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section py-5" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="container">
          <h2 className="mb-4 text-center" style={{ color: '#1A3D7C' }}>Latest News & Announcements</h2>
          <div className="row g-4">
            {news.map((item, index) => (
              <div key={index} className="col-12 col-md-4">
                <NewsCard title={item.title} content={item.content} date={item.date} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-section text-center py-5" style={{ backgroundColor: '#1A3D7C', color: 'white' }}>
        <div className="container">
          <h2 className="mb-3">Ready to Make Your Voice Heard?</h2>
          <Link to="/login" className="btn btn-lg" style={{ backgroundColor: '#00BFFF', border:'none' }}>Vote Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
