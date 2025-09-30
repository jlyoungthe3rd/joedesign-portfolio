"use client";
import React from 'react';

// Boss state diagram: player can start in any of three states; final random state excludes previous phase choice.
export function BossStateDiagram() {
  return (
    <figure className="w-full max-w-3xl mx-auto mb-12" aria-labelledby="boss-diagram-title">
      <figcaption id="boss-diagram-title" className="text-center text-sm text-gray-600 dark:text-gray-400 mb-2">
        Boss State Loop: Sequential escalation (State A → State B → State C) with cyclic return paths from State C back to State A or State B.
      </figcaption>
      <svg
        viewBox="0 0 900 200"
        role="img"
        aria-label="Diagram showing states: State A transitions to State B, State B to State C, and State C loops back to both State A and State B"
        className="w-full h-auto text-gray-800 dark:text-gray-100"
      >
        <defs>
          <linearGradient id="phaseA" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
          <linearGradient id="phaseB" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
          <linearGradient id="phaseC" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#fbbf24" />
          </linearGradient>
          {/* No final phase gradient needed in loop model */}
        </defs>
        <g fontFamily="system-ui, sans-serif" fontSize="14" textAnchor="middle">
          <rect x="90" y="60" width="180" height="90" rx="14" fill="url(#phaseA)" opacity="0.9" />
          <text x="180" y="105" fill="#fff" fontWeight="600">State A</text>

          <rect x="360" y="60" width="180" height="90" rx="14" fill="url(#phaseB)" opacity="0.9" />
          <text x="450" y="105" fill="#fff" fontWeight="600">State B</text>

          <rect x="630" y="60" width="180" height="90" rx="14" fill="url(#phaseC)" opacity="0.9" />
          <text x="720" y="105" fill="#fff" fontWeight="600">State C</text>

          {/* Linear forward progression */}
          <path d="M270 105 L360 105" stroke="#6366f1" strokeWidth="4" markerEnd="url(#arrowLoop)" />
          <path d="M540 105 L630 105" stroke="#ec4899" strokeWidth="4" markerEnd="url(#arrowLoop)" />

          {/* Loop-backs from C */}
          <path d="M630 90 C560 40, 300 40, 270 90" stroke="#f59e0b" strokeWidth="4" fill="none" markerEnd="url(#arrowLoop)" />
          <path d="M630 120 C600 160, 560 160, 540 120" stroke="#f59e0b" strokeWidth="4" fill="none" markerEnd="url(#arrowLoop)" />
        </g>
        <defs>
          <marker id="arrowLoop" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L6,3 z" fill="currentColor" />
          </marker>
        </defs>
      </svg>
    </figure>
  );
}

export default BossStateDiagram;
