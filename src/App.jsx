import Hero from "./components/Hero";
import EmailSignup from "./components/EmailSignup";
import SocialLinks from "./components/SocialLinks";
import './App.css';
export default function App() {
  return (
    <main className="page">
      <section className="container">
        <header>
          <img src="/logo.png" alt="Chai Culture Logo" className="logo" />
        </header>

        <Hero />

        <hr className="divider" />

        <EmailSignup />

        <span className="launch">LAUNCHING SOON • 2026</span>

        <SocialLinks />

        <footer className="rights">
          © 2026 Chai Culture. All rights reserved.
        </footer>
      </section>
    </main>
  );
}