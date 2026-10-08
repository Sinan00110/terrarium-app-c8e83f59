import React from 'react';
import { useState } from 'react';

export function ContactForm({ title }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  function submit(event) { event.preventDefault(); setSent(true); }
  return <section className="contact-panel"><form onSubmit={submit}><p>Interactive contact flow</p><h2>Ask about {title}</h2><label>Name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="Your name" /></label><label>Message<textarea value={message} onChange={(event) => setMessage(event.target.value)} placeholder="What should this app help with?" /></label><button type="submit">Send preview message</button>{sent ? <strong className="success">Thanks{name ? `, ${name}` : ''}. This preview captured your message.</strong> : null}</form></section>;
}
