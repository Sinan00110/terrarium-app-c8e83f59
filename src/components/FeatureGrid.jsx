import React from 'react';
export function FeatureGrid({ sections, activeIndex, onSelect }) {
  return <section className="card-grid" aria-label="Interactive sections">{sections.map((section, index) => <button type="button" className={`card ${activeIndex === index ? 'selected' : ''}`} key={`${section.title}-${index}`} onClick={() => onSelect(index)}><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.title}</h2><p>{section.body}</p></button>)}</section>;
}
