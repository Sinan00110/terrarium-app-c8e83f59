import React from 'react';
import { useMemo, useState } from 'react';
import { Hero } from './Hero.jsx';
import { FeatureGrid } from './FeatureGrid.jsx';
import { DetailPanel } from './DetailPanel.jsx';
import { ContactForm } from './ContactForm.jsx';
import { Toolbar } from './Toolbar.jsx';

export function AppShell({ title, eyebrow, subtitle, sections, onSectionsChange }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mode, setMode] = useState('overview');
  const activeSection = sections[activeIndex] ?? sections[0];
  const metrics = useMemo(() => [sections.length, activeIndex + 1, mode === 'contact' ? 'Contact' : 'Explore'], [sections.length, activeIndex, mode]);
  function addSection() {
    const next = { title: `Custom idea ${sections.length + 1}`, body: 'New interactive section added during the live preview.' };
    onSectionsChange([...sections, next]);
    setActiveIndex(sections.length);
  }
  return (
    <main className="app-shell">
      <Toolbar mode={mode} onModeChange={setMode} onAdd={addSection} />
      <Hero title={title} eyebrow={eyebrow} subtitle={subtitle} metrics={metrics} onExplore={() => setMode('overview')} onContact={() => setMode('contact')} />
      {mode === 'contact' ? (
        <ContactForm title={title} />
      ) : (
        <>
          <FeatureGrid sections={sections} activeIndex={activeIndex} onSelect={setActiveIndex} />
          <DetailPanel section={activeSection} index={activeIndex} total={sections.length} onPrev={() => setActiveIndex((activeIndex - 1 + sections.length) % sections.length)} onNext={() => setActiveIndex((activeIndex + 1) % sections.length)} />
        </>
      )}
    </main>
  );
}
