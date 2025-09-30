'use client';

import { useState, useRef } from 'react';
import ScrollFadeIn from '@/components/ScrollFadeIn';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import ImageGallery, { ImageGalleryRef } from '@/components/ImageGallery';
import VideoModal from '@/components/VideoModal';

// export const metadata: Metadata = {
//   title: 'Project: DMV',
// };

export default function Project1Page() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isResourceVideoModalOpen, setIsResourceVideoModalOpen] =
    useState(false);
  const [isTensionVideoModalOpen, setIsTensionVideoModalOpen] = useState(false);
  const [isBossVideoModalOpen, setIsBossVideoModalOpen] = useState(false);
  const galleryRef = useRef<ImageGalleryRef>(null);

  const handleScriptableObjectClick = () => {
    galleryRef.current?.openLightbox(2); // designframework3 is at index 2
  };

  const enemyDesigns = [
    {
      title: 'Enemy Design Framework & Documentation',
      description: (
        <>
          <p>
            I began by creating tiers for our enemies based on their difficulty
            and purpose(teach mechanics, test resource management, etc). It was
            my responsibility to create and maintain documentation for all
            enemies and bosses. This resulted in me creating an enemy design
            framework that helped us in several ways:
          </p>
          <ul className='list-disc list-inside'>
            <li>Streamlined creating new enemies</li>
            <li>
              A template when creating{' '}
              <span
                className='font-bold underline cursor-pointer text-blue-400 hover:text-blue-300 transition-colors'
                onClick={handleScriptableObjectClick}
              >
                scriptable objects in Unity
              </span>
            </li>
            <li>Preliminary balancing before implementation</li>
            <li>Simplified creating variations within enemy tiers</li>
          </ul>
        </>
      ),
    },
    {
      title: 'New Player Experience, Difficulty, and Pacing',
      description: (
        <>
          <span className='italic'>
            Problem: We received feedback from playtest that players were
            overwhelmed by having access to all abilities
          </span>
          <br />
          <span className='italic'>
            Solution: We decided to not give players access to all abilities at
            the start of the game, creating a gated ability introduction via the
            core progression loop to manage player information load.
          </span>
          <br />
          <br />
          Players are introduced to the game through dialogue and tooltips to
          explain mechanics. We decided to keep the player informed of potential
          threats with an enemy queue. The first encounter is only{' '}
          <span className='font-bold underline'>basic tier enemies</span> which
          main purpose is:
          <ul className='list-disc list-inside'>
            <li>Resource drain</li>
            <li>Introduction to mechanics</li>
            <li>Negligible resource pressure</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Resource and Tension Management',
      description: (
        <>
          Designed specific enemy abilities and resistances that forced players
          to make critical{' '}
          <span className='font-bold'>resource management</span> choices during
          combat encounters. This included:
          <br />
          <ul className='list-disc list-inside'>
            <li>Enemies with deathknells</li>
            <li>Downsides that can&apos;t be mitigated</li>
            <li>Adaptation to enemy behaviors</li>
          </ul>
          <br />
          <span className='underline'>Reflection:</span> I ran out of time to
          implement deathknell synergy.
          <br />
          <span className='underline'>Lesson Learned:</span> If I could restart,
          I would prioritize early vertical slice design to validate core
          systemic synergies before scaling the enemy roster, mitigating
          late-stage feature creep.
        </>
      ),
    },
    {
      title: 'Implemented Visual Tells',
      description: (
        <>
          <span className='italic'>
            Problem: The player needs to know how to respond to what the enemy
            is doing
          </span>
          <br />
          <span className='italic'>
            Solution: Implemented clear predictive UI feedback (text-based
            &apos;tells&apos;) on enemies to ensure the player had the necessary
            information hierarchy to make informed, tactical decisions
          </span>
          <br />
          <br />
          We decided to have the enemies give tells through text that allowed
          players to understand what their intentions were so they could make
          informed decisions
        </>
      ),
    },
  ];

  const bossDesigns = [
    {
      title: 'Non-Linear State Design',
      description: (
        <>
          Designed a unique{' '}
          <span className='font-bold'>multi-state boss encounter</span> where
          players choose which combat state to engage with first. This allows
          skilled players to defeat the boss more efficiently if they have the
          game knowledge to do so.
        </>
      ),
    },
    {
      title: 'Encounter Progression',
      description: (
        <>
          The player’s ability to manage resources is tested through the three
          phases of the boss encounter. Each phase demands different strategies
          and resource allocations, challenging players to adapt and optimize
          their approach.
        </>
      ),
    },
    {
      title: 'Art Direction & Communication',
      description: (
        <>
          In order to continue delivering story elements to players I went with
          the decision to also use the phase transitions as an opportunity to
          give the player more dialogue. This acts as a reward if the player
          successfully completes phases while also implying to the player what
          state the boss is in
        </>
      ),
    },
  ];

  return (
    <div className='container mx-auto px-6 py-16'>
      <ScrollFadeIn>
        <div className='grid md:grid-cols-2 gap-8 items-center mb-12'>
          <div>
            <h1 className='text-4xl font-bold'>
              Department of Malicious Vagueness
            </h1>
            <p className='mt-4'>
              The Department of Malicious Vagueness is a social roguelite
              combining elements from <i>Papers Please</i> and{' '}
              <i>Slay the Spire</i> set in an afterlife DMV where doing your job
              too well gets you promoted out of existence and slacking off gets
              you fired into oblivion. Balance bureaucratic efficiency with
              quiet rebellion as you manipulate metaphysical paperwork, while
              maintaining your existence in purgatory.
              <br />
              <br />
              As the Encounter Designer, I designed and implemented an enemy
              roster with mechanics and behaviors that reinforced core narrative
              themes and advanced player skill progression. This culminated in a
              multi-phase boss encounter that successfully tested the
              player&apos;s mastery of all game systems.
            </p>
            <ul className='text-gray-600 dark:text-gray-400 mt-2 list-disc list-inside'>
              <li>
                <b>Engine:</b> Unity
              </li>
              <li>
                <b>Role:</b> Encounter Designer, Programming
              </li>
              <li>
                <b>Team:</b> 6 core + 2 supporting artists
              </li>
              <li>
                <b>Released:</b>{' '}
                <a
                  className='underline'
                  href='https://kaejaegames.itch.io/dmv'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Itch.io
                </a>
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
          <h2 className='text-3xl font-bold text-center mb-4'>
            Responsibilities
          </h2>
          <div className='grid md:grid-cols-2 gap-8 text-center'>
            <div>
              <a href='#enemy-design'>
                <h3 className='text-2xl font-semibold mb-2 underline'>
                  Enemy Design
                </h3>
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
                <h3 className='text-2xl font-semibold mb-2 underline'>
                  Boss Design
                </h3>
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

      <div className='mb-12'>
        <h2 id='enemy-design' className='text-4xl font-bold text-center mb-8'>
          Enemy Design
        </h2>
        {enemyDesigns.map((design, i) => (
          <ScrollFadeIn key={i}>
            <div className='grid md:grid-cols-2 gap-8 items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-8'>
              <div>
                <h3 className='text-2xl font-semibold mb-2'>{design.title}</h3>
                {design.description}
              </div>
              <div className='flex flex-col items-center'>
                {i === 0 ? (
                  <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
                    <ImageGallery
                      ref={galleryRef}
                      images={[
                        {
                          src: '/projects/project-1/designframework/designframework1.png',
                          alt: 'Enemy Design Framework Documentation',
                        },
                        {
                          src: '/projects/project-1/designframework/designframework2.png',
                          alt: 'Enemy Design Framework - Tier Classification',
                        },
                        {
                          src: '/projects/project-1/designframework/designframework3.png',
                          alt: 'Enemy Design Framework - Ability Templates',
                        },
                        {
                          src: '/projects/project-1/designframework/designframework4.png',
                          alt: 'Enemy Design Framework - Balance Guidelines',
                        },
                        {
                          src: '/projects/project-1/designframework/designframework5.png',
                          alt: 'Enemy Design Framework - Implementation Guide',
                        },
                        {
                          src: '/projects/project-1/designframework/designframework6.png',
                          alt: 'Enemy Design Framework - Testing Framework',
                        },
                        {
                          src: '/projects/project-1/designframework/designframework7.png',
                          alt: 'Enemy Design Framework - Advanced Concepts',
                        },
                        {
                          src: '/projects/project-1/designframework/designframework8.png',
                          alt: 'Enemy Design Framework - Final Implementation',
                        },
                      ]}
                    />
                  </div>
                ) : i === 1 ? (
                  <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner w-full max-w-lg flex flex-col gap-6'>
                    <div
                      className='relative cursor-pointer group'
                      onClick={() => setIsVideoModalOpen(true)}
                    >
                      <video
                        className='w-full h-auto rounded-lg shadow-lg group-hover:opacity-90 transition-opacity'
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src='/projects/project-1/videos/firstplayerexperience.mp4'
                          type='video/mp4'
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg'>
                        <div className='bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm font-medium'>
                          Click to enlarge
                        </div>
                      </div>
                    </div>
                    <ImageGallery
                      customSize='small'
                      images={[
                        {
                          src: '/projects/project-1/difficulty/difficulty1.png',
                          alt: 'Difficulty Pacing - Initial Player Experience',
                        },
                        {
                          src: '/projects/project-1/difficulty/difficulty2.png',
                          alt: 'Difficulty Pacing - Gradual Ability Introduction',
                        },
                        {
                          src: '/projects/project-1/difficulty/difficulty3.png',
                          alt: 'Difficulty Pacing - Progressive Challenge',
                        },
                      ]}
                    />
                  </div>
                ) : i === 2 ? (
                  <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner w-full max-w-lg flex flex-col gap-6'>
                    {/* Resource Management Video */}
                    <div
                      className='relative cursor-pointer group'
                      onClick={() => setIsResourceVideoModalOpen(true)}
                    >
                      <video
                        className='w-full h-auto rounded-lg shadow-lg group-hover:opacity-90 transition-opacity'
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src='/projects/project-1/videos/resourcemanagement1.mp4'
                          type='video/mp4'
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg'>
                        <div className='bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm font-medium'>
                          Click to enlarge
                        </div>
                      </div>
                    </div>
                    {/* Tension Management Video */}
                    <div
                      className='relative cursor-pointer group'
                      onClick={() => setIsTensionVideoModalOpen(true)}
                    >
                      <video
                        className='w-full h-auto rounded-lg shadow-lg group-hover:opacity-90 transition-opacity'
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src='/projects/project-1/videos/tension.mp4'
                          type='video/mp4'
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg'>
                        <div className='bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm font-medium'>
                          Click to enlarge
                        </div>
                      </div>
                    </div>
                  </div>
                ) : i === 3 ? (
                  <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
                    <ImageGallery
                      images={[
                        {
                          src: '/projects/project-1/tells/tell1.PNG',
                          alt: 'Visual Tells - Enemy Action Indicators',
                        },
                        {
                          src: '/projects/project-1/tells/tells2.PNG',
                          alt: 'Visual Tells - Player Decision Making',
                        },
                      ]}
                    />
                  </div>
                ) : (
                  <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner w-full max-w-lg flex flex-col items-center'>
                    <div className='bg-gray-200 dark:bg-gray-700 w-48 h-32 rounded-lg mb-2' />
                    <div className='flex gap-2'>
                      <div className='bg-gray-200 dark:bg-gray-700 w-48 h-32 rounded-lg' />
                      <div className='bg-gray-200 dark:bg-gray-700 w-48 h-32 rounded-lg' />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>

      <div>
        <h2 id='boss-design' className='text-4xl font-bold text-center mb-8'>
          Boss Design
        </h2>
        {bossDesigns.map((design, i) => (
          <ScrollFadeIn key={i}>
            <div className='mb-8 border-b border-gray-200 dark:border-gray-700 pb-8'>
              <h3 className='text-2xl font-semibold mb-2'>{design.title}</h3>
              {i !== 2 && i !== 0 && (
                <p className='mb-4'>{design.description}</p>
              )}
              {i === 0 ? (
                // Non-Linear State Design: text left, images right
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                  <div>
                    <p className='mb-4'>{design.description}</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
                      <ImageGallery
                        customSize='medium'
                        images={[
                          {
                            src: '/projects/project-1/boss/bossphase4.PNG',
                            alt: 'Boss Phase 4 - Final State',
                          },
                          {
                            src: '/projects/project-1/boss/bossphase3.png',
                            alt: 'Boss Phase 3 - Advanced State',
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              ) : i === 1 ? (
                // Encounter Progression: bossvid.mp4 and bossphase1.PNG
                <div className='grid md:grid-cols-2 gap-8 items-stretch'>
                  <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner flex flex-col justify-center'>
                    {/* Boss Video */}
                    <div
                      className='relative cursor-pointer group'
                      onClick={() => setIsBossVideoModalOpen(true)}
                    >
                      <video
                        className='w-full h-auto rounded-lg shadow-lg group-hover:opacity-90 transition-opacity'
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src='/projects/project-1/boss/bossvid.mp4'
                          type='video/mp4'
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg'>
                        <div className='bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg text-sm font-medium'>
                          Click to enlarge
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner flex flex-col justify-center'>
                    <ImageGallery
                      customSize='extra-large'
                      images={[
                        {
                          src: '/projects/project-1/boss/bossphase1.PNG',
                          alt: 'Boss Phase 1 - Initial State',
                        },
                      ]}
                    />
                  </div>
                </div>
              ) : i === 2 ? (
                // Art Direction & Communication: text left, image right
                <div className='grid md:grid-cols-2 gap-8 items-center'>
                  <div>
                    <p className='mb-4'>{design.description}</p>
                  </div>
                  <div className='flex flex-col items-center'>
                    <div className='p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-inner'>
                      <ImageGallery
                        customSize='extra-large'
                        images={[
                          {
                            src: '/projects/project-1/boss/bossphase2.png',
                            alt: 'Boss Phase 2 - Intermediate State',
                          },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
                  <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
                  <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
                  <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
                </div>
              )}
            </div>
          </ScrollFadeIn>
        ))}
      </div>
      <ScrollToTopButton />
      <VideoModal
        src='/projects/project-1/videos/firstplayerexperience.mp4'
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />
      <VideoModal
        src='/projects/project-1/videos/resourcemanagement1.mp4'
        isOpen={isResourceVideoModalOpen}
        onClose={() => setIsResourceVideoModalOpen(false)}
      />
      <VideoModal
        src='/projects/project-1/videos/tension.mp4'
        isOpen={isTensionVideoModalOpen}
        onClose={() => setIsTensionVideoModalOpen(false)}
      />
      <VideoModal
        src='/projects/project-1/boss/bossvid.mp4'
        isOpen={isBossVideoModalOpen}
        onClose={() => setIsBossVideoModalOpen(false)}
      />
    </div>
  );
}
