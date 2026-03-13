'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';

export default function FreeResourcePage() {
  const searchParams = useSearchParams();
  const resource = searchParams.get('resource') || 'Resource Guide';
  const keyword = searchParams.get('keyword') || '';
  const topic = searchParams.get('topic') || '';

  useEffect(() => {
    // Populate dynamic text elements
    const resourceNameEl = document.getElementById('resource-name');
    const cardResourceNameEl = document.getElementById('card-resource-name');
    const btnResourceNameEl = document.getElementById('btn-resource-name');
    const yearEl = document.getElementById('year');

    if (resourceNameEl) resourceNameEl.textContent = resource;
    if (cardResourceNameEl) cardResourceNameEl.textContent = resource;
    if (btnResourceNameEl) btnResourceNameEl.textContent = resource;
    if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

    // Set document title
    document.title = `Your Free ${resource} — Clear Choice Payment Solutions`;

    // Populate hidden form fields
    const field27 = document.getElementById('field[27]') as HTMLInputElement;
    const field28 = document.getElementById('field[28]') as HTMLInputElement;
    const field29 = document.getElementById('field[29]') as HTMLInputElement;

    if (field27) field27.value = keyword;
    if (field28) field28.value = topic;
    if (field29) field29.value = resource;
  }, [resource, keyword, topic]);

  return (
    <>
      <style jsx global>{`
        /* ─── Fonts ─────────────────────────────────────────────── */
        @font-face {
          font-family: 'SwitchCommerce';
          src: url('/fonts/SWITCHCOMMERCEBOLD.otf') format('opentype');
          font-weight: 700;
          font-style: normal;
        }
        @font-face {
          font-family: 'SwitchCommerce';
          src: url('/fonts/SWITCHCOMMERCEREG.otf') format('opentype');
          font-weight: 400;
          font-style: normal;
        }

        /* ─── Variables ─────────────────────────────────────────── */
        :root {
          --orange:      #FF4F00;
          --navy:        #002B5E;
          --white-lilac: #E8E7E7;
          --silver:      #C2C2C2;
          --slate:       #75808D;
          --white:       #ffffff;
        }

        /* ─── Reset ─────────────────────────────────────────────── */
        .free-resource-page *, 
        .free-resource-page *::before, 
        .free-resource-page *::after { 
          box-sizing: border-box; 
        }
        .free-resource-page {
          font-family: 'Avenir Next', 'Avenir', 'Nunito Sans', sans-serif;
          background: var(--white-lilac);
          color: var(--navy);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
        }

        /* ─── Header ─────────────────────────────────────────────── */
        .free-resource-page .resource-header {
          background: var(--navy);
          padding: 22px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 4px solid var(--orange);
        }
        .free-resource-page .resource-header img.logo {
          height: 52px;
          width: auto;
        }
        .free-resource-page .resource-header .tagline {
          font-family: 'SwitchCommerce', sans-serif;
          font-weight: 700;
          font-size: 13px;
          color: var(--silver);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ─── Hero ───────────────────────────────────────────────── */
        .free-resource-page .hero {
          background: var(--navy);
          padding: 60px 40px 80px;
          text-align: center;
          position: relative;
        }
        .free-resource-page .hero .eyebrow {
          font-family: 'SwitchCommerce', sans-serif;
          font-weight: 400;
          font-size: 13px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 16px;
        }
        .free-resource-page .hero h1 {
          font-family: 'SwitchCommerce', sans-serif;
          font-weight: 700;
          font-size: clamp(36px, 6vw, 64px);
          color: var(--white);
          line-height: 1.15;
          max-width: 900px;
          margin: 0 auto 20px;
          text-transform: uppercase;
        }
        .free-resource-page .hero h1 span.highlight {
          color: var(--orange);
        }
        .free-resource-page .hero .subtitle {
          font-size: 17px;
          color: var(--silver);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* ─── Card ───────────────────────────────────────────────── */
        .free-resource-page .card-wrap {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 0 20px 60px;
          margin-top: -44px;
          position: relative;
          z-index: 10;
        }
        .free-resource-page .card {
          background: var(--white);
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0,43,94,0.14);
          width: 100%;
          max-width: 560px;
          padding: 48px 48px 40px;
          border-top: 5px solid var(--orange);
        }
        .free-resource-page .card h2 {
          font-family: 'SwitchCommerce', sans-serif;
          font-weight: 700;
          font-size: 22px;
          color: var(--navy);
          margin-bottom: 8px;
          text-transform: uppercase;
        }
        .free-resource-page .card .card-sub {
          font-size: 15px;
          color: var(--slate);
          margin-bottom: 32px;
          line-height: 1.5;
        }

        /* ─── AC Form Overrides (match CC style) ─────────────────── */
        #_form_1_ {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          padding: 0 !important;
          margin: 0 !important;
          max-width: 100% !important;
          font-family: 'Avenir Next', 'Avenir', 'Nunito Sans', sans-serif !important;
          color: var(--navy) !important;
        }
        /* Hide AC form title + description (we have our own in .card) */
        #_form_1_ ._field_header,
        #_form_1_ ._field_html {
          display: none !important;
        }
        /* Labels */
        #_form_1_ ._form-label {
          font-family: 'SwitchCommerce', sans-serif !important;
          font-weight: 700 !important;
          font-size: 13px !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
          color: var(--navy) !important;
          margin-bottom: 8px !important;
        }
        /* Inputs */
        #_form_1_ ._form_element input[type="text"],
        #_form_1_ ._form_element input[type="email"] {
          width: 100% !important;
          padding: 14px 18px !important;
          border: 2px solid var(--white-lilac) !important;
          border-radius: 8px !important;
          font-size: 16px !important;
          font-family: 'Avenir Next', 'Avenir', 'Nunito Sans', sans-serif !important;
          color: var(--navy) !important;
          background: #fafafa !important;
          outline: none !important;
          transition: border-color 0.2s !important;
          margin-bottom: 0 !important;
        }
        #_form_1_ ._form_element input[type="text"]:focus,
        #_form_1_ ._form_element input[type="email"]:focus {
          border-color: var(--orange) !important;
          background: var(--white) !important;
        }
        #_form_1_ ._form_element {
          margin-bottom: 20px !important;
        }
        /* Submit button */
        #_form_1_ ._submit {
          width: 100% !important;
          padding: 16px !important;
          background: var(--orange) !important;
          color: var(--white) !important;
          font-family: 'SwitchCommerce', sans-serif !important;
          font-weight: 700 !important;
          font-size: 16px !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
          border: none !important;
          border-radius: 8px !important;
          cursor: pointer !important;
          transition: background 0.2s, transform 0.1s !important;
        }
        #_form_1_ ._submit:hover  { background: #e64500 !important; }
        #_form_1_ ._submit:active { transform: scale(0.98) !important; }
        /* Button wrapper — full width */
        #_form_1_ ._button-wrapper { width: 100% !important; }
        /* AC branding — hide it */
        #_form_1_ ._form-branding { display: none !important; }
        /* Thank-you message */
        #_form_1_ ._form-thank-you {
          font-family: 'SwitchCommerce', sans-serif !important;
          color: var(--navy) !important;
          font-size: 18px !important;
          padding: 12px 0 !important;
        }
        /* Privacy note */
        .free-resource-page .privacy-note {
          font-size: 12px;
          color: var(--silver);
          text-align: center;
          margin-top: 16px;
          line-height: 1.5;
        }

        /* ─── Footer ─────────────────────────────────────────────── */
        .free-resource-page .resource-footer {
          background: var(--navy);
          border-top: 3px solid var(--orange);
          padding: 24px 40px;
          text-align: center;
        }
        .free-resource-page .resource-footer .footer-tagline {
          font-family: 'SwitchCommerce', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--orange);
          margin-bottom: 6px;
        }
        .free-resource-page .resource-footer .footer-copy {
          font-size: 12px;
          color: var(--slate);
        }

        /* ─── Responsive ─────────────────────────────────────────── */
        @media (max-width: 600px) {
          .free-resource-page .resource-header { padding: 18px 20px; }
          .free-resource-page .resource-header .tagline { display: none; }
          .free-resource-page .hero { padding: 44px 24px 72px; }
          .free-resource-page .card { padding: 36px 24px 28px; }
          .free-resource-page .card-wrap { padding: 0 12px 48px; }
          .free-resource-page .resource-footer { padding: 20px 24px; }
        }
      `}</style>

      <link 
        rel="stylesheet" 
        href="https://fonts.bunny.net/css?family=lato:400|montserrat:700|sans-serif:400|IBM+Plex+Sans:400" 
      />

      <div className="free-resource-page">
        {/* Header */}
        <header className="resource-header">
          <img className="logo" src="/brand/cc-logo-white-orange.png" alt="Clear Choice Payment Solutions" />
          <span className="tagline">Payments Without Limits</span>
        </header>

        {/* Hero */}
        <div className="hero">
          <p className="eyebrow">Free Resource</p>
          <h1>Your Free <span className="highlight" id="resource-name">Resource</span> Is One Step Away</h1>
          <p className="subtitle">Enter your email below and we'll send it straight to your inbox — no strings attached.</p>
        </div>

        {/* Form Card */}
        <div className="card-wrap">
          <div className="card">
            <h2>Claim Your Free <span id="card-resource-name">Resource</span></h2>
            <p className="card-sub">You're one step away. Just drop your email below and we'll send it right over.</p>

            <form 
              method="POST" 
              action="https://switchcommerce.activehosted.com/proc.php" 
              id="_form_1_" 
              className="_form _form_1 _inline-form _dark" 
              noValidate 
              data-styles-version="5"
            >
              <input type="hidden" name="u" value="1" />
              <input type="hidden" name="f" value="1" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input type="hidden" name="or" value="78cac7b2-8d02-4259-90a6-8fa94409edc2" />

              <div className="_form-content">
                <div className="_form_element _field_header _full_width _clear">
                  <h2 className="_form-title">CLAIM YOUR FREE RESOURCE GUIDE</h2>
                </div>
                <div className="_form_element _field_html _full_width _clear">
                  <div className="_html-code"><p>You're one step away. Just drop your email below and we'll send it right over.</p></div>
                </div>

                {/* First Name */}
                <div className="_form_element _x96539450 _full_width">
                  <label htmlFor="firstname" className="_form-label">First Name<span className="field-required">*</span></label>
                  <div className="_field-wrapper">
                    <input type="text" id="firstname" name="firstname" placeholder="Your first name" autoComplete="given-name" required />
                  </div>
                </div>

                {/* Email */}
                <div className="_form_element _field_email _full_width">
                  <label htmlFor="email" className="_form-label">Email Address<span className="field-required">*</span></label>
                  <div className="_field-wrapper">
                    <input type="text" id="email" name="email" placeholder="you@example.com" autoComplete="email" required />
                  </div>
                </div>

                {/* Hidden giveaway fields */}
                <input type="hidden" id="field[27]" name="field[27]" value="" />
                <input type="hidden" id="field[28]" name="field[28]" value="" />
                <input type="hidden" id="field[29]" name="field[29]" value="" />

                {/* Submit */}
                <div className="_button-wrapper _full_width">
                  <button id="_form_1_submit" className="_submit" type="submit">
                    Send Me The <span id="btn-resource-name">Resource</span> →
                  </button>
                </div>

                <div className="_clear-element"></div>
              </div>

              <div className="_form-thank-you" style={{ display: 'none' }}></div>

              <div className="_form-branding">
                <div className="_marketing-by">Marketing by</div>
                <a href="https://www.activecampaign.com/?utm_medium=referral&utm_campaign=acforms" className="_logo">
                  <span className="form-sr-only">ActiveCampaign</span>
                </a>
              </div>
            </form>

            <p className="privacy-note">🔒 We respect your privacy. No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="resource-footer">
          <p className="footer-tagline">Payments Without Limits</p>
          <p className="footer-copy">&copy; <span id="year"></span> Clear Choice Payment Solutions. All rights reserved.</p>
        </footer>
      </div>

      {/* ActiveCampaign Form Script */}
      <Script id="activecampaign-config" strategy="afterInteractive">
        {`window.cfields = {"27":"giveaway_keyword","28":"giveaway_topic","29":"giveaway_resource"};`}
      </Script>
    </>
  );
}
