import React, { useEffect, useRef, useState } from "react";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const rosterRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scrollTo = (ref) => ref?.current?.scrollIntoView({ behavior: "smooth" });

  const handleSubmitEmail = async () => {
    if (!email || !email.includes("@")) return;
    try {
      await fetch("https://formspree.io/f/mwvnkpbv", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (e) {
      console.error("Failed to submit:", e);
    }
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "white", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      
      {/* Nav */}
      <nav style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 100, 
        padding: isMobile ? "16px 20px" : "20px 60px", 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        backgroundColor: scrollY > 50 ? "rgba(10,10,10,0.95)" : "transparent", 
        backdropFilter: scrollY > 50 ? "blur(20px)" : "none", 
        transition: "all 0.5s", 
        boxSizing: "border-box" 
      }}>
        <img src="/images/W wayk.png" alt="Wayk" style={{ height: isMobile ? 38 : 49, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? 16 : 40 }}>
          {!isMobile && <button onClick={() => scrollTo(rosterRef)} style={{ fontSize: 15, color: "#d1d5db", background: "none", border: "none", cursor: "pointer" }}>Roster</button>}
          <button onClick={() => scrollTo(ctaRef)} style={{ padding: isMobile ? "10px 20px" : "14px 28px", backgroundColor: "white", color: "#0a0a0a", fontWeight: 600, borderRadius: 9999, fontSize: isMobile ? 13 : 15, border: "none", cursor: "pointer" }}>Work With Us</button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: isMobile ? "120px 24px 60px" : "140px 80px 100px", position: "relative" }}>
        <div style={{ position: "absolute", width: isMobile ? 400 : 700, height: isMobile ? 400 : 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(163,30,34,0.25) 0%, transparent 70%)", left: isMobile ? -200 : -250, top: 50, filter: "blur(60px)" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 10, width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{ fontSize: isMobile ? 48 : 100, fontWeight: 700, lineHeight: 1.05, marginBottom: isMobile ? 20 : 30, letterSpacing: "-0.03em" }}>
            <span style={{ display: "block" }}>Your brand.</span>
            <span style={{ display: "block", background: "linear-gradient(to right, #ef4444, #f87171, #dc2626)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Their feed.</span>
            <span style={{ display: "block" }}>Millions watching.</span>
          </h1>
          <p style={{ fontSize: isMobile ? 18 : 26, color: "#9ca3af", maxWidth: 680, marginBottom: isMobile ? 32 : 50, lineHeight: 1.5, padding: isMobile ? "0 10px" : 0 }}>We work with the creators behind the memes and trends. People who actually influence others, not just influencers. Content that performs.</p>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 12 : 20, marginBottom: isMobile ? 50 : 80, justifyContent: "center", width: isMobile ? "100%" : "auto" }}>
            <button onClick={() => scrollTo(ctaRef)} style={{ padding: isMobile ? "16px 32px" : "20px 44px", backgroundColor: "white", color: "#0a0a0a", fontWeight: 600, borderRadius: 9999, fontSize: isMobile ? 16 : 18, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              Get Started <span style={{ fontSize: isMobile ? 18 : 22 }}>→</span>
            </button>
            <button onClick={() => scrollTo(rosterRef)} style={{ padding: isMobile ? "16px 32px" : "20px 44px", backgroundColor: "transparent", color: "white", fontWeight: 500, borderRadius: 9999, fontSize: isMobile ? 16 : 18, border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
              See the Roster
            </button>
          </div>
          <div style={{ display: "flex", gap: isMobile ? 40 : 100, justifyContent: "center", flexWrap: "wrap" }}>
            <div><div style={{ fontSize: isMobile ? 40 : 64, fontWeight: 700 }}>10B+</div><div style={{ fontSize: isMobile ? 13 : 15, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>Views</div></div>
            <div><div style={{ fontSize: isMobile ? 40 : 64, fontWeight: 700 }}>20M+</div><div style={{ fontSize: isMobile ? 13 : 15, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>Followers</div></div>
            <div><div style={{ fontSize: isMobile ? 40 : 64, fontWeight: 700 }}>50+</div><div style={{ fontSize: isMobile ? 13 : 15, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em" }}>Creators</div></div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ padding: isMobile ? "80px 24px" : "140px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? 40 : 64, fontWeight: 700, marginBottom: 16, textAlign: isMobile ? "center" : "left" }}>Why Wayk</h2>
          <p style={{ fontSize: isMobile ? 18 : 22, color: "#9ca3af", marginBottom: isMobile ? 40 : 60, textAlign: isMobile ? "center" : "left" }}>Work directly with the source.</p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 20 : 30 }}>
            {[
              { icon: "⚡", title: "Trend starters", desc: "Our creators make the sounds and formats you see everywhere. They don't follow trends—they set them." },
              { icon: "📈", title: "Engagement that converts", desc: "Content people actually watch, share, and act on. Not polished ads that get skipped." },
              { icon: "👥", title: "Major metro reach", desc: "Strong audiences in LA, NYC, Miami and other key markets where culture happens." },
              { icon: "🎯", title: "Direct communication", desc: "No account managers or layers. You talk to us, we handle the rest." }
            ].map((f, i) => (
              <div key={i} style={{ padding: isMobile ? 28 : 44, borderRadius: isMobile ? 20 : 28, backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ width: isMobile ? 50 : 60, height: isMobile ? 50 : 60, borderRadius: isMobile ? 14 : 18, backgroundColor: "rgba(220,38,38,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: isMobile ? 20 : 28, fontSize: isMobile ? 24 : 28 }}>{f.icon}</div>
                <h3 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 600, marginBottom: isMobile ? 10 : 14 }}>{f.title}</h3>
                <p style={{ color: "#9ca3af", fontSize: isMobile ? 15 : 17, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roster */}
      <section ref={rosterRef} style={{ padding: isMobile ? "80px 24px" : "140px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "center" : "flex-end", marginBottom: isMobile ? 40 : 60, textAlign: isMobile ? "center" : "left", gap: isMobile ? 16 : 0 }}>
            <div>
              <h2 style={{ fontSize: isMobile ? 40 : 64, fontWeight: 700, marginBottom: 16 }}>The Roster</h2>
              <p style={{ fontSize: isMobile ? 18 : 22, color: "#9ca3af" }}>A few names. Request access for the full list.</p>
            </div>
            <button onClick={() => scrollTo(ctaRef)} style={{ display: "flex", alignItems: "center", gap: 8, color: "#ef4444", fontWeight: 500, background: "none", border: "none", cursor: "pointer", fontSize: 17 }}>Full roster →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr 1fr", gap: isMobile ? 16 : 28 }}>
            {[
              { name: "Haskell", img: "/images/haskell.png", followers: "1.7M", engagement: "10.7%" },
              { name: "Diddybop", img: "/images/diddybop.webp", followers: "2.5M", engagement: "19.7%" },
              { name: "Colin Meyers", img: "/images/colin.webp", followers: "1.8M", engagement: "12.2%" },
              { name: "Kiid Katze", img: "/images/katze.webp", followers: "2.5M", engagement: "16.1%" },
              { name: "Ryan Tang", img: "/images/ryan.webp", followers: "4.6M", engagement: "11.5%" },
              { name: "30+ More", imgs: [
                "/images/geo.jpeg",
                "/images/myer.webp",
                "/images/Mr-Spermracing.png"
              ]}
            ].map((creator, i) => (
              <div 
                key={i} 
                style={{ 
                  aspectRatio: "1", 
                  borderRadius: isMobile ? 16 : 24, 
                  backgroundColor: "#151515", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  border: "1px solid rgba(255,255,255,0.05)",
                  position: "relative",
                  overflow: "hidden",
                  transform: hoveredCard === i ? "scale(1.05)" : "scale(1)",
                  boxShadow: hoveredCard === i ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  zIndex: hoveredCard === i ? 10 : 1
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {creator.img ? (
                  <>
                    <img 
                      src={creator.img} 
                      alt={creator.name}
                      style={{ 
                        width: "100%", 
                        height: "100%", 
                        objectFit: "cover",
                        filter: hoveredCard === i ? "brightness(1.1)" : "brightness(0.8)",
                        transition: "filter 0.3s ease"
                      }} 
                    />
                    <div style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: isMobile ? "40px 16px 16px" : "60px 20px 20px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
                      opacity: hoveredCard === i ? 1 : 0.8,
                      transition: "opacity 0.3s ease"
                    }}>
                      <span style={{ color: "white", fontSize: isMobile ? 14 : 18, fontWeight: 600, display: "block" }}>{creator.name}</span>
                      <div style={{ 
                        display: "flex", 
                        gap: isMobile ? 8 : 12, 
                        marginTop: 8,
                        opacity: hoveredCard === i || isMobile ? 1 : 0,
                        transform: hoveredCard === i || isMobile ? "translateY(0)" : "translateY(10px)",
                        transition: "opacity 0.3s ease, transform 0.3s ease"
                      }}>
                        <span style={{ color: "#9ca3af", fontSize: isMobile ? 11 : 14 }}>{creator.followers}</span>
                        <span style={{ color: "#22c55e", fontSize: isMobile ? 11 : 14 }}>{creator.engagement} ER</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {creator.imgs.map((img, j) => (
                      <img 
                        key={j}
                        src={img} 
                        alt={`Creator ${j + 1}`}
                        style={{ 
                          position: "absolute",
                          width: "60%",
                          height: "60%",
                          objectFit: "cover",
                          borderRadius: isMobile ? 12 : 16,
                          border: "2px solid rgba(255,255,255,0.1)",
                          transform: hoveredCard === i 
                            ? `rotate(${(j - 1) * 15}deg) translateX(${(j - 1) * 30}px) scale(1.05)` 
                            : `rotate(${(j - 1) * 5}deg) translateX(${(j - 1) * 10}px)`,
                          transition: "transform 0.4s ease",
                          zIndex: 3 - j,
                          filter: hoveredCard === i ? "brightness(1)" : "brightness(0.7)"
                        }} 
                      />
                    ))}
                    <div style={{
                      position: "absolute",
                      bottom: isMobile ? 16 : 20,
                      left: 0,
                      right: 0,
                      textAlign: "center",
                      zIndex: 10
                    }}>
                      <span style={{ color: "white", fontSize: isMobile ? 14 : 18, fontWeight: 600, textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}>{creator.name}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: isMobile ? "80px 24px" : "140px 80px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? 40 : 64, fontWeight: 700, marginBottom: 16, textAlign: "center" }}>How it works</h2>
          <p style={{ fontSize: isMobile ? 18 : 22, color: "#9ca3af", marginBottom: isMobile ? 50 : 80, textAlign: "center" }}>Three steps from brief to live content.</p>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr", gap: isMobile ? 40 : 60 }}>
            {[
              { n: "01", t: "Share your goals", d: "Tell us what you're promoting, who you're targeting, and your budget range." },
              { n: "02", t: "Review our picks", d: "We send creator options with follower counts, engagement rates, and past work." },
              { n: "03", t: "Launch and track", d: "We coordinate everything. You get the content and watch it perform." }
            ].map((s, i) => (
              <div key={i} style={{ textAlign: isMobile ? "center" : "left" }}>
                <div style={{ fontSize: isMobile ? 60 : 90, fontWeight: 700, background: "linear-gradient(to bottom, rgba(220,38,38,0.3), transparent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: isMobile ? 12 : 20 }}>{s.n}</div>
                <h3 style={{ fontSize: isMobile ? 22 : 26, fontWeight: 600, marginBottom: isMobile ? 10 : 14 }}>{s.t}</h3>
                <p style={{ color: "#9ca3af", fontSize: isMobile ? 15 : 17, lineHeight: 1.6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} style={{ padding: isMobile ? "80px 24px" : "140px 80px", position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: isMobile ? 350 : 600, height: isMobile ? 350 : 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(163,30,34,0.2) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 10 }}>
          <h2 style={{ fontSize: isMobile ? 36 : 72, fontWeight: 700, marginBottom: isMobile ? 20 : 28 }}>Ready to get started?</h2>
          <p style={{ fontSize: isMobile ? 18 : 22, color: "#9ca3af", marginBottom: isMobile ? 32 : 50, padding: isMobile ? "0 10px" : 0 }}>Drop your email and we'll reach out with what we can do for your brand.</p>
          {submitted ? (
            <div style={{ padding: isMobile ? "16px 24px" : "20px 36px", backgroundColor: "rgba(34,197,94,0.2)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: 9999, color: "#22c55e", fontSize: isMobile ? 15 : 17, fontWeight: 500 }}>
              ✓ Thanks! We'll be in touch soon.
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: 16, justifyContent: "center", maxWidth: 520, margin: "0 auto" }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && handleSubmitEmail()} placeholder="you@company.com" style={{ flex: 1, padding: isMobile ? "16px 20px" : "20px 28px", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 9999, color: "white", fontSize: isMobile ? 16 : 17, outline: "none" }} />
              <button onClick={handleSubmitEmail} style={{ padding: isMobile ? "16px 28px" : "20px 36px", backgroundColor: "white", color: "#0a0a0a", fontWeight: 600, borderRadius: 9999, border: "none", cursor: "pointer", fontSize: isMobile ? 16 : 17 }}>Get in Touch</button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: isMobile ? "40px 24px" : "50px 80px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: isMobile ? 20 : 0 }}>
          <img src="/images/W wayk.png" alt="Wayk" style={{ height: isMobile ? 38 : 49 }} />
          <div style={{ color: "#9ca3af", fontSize: isMobile ? 14 : 15 }}>📍 LA • NYC • Miami</div>
          <a href="mailto:hello@wayk.agency" style={{ color: "#9ca3af", fontSize: 20, textDecoration: "none" }}>✉️</a>
        </div>
        <div style={{ maxWidth: 1100, margin: "40px auto 0", paddingTop: isMobile ? 24 : 40, borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", fontSize: isMobile ? 12 : 14, color: "#4b5563" }}>© 2025 Wayk Talent</div>
      </footer>
    </div>
  );
}

export default App;
