"use client";
import React from 'react';

// Simple learning flow diagram SVG
export function FlowDiagram() {
  return (
    <figure className="w-full max-w-3xl mx-auto mb-12" aria-labelledby="flow-diagram-title">
      <figcaption id="flow-diagram-title" className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
        Player Learning Flow: Controlled onboarding → Core verb confidence → Mastery (pattern recognition).
      </figcaption>
      <svg
        viewBox="0 0 900 200"
        role="img"
        aria-label="Diagram showing sequential learning stages: Onboarding, Core Verb Confidence, Mastery (Pattern Recognition)"
        className="w-full h-auto text-gray-800 dark:text-gray-100"
      >
        <defs>
          <linearGradient id="gradA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradC" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <g fontFamily="system-ui, sans-serif" fontSize="14" textAnchor="middle">
          <rect x="40" y="60" width="200" height="90" rx="12" fill="url(#gradA)" opacity="0.85" />
          <text x="140" y="100" fill="#fff" fontWeight="600">Onboarding</text>
          <text x="140" y="120" fill="#e0e7ff" fontSize="12">Tutorial + gated abilities</text>

          <rect x="320" y="60" width="200" height="90" rx="12" fill="url(#gradA)" opacity="0.85" />
          <text x="420" y="100" fill="#fff" fontWeight="600">Core Verb Confidence</text>
          <text x="420" y="120" fill="#e0e7ff" fontSize="12">Early safe encounters</text>

          <rect x="600" y="60" width="200" height="90" rx="12" fill="url(#gradB)" opacity="0.9" />
          <text x="700" y="100" fill="#fff" fontWeight="600">Mastery (Pattern</text>
          <text x="700" y="118" fill="#fff" fontWeight="600">Recognition)</text>

          <path d="M240 105 L320 105" stroke="#6366f1" strokeWidth="4" markerEnd="url(#arrow)" />
          <path d="M520 105 L600 105" stroke="#8b5cf6" strokeWidth="4" markerEnd="url(#arrow)" />
        </g>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </figure>
  );
}

export default FlowDiagram;
