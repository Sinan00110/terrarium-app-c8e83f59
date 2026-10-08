import React from 'react';
export function DetailPanel({ section, index, total, onPrev, onNext }) {
  if (!section) return null;
  return <section className="detail-panel"><div><p>Selected section {index + 1} of {total}</p><h2>{section.title}</h2><span>{section.body}</span></div><div className="panel-actions"><button type="button" className="ghost-button" onClick={onPrev}>Previous</button><button type="button" onClick={onNext}>Next section</button></div></section>;
}
