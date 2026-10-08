import React from 'react';
export function Hero({ title, eyebrow, subtitle, metrics, onExplore, onContact }) {
  return <section className="hero"><p>{eyebrow}</p><h1>{title}</h1><span>{subtitle}</span><div className="hero-actions"><button type="button" onClick={onExplore}>Explore sections</button><button type="button" className="ghost-button" onClick={onContact}>Open contact</button></div><div className="metrics">{metrics.map((metric, index) => <strong key={index}>{metric}<small>{index === 0 ? 'sections' : index === 1 ? 'active' : 'mode'}</small></strong>)}</div></section>;
}
