"use client";

import { useState, useRef, memo } from 'react';
import FlowDiagram from '@/components/diagrams/FlowDiagram';
import BossStateDiagram from '@/components/diagrams/BossStateDiagram';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ImageGallery, { ImageGalleryRef } from '@/components/ImageGallery';
// Removed VideoModal usage – videos now play inline.

export default function Project1Content() {
  // Inline videos: no modal state needed anymore.
  const galleryRef = useRef<ImageGalleryRef>(null);

  const handleScriptableObjectClick = () => {
    galleryRef.current?.openLightbox(2); // designframework3 is at index 2
  };

  // Reordered so New Player Experience appears before the Framework section.
  // Added 'kind' to avoid brittle index-based branching in rendering.
  // Reusable tooltip-enabled term component
  const GlossaryTerm = ({ term, definition }: { term: string; definition: string }) => (
    <span className="relative font-semibold underline decoration-dotted cursor-help group">
      {term}
      <span
        role="tooltip"
        className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-56 z-20 bg-gray-900 text-white text-xs rounded-md px-3 py-2 shadow-lg"
      >
        {definition}
      </span>
    </span>
  );

  const enemyDesigns = [
    {
      kind: 'npe',
      title: 'New Player Experience, Difficulty, and Pacing',
      description: (
        <>
          <p className='mb-3'>
            <b>Problem:</b> Early builds exposed every ability immediately, producing option paralysis and longer first-turn dwell time.
          </p>
          <p className='mb-3'>
            <b>Insight:</b> Cognitive overload reduced experimentation and undermined early retention signals.
          </p>
            <p className='mb-3'>
            <b>Solution:</b> Layered ability unlocks + tutorial encounter + enemy queue preview to externalize upcoming threats.
          </p>
          <ul className='list-disc list-inside mb-3'>
            <li>Gated unlock curve (reduces initial cognitive surface)</li>
            <li>Tutorial encounter with tightly scoped verbs</li>
            <li>Enemy queue: future intent surfaced upfront</li>
          </ul>
        </>
      ),
    },
    {
      kind: 'resource',
      title: 'Resource and Tension Management',
      description: (
        <>
          <p className='mb-3'>
            Designed specific enemy abilities & resistances to force meaningful <span className='font-bold'>resource management</span> trade–offs.
          </p>
          <ul className='list-disc list-inside mb-3'>
            <li>Player may choose low-impact removal (no trigger) to conserve limited resources.</li>
            <li><b><GlossaryTerm term='Deathknell:' definition='A conditional trigger that produces a beneficial swing (cleanse / advantage) if timed correctly.' /></b> Possible cleanse & boost if timed; penalty if ignored.</li>
            <li><b>Non-mitigable states:</b> Forces adaptive sequencing of ability usage.</li>
            <li><b>Behavior shifts:</b> Later enemies punish static planning.</li>
          </ul>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            <i>Skill Expression: Correct high-impact trade decisions improved from 30% → 60%.</i>
          </p>
        </>
      ),
    },
    {
      kind: 'tells',
      title: 'Implemented Visual & Textual Tells',
      description: (
        <>
          <p className='mb-3'>
            <b>Problem:</b> Players didn&apos;t fully understand causal links between enemy actions and resource changes.
          </p>
          <p className='mb-3'>
            <b>Solution:</b> Added per-action numeric feedback & predictive intent using <GlossaryTerm term='Intent Tell' definition='A pre-action indicator (text/icon) communicating what an enemy will do next to aid tactical planning.' /> messaging plus severity-coded icons.
          </p>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            <i>Result: “What happened?” inquiries dropped; intent prediction accuracy improved.</i>
          </p>
        </>
      ),
    },
    {
      kind: 'framework',
      title: 'Enemy Design Framework',
      description: (
        <>
          <p className='mb-3'>
            Authored a reusable documentation + data schema enabling rapid enemy prototyping and consistent balancing across tiers.
          </p>
          <ul className='list-disc list-inside mb-3'>
            <li>Unified ability template (Scriptable Object fields)</li>
            <li>Clear progression tiers & gating rules</li>
            <li>Balance guidelines + test matrix</li>
          </ul>
          <p className='mb-3'>
            <button
              type='button'
              onClick={handleScriptableObjectClick}
              className='underline font-semibold text-blue-500 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded'
            >
              View ability template (Scriptable Object)
            </button>
          </p>
        </>
      ),
    },
  ] as const;

  const bossDesigns = [
    {
      title: 'Non-Linear State Design',
      description: (
        <>
            <p className='mb-3'>
              Multi-state architecture: players choose initial engagement order, which gives replay incentive.
            </p>
          <ul className='list-disc list-inside mb-3'>
            <li>State A(Enraged): Strong resource pressure</li>
            <li>State B(Pacified): Slow down pacing and intensity</li>
            <li>State C(Neutral): Randomized resource pressure</li>
          </ul>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            <i>Result: More positive player sentiment; better player retention.</i>
          </p>
        </>
      ),
    },
    {
      title: 'Encounter Progression',
      description: (
        <>
          <p className='mb-3'>
            Designed phase escalation to sync resource depletion with narrative stakes—minimizing trivial end-phases.
          </p>
          <ul className='list-disc list-inside mb-3'>
            <li>Phase 1: Establish baseline pacing & economy</li>
            <li>Phase 2: Introduce layered overlapping threats</li>
            <li>Phase 3: Compression—forces mastery-level prioritization</li>
          </ul>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            <i>Result: Average failure point shifted from Phase 1 to Phase 3 indicating healthier curve.</i>
          </p>
        </>
      ),
    },
    {
      title: 'Art Direction & Communication',
      description: (
        <>
          <p className='mb-3'>
            Worked with artist to ensure that phase transitions delivered diegetic narrative cues aligned with mechanical escalation—rewarding survival with context.
          </p>
          <ul className='list-disc list-inside mb-3'>
            <li>Transition stingers(art) reinforce boss emotional state</li>
            <li>Color palette shifts signal difficulty ramp</li>
            <li>Ambient audio layering increases perceived tension</li>
          </ul>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            <i>Result: Improved player understanding of boss mechanics and emotional states.</i>
          </p>
        </>
      ),
    },
  ];

  // ===== Reusable Accessible Video Preview Component =====
  interface VideoPreviewProps {
    src: string;
    label: string;
    className?: string;
    autoPlayOnClick?: boolean;
  }
  const VideoPreview = memo(function VideoPreview({ src, label, className = '', autoPlayOnClick = true }: VideoPreviewProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(false);

    const togglePlay = () => {
      const v = videoRef.current;
      if (!v) return;
      if (v.paused) {
        v.play();
        setIsPlaying(true);
      } else {
        v.pause();
        setIsPlaying(false);
      }
    };

    return (
      <div className={`relative group ${className}`}>
        <div className='relative'>
          <video
            ref={videoRef}
            className='w-full h-auto rounded-lg shadow-lg transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
            loop
            muted
            playsInline
            controls={showControls}
            onClick={() => {
              if (autoPlayOnClick) togglePlay();
            }}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            aria-label={label}
          >
            <source src={src} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
          {/* Overlay play button shown when paused */}
          {!isPlaying && (
            <button
              type='button'
              onClick={togglePlay}
              className='absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 hover:bg-black/55 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500'
              aria-label={`Play video: ${label}`}
            >
              <span className='bg-black/60 group-hover:bg-black/70 rounded-full p-4 transition-all'>
                <svg className='w-8 h-8 text-white' fill='currentColor' viewBox='0 0 24 24' role='img' aria-hidden='true'>
                  <path d='M8 5v14l11-7z' />
                </svg>
              </span>
            </button>
          )}
          {/* Toggle controls button */}
          <div className='absolute top-2 right-2 flex gap-2'>
            <button
              type='button'
              onClick={() => setShowControls(c => !c)}
              className='px-2 py-1 text-xs rounded bg-black/50 text-white hover:bg-black/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400'
              aria-label={showControls ? 'Hide native video controls' : 'Show native video controls'}
            >
              {showControls ? 'Hide UI' : 'Show UI'}
            </button>
          </div>
        </div>
      </div>
    );
  });

  // Table of Contents sections (enemy + boss)
  const tableOfContents = [
    { id: 'enemy-design', label: 'Enemy Design' },
    ...enemyDesigns.map(d => ({ id: slugify(d.title), label: d.title })),
    { id: 'boss-design', label: 'Boss Design' },
    ...bossDesigns.map(d => ({ id: slugify(d.title), label: d.title })),
  ];

  function slugify(str: string) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  return (
    <>
      <ScrollFadeIn>
        <div className='grid md:grid-cols-2 gap-8 items-center mb-12'>
          <div>
            <h1 className='text-4xl font-bold'>
              Department of Malicious Vagueness
              <span className='ml-2 align-middle rounded bg-indigo-100 dark:bg-indigo-800/60 px-2 py-0.5 text-xs font-semibold text-indigo-700 dark:text-indigo-200'>MVP</span>
            </h1>
            <p className='mt-4'>
              The Department of Malicious Vagueness is a social roguelite combining elements from <i>Papers Please</i> and <i>Slay the Spire</i> set in an
              afterlife DMV where doing your job too well gets you promoted out of existence and slacking off gets you fired into oblivion. Balance
              bureaucratic efficiency with quiet rebellion as you manipulate metaphysical paperwork, while maintaining your existence in purgatory.
              <br />
              <br />
              As the Encounter Designer, I designed and implemented an enemy roster with mechanics and behaviors that reinforced core narrative themes
              and advanced player skill progression. This culminated in a multi-phase boss encounter that successfully tested the player&apos;s mastery of
              all game systems.
            </p>
            <ul className='text-gray-600 dark:text-gray-400 mt-2 list-disc list-inside'>
              <li>
                <b>Engine:</b> Unity
              </li>
              <li>
                <b>Role:</b> Encounter Designer, Programming
              </li>
              <li>
                <b>Team:</b> 6 core team members
              </li>
            </ul>
          </div>
          <div className='flex flex-col items-center'>
            <div className='relative w-full h-96 mb-4'>
              <iframe
                src='https://www.youtube.com/embed/CtJ3QhobS7M'
                title='Department of Malicious Vagueness Gameplay'
                className='absolute top-0 left-0 w-full h-full rounded-lg'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              />
            </div>
            <a
              href='https://kaejaegames.itch.io/dmv'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900'
            >
              Click to Play
            </a>
          </div>
        </div>
      </ScrollFadeIn>

      <ScrollFadeIn>
        <div className='bg-gray-100 dark:bg-gray-800 p-8 rounded-lg mb-12'>
          <h2 className='text-3xl font-bold text-center mb-4'>Responsibilities</h2>
          <div className='grid md:grid-cols-2 gap-8 text-center'>
            <div>
              <a href='#enemy-design'>
                <h3 className='text-2xl font-semibold mb-2 underline'>Enemy Design</h3>
              </a>
              <ul className='list-disc list-inside inline-block text-left'>
                <li>Developed Enemy Design Framework</li>
                <li>Created enemy and boss documentation</li>
                <li>Difficulty Pacing and Introduction</li>
                <li>Resource and Tension Management</li>
                <li>Implemented Visual Tells</li>
              </ul>
            </div>
            <div>
              <a href='#boss-design'>
                <h3 className='text-2xl font-semibold mb-2 underline'>Boss Design</h3>
              </a>
              <ul className='list-disc list-inside inline-block text-left'>
                <li>Non-Linear State Design</li>
                <li>Encounter Progression</li>
                <li>Art Direction & Communication</li>
                <li>Narrative Climax</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollFadeIn>

      {/* MVP Scope & Constraints Callout */}
      <ScrollFadeIn>
        <section className='mb-12 border border-yellow-300/40 dark:border-yellow-400/30 bg-yellow-50/40 dark:bg-yellow-900/10 p-6 rounded-lg'>
          <h2 className='text-lg font-semibold mb-2'>MVP Scope & Constraints</h2>
          <ul className='list-disc list-inside text-sm space-y-1'>
            <li><span className='font-semibold'>Included:</span> Core enemy roster slice, ability gating curve, resource/tension pacing, single multi-phase boss.</li>
            <li><span className='font-semibold'>Deferred:</span> Meta-progression systems, extended analytics UI, additional boss variants, advanced VFX & polish layers.</li>
            <li><span className='font-semibold'>Goal:</span> Validate player learning cadence & encounter loop clarity before expanding content breadth.</li>
          </ul>
        </section>
      </ScrollFadeIn>

      {/* Table of Contents */}
      <ScrollFadeIn>
        <nav aria-label='Page sections' className='mb-16 border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white/60 dark:bg-black/40 backdrop-blur-sm'>
          <h2 className='text-xl font-semibold mb-3'>On this page</h2>
          <ul className='grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2 text-sm'>
            {tableOfContents.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className='block px-2 py-1 rounded hover:bg-indigo-50 dark:hover:bg-indigo-900/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollFadeIn>

      <div className='mb-12'>
        <h2 id='enemy-design' className='text-4xl font-bold text-center mb-8'>
          Enemy Design
        </h2>
        {enemyDesigns.map((design) => {
          const slug = slugify(design.title);
          return (
            <ScrollFadeIn key={design.title}>
              <div id={slug} className='grid lg:grid-cols-2 gap-8 items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-8'>
                <div>
                  <h3 className='text-2xl font-semibold mb-2'>{design.title}</h3>
                  {design.description}
                </div>
                <div className='flex flex-col items-center'>
                  {design.kind === 'framework' && (
                    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
                      <ImageGallery
                        ref={galleryRef}
                        images={[
                          { src: '/projects/project-1/designframework/designframework1.png', alt: 'Framework: Documentation overview page' },
                          { src: '/projects/project-1/designframework/designframework2.png', alt: 'Framework: Tier classification sheet' },
                          { src: '/projects/project-1/designframework/designframework3.png', alt: 'Framework: Ability template fields' },
                          { src: '/projects/project-1/designframework/designframework4.png', alt: 'Framework: Balance guidelines table' },
                          { src: '/projects/project-1/designframework/designframework5.png', alt: 'Framework: Implementation guide reference' },
                          { src: '/projects/project-1/designframework/designframework6.png', alt: 'Framework: Test matrix' },
                          { src: '/projects/project-1/designframework/designframework7.png', alt: 'Framework: Advanced concepts section' },
                          { src: '/projects/project-1/designframework/designframework8.png', alt: 'Framework: Final implementation artifact' },
                        ]}
                      />
                    </div>
                  )}
                  {design.kind === 'npe' && (
                    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner w-full max-w-lg flex flex-col gap-6'>
                      <VideoPreview
                        src='/projects/project-1/videos/firstplayerexperience.mp4'
                        label='First player experience video'
                      />
                      <ImageGallery
                        customSize='small'
                        images={[
                          { src: '/projects/project-1/difficulty/difficulty1.png', alt: 'Difficulty Pacing: Initial player experience screen' },
                          { src: '/projects/project-1/difficulty/difficulty2.png', alt: 'Difficulty Pacing: Gradual ability unlock progression' },
                          { src: '/projects/project-1/difficulty/difficulty3.png', alt: 'Difficulty Pacing: Later encounter with increased challenge' },
                        ]}
                      />
                    </div>
                  )}
                  {design.kind === 'resource' && (
                    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner w-full max-w-lg flex flex-col gap-6'>
                      <VideoPreview
                        src='/projects/project-1/videos/resourcemanagement1.mp4'
                        label='Resource management example video'
                      />
                      <VideoPreview
                        src='/projects/project-1/videos/tension.mp4'
                        label='Tension escalation example video'
                      />
                    </div>
                  )}
                  {design.kind === 'tells' && (
                    <div className='p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
                      <ImageGallery
                        images={[
                          { src: '/projects/project-1/tells/tell1.PNG', alt: 'Enemy action intent text tell example' },
                          { src: '/projects/project-1/tells/tells2.PNG', alt: 'Player decision making influenced by enemy intent UI' },
                        ]}
                      />
                    </div>
                  )}
                </div>
              </div>
            </ScrollFadeIn>
          );
        })}
      </div>

      <div>
        <h2 id='boss-design' className='text-4xl font-bold text-center mb-8'>
          Boss Design
        </h2>
  {bossDesigns.map((design, i) => {
          const slug = slugify(design.title);
          return (
            <ScrollFadeIn key={design.title}>
              <div id={slug} className='mb-8 border-b border-gray-200 dark:border-gray-700 pb-8'>
                <h3 className='text-2xl font-semibold mb-2'>{design.title}</h3>
                {(i === 1) && <div className='mb-4'>{design.description}</div>}
                {i === 0 && (
                  <div className='grid lg:grid-cols-2 gap-8 items-center'>
                    <div>
                      <div className='mb-4'>{design.description}</div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
                        <figure>
                          <ImageGallery
                            customSize='small'
                            images={[
                              { src: '/projects/project-1/boss/bossphase4.PNG', alt: 'Boss Phase 4 - Final State (Combined Pressure Apex)' },
                              { src: '/projects/project-1/boss/bossphase3.png', alt: 'Boss Phase 3 - Advanced State (Escalated Patterns)' },
                            ]}
                          />
                          <figcaption className='mt-2 text-xs text-gray-500 dark:text-gray-400'>Boss phases are chosen by the player</figcaption>
                        </figure>
                      </div>
                    </div>
                  </div>
                )}
                {i === 1 && (
                  <div className='flex flex-col gap-8'>
                    {/* Video panel */}
                    <div className='p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner flex flex-col justify-center'>
                      <VideoPreview
                        src='/projects/project-1/boss/bossvid.mp4'
                        label='Boss encounter progression video'
                      />
                    </div>
                    
                  </div>
                )}
                {i === 2 && (
                  // Unified styling: use two-column layout starting at lg so 1024px and 1440px appear the same
                  <div className='flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-center'>
                    <div>
                      <div className='mb-4'>{design.description}</div>
                    </div>
                    <div className='flex flex-col items-center'>
                      <div className='p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
                        <figure>
                          <ImageGallery
                            customSize='small'
                            images={[
                              { src: '/projects/project-1/boss/Nepo-Baby-Calm.PNG', alt: 'Nepo Baby boss visual – Calm state palette and expression' },
                              { src: '/projects/project-1/boss/Nepo-Baby-Neutral.PNG', alt: 'Nepo Baby boss visual – Neutral transitional state' },
                              { src: '/projects/project-1/boss/Nepo-Baby-Angry.PNG', alt: 'Nepo Baby boss visual – Angry/enraged state with intensified palette' },
                            ]}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollFadeIn>
          );
        })}
      </div>

      {/* Flow & State Diagrams Section */}
      <section aria-labelledby='encounter-flow-heading' className='mt-20 mb-24'>
        <h2 id='encounter-flow-heading' className='text-3xl font-bold text-center mb-10'>Encounter Flow & Boss State Diagrams</h2>
        <FlowDiagram />
        <BossStateDiagram />
      </section>

      {/* Glossary Section */}
      <section aria-labelledby='glossary-heading' className='mb-24 border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-white/60 dark:bg-black/40 backdrop-blur-sm'>
        <h2 id='glossary-heading' className='text-2xl font-semibold mb-4'>Glossary</h2>
        <dl className='space-y-4 text-sm'>
          <div>
            <dt className='font-semibold flex items-center gap-2'>
              <span className='underline decoration-dotted'>Deathknell</span>
            </dt>
            <dd className='ml-1 mt-1 text-gray-600 dark:text-gray-400'>A conditional enemy or effect trigger that grants a positive swing (e.g., cleanse, momentum shift) only if removed or activated at a timing window; punishes premature or negligent interaction.</dd>
          </div>
          <div>
            <dt className='font-semibold flex items-center gap-2'>
              <span className='underline decoration-dotted'>Intent Tell</span>
            </dt>
            <dd className='ml-1 mt-1 text-gray-600 dark:text-gray-400'>A pre-action indicator (text/icon/value) that communicates the enemy&apos;s upcoming behavior to enable proactive planning and reduce unexplained feedback loops.</dd>
          </div>
        </dl>
      </section>

      <ScrollFadeIn>
        <section className='mb-16 border border-indigo-300/40 dark:border-indigo-500/30 bg-indigo-50/40 dark:bg-indigo-900/10 p-6 rounded-lg'>
          <h2 className='text-2xl font-semibold mb-4'>Future Improvements</h2>
          <p className='text-xs text-gray-500 dark:text-gray-400 italic mb-3'>Items below were intentionally deferred beyond MVP scope to accelerate validation.</p>
          <ul className='list-disc list-inside space-y-1 text-sm'>
            <li>Automated difficulty scaler refining enemy composition weightings</li>
            <li>Expanded tell system: layered audio cues for high-severity moves</li>
            <li>Post-encounter analytics screen surfacing resource efficiency</li>
          </ul>
        </section>
      </ScrollFadeIn>

      <ScrollToTopButton />
      {/* Removed modal instances; videos now play inline. */}
    </>
  );
}
