import Image from 'next/image';
import ScrollFadeIn from '@/components/ScrollFadeIn';

export default function Project1Page() {
  const enemyDesigns = [
    {
      title: 'Developed Enemy Design Framework',
      description: (
        <>
          I architected an{' '}
          <span className='font-bold'>enemy design framework</span> so that we
          could easily scale our roster of enemies. By creating a purpose for
          each tier of enemy it streamlined the creation of new enemies and
          acted as a way to perform a soft balance check before implementation
        </>
      ),
    },
    {
      title: 'Difficulty Pacing and Introduction',
      description: (
        <>
          First time players don’t have access to all abilities so that they are
          <span className='font-bold'>gradually introduced</span> to the
          mechanics and resources they have to manage. This intro is also tied
          into the narrative, because the characters speak to you as if you’re
          new employee
        </>
      ),
    },
    {
      title: 'Resource and Tension Management',
      description: (
        <>
          Designed specific enemy abilities and resistances that forced players
          to make critical{' '}
          <span className='font-bold'>resource management</span> choicesduring
          combat encounters
        </>
      ),
    },
    {
      title: 'Implemented Visual Tells',
      description: (
        <>
          <span className='italic'>
            Problem: Transparency & Informed Decision-Making
          </span>
          <br />
          <span className='italic'>
            Solution: Enemies have a tell to let the player know which action is
            coming up next so they can make informed choices
          </span>
          <br />
          <br />
          We decided to have the enemies give tells through text that allowed
          players to understand what their intentions were so they could make
          informed decisions
        </>
      ),
    },
    {
      title: 'Narrative Design',
      description: (
        <>
          <span className='italic'>
            Problem: Give story beats and narrative while keeping the player
            engaged
          </span>{' '}
          <br />
          <span className='italic'>
            Solution: We created lines of dialogue that changed depending on the
            player being successful/unsuccessful in properly dealing with them.
          </span>
          <br />
          <br />
          The enemies have several lines of dialogue to not only fit the theme
          of the world, but also to inform the player if they’re successfully
          managing them.
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
    {
      title: 'Combat Balancing',
      description: (
        <>
          I used feedback from playtests to balance difficulty. We also went
          with the decision to allow players to jump to the boss fight early if
          they want, but with the trade-off of the boss being more difficult. It
          took several iterations to figure out appropriate stat multipliers to
          hit the level of difficulty that we wanted
        </>
      ),
    },
  ];

  return (
    <div className='container mx-auto px-6 py-16'>
      <ScrollFadeIn>
        <div className='grid md:grid-cols-2 gap-8 items-center mb-12'>
          <div>
            <h1 className='text-5xl font-bold'>Game Title</h1>
            <p className='text-xl text-gray-600 dark:text-gray-400 mt-2'>
              Engine: Unity <br />
              Role: Encounter Designer, Programming
            </p>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
          </div>
          <div className='relative w-full h-96'>
            <Image
              src='/file.svg'
              alt='Game Title'
              layout='fill'
              objectFit='cover'
              className='rounded-lg'
            />
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
              <h3 className='text-2xl font-semibold mb-2'>Enemy Design</h3>
              {/*add link to enemy design area*/}
              <ul className='list-disc list-inside inline-block text-left'>
                <li>Developed Enemy Design Framework</li>
                <li>Difficulty Pacing and Introduction</li>
                <li>Combat Flow</li>
                <li>Resource and Tension Management</li>
                <li>Implemented Visual Tells</li>
                <li>Narrative Design</li>
              </ul>
            </div>
            <div>
              <h3 className='text-2xl font-semibold mb-2'>Boss Design</h3>
              {/*add link to boss design area*/}
              <ul className='list-disc list-inside inline-block text-left'>
                <li>Non-Linear State Design</li>
                <li>Encounter Progression</li>
                <li>Art Direction & Communication</li>
                <li>Narrative Climax</li>
                <li>Combat Balancing</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollFadeIn>

      <div className='mb-12'>
        <h2 className='text-4xl font-bold text-center mb-8'>Enemy Design</h2>
        {enemyDesigns.map((design, i) => (
          <ScrollFadeIn key={i}>
            <div className='grid md:grid-cols-2 gap-8 items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-8'>
              <div>
                <h3 className='text-2xl font-semibold mb-2'>{design.title}</h3>
                <p>{design.description}</p>
              </div>
              <div className='flex flex-col items-center'>
                <div className='bg-gray-200 dark:bg-gray-700 w-48 h-32 rounded-lg mb-2' />
                <div className='flex gap-2'>
                  <div className='bg-gray-200 dark:bg-gray-700 w-48 h-32 rounded-lg' />
                  <div className='bg-gray-200 dark:bg-gray-700 w-48 h-32 rounded-lg' />
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>

      <div>
        <h2 className='text-4xl font-bold text-center mb-8'>Boss Design</h2>
        {bossDesigns.map((design, i) => (
          <ScrollFadeIn key={i}>
            <div className='mb-8 border-b border-gray-200 dark:border-gray-700 pb-8'>
              <h3 className='text-2xl font-semibold mb-2'>{design.title}</h3>
              <p className='mb-4'>{design.description}</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
                <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
                <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
                <div className='bg-gray-200 dark:bg-gray-700 h-40 rounded-lg' />
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </div>
  );
}
