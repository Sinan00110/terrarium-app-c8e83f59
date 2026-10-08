import React from 'react';
import { AppShell } from './components/AppShell.jsx';
import { useLocalState } from './hooks/useLocalState.js';

const initialSections = [
  {
    "title": "Calculator",
    "body": "display panel showing current input and result, full keypad (0-9, +\u2212\u00d7\u00f7, %, \u221a, x\u00b2, \u00b1, clear, backspace, equals), history tape sidebar listing prior calculations with timestamps and "
  },
  {
    "title": "Live result",
    "body": "Immediate output area that makes the tool feel responsive."
  },
  {
    "title": "History",
    "body": "Saved recent entries for continuity."
  },
  {
    "title": "Options",
    "body": "Useful settings without overwhelming the interface."
  }
];

export default function App() {
  const [sections, setSections] = useLocalState('terrarium-sections', initialSections);
  return <AppShell title="Full-featured calculator with history tape and standard math operations" eyebrow="Smart web tool" subtitle="React/Vite frontend-only calculator" sections={sections} onSectionsChange={setSections} />;
}
