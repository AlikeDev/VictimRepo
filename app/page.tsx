"use client"

import { useState } from "react"
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="page-shell">
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Northstar home"><span className="brand-mark">N</span> northstar</a>
        <a className="nav-link" href="mailto:hello@northstar.studio">hello@northstar.studio <ArrowUpRight aria-hidden="true" /></a>
      </nav>

      <section className="contact-grid" id="top">
        <div className="intro">
          <p className="eyebrow">Let&apos;s make something meaningful</p>
          <h1>Tell us what&apos;s<br /><em>on your mind.</em></h1>
          <p className="lead">Whether you&apos;re shaping a new idea, refining an existing product, or simply want to say hello, we&apos;d love to hear from you.</p>
          <div className="details">
            <a href="mailto:hello@northstar.studio"><Mail aria-hidden="true" /> hello@northstar.studio</a>
            <span><MapPin aria-hidden="true" /> New York · London · Everywhere</span>
          </div>
        </div>

        <div className="form-card">
          {submitted ? (
            <div className="success" role="status">
              <CheckCircle2 aria-hidden="true" />
              <h2>Message received.</h2>
              <p>Thanks for reaching out. We&apos;ll be in touch soon.</p>
              <button type="button" className="text-button" onClick={() => setSubmitted(false)}>Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="field-row">
                <label>What&apos;s your name?<input name="name" autoComplete="name" placeholder="Jane Smith" required /></label>
                <label>And your email?<input name="email" type="email" autoComplete="email" placeholder="jane@company.com" required /></label>
              </div>
              <label>What can we help with?<select name="topic" defaultValue=""><option value="" disabled>Select a topic</option><option>New project</option><option>Existing product</option><option>Partnership</option><option>Just saying hello</option></select></label>
              <label>Tell us a little more<textarea name="message" placeholder="A few words about your project, ambition, or question..." rows={5} required /></label>
              <button className="submit-button" type="submit">Send message <Send aria-hidden="true" /></button>
              <p className="privacy">By sending this form, you agree to our privacy policy.</p>
            </form>
          )}
        </div>
      </section>
      <footer>© 2026 Northstar Studio <span>Built for the curious.</span></footer>
    </main>
  )
}
