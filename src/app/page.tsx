export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black text-black dark:text-white p-8'>
      <style>{`
        @keyframes pokeball-move {
          0% { transform: translateX(-30px) rotate(-10deg); }
          20% { transform: translateX(0px) rotate(0deg); }
          50% { transform: translateX(30px) rotate(10deg); }
          80% { transform: translateX(0px) rotate(0deg); }
          100% { transform: translateX(-30px) rotate(-10deg); }
        }
      `}</style>
      <div className='flex flex-col items-center gap-6'>
        <div
          style={{
            display: 'inline-block',
            animation:
              'pokeball-move 1.2s infinite cubic-bezier(.68,-0.55,.27,1.55)',
          }}
        >
          <svg
            width='80'
            height='80'
            viewBox='0 0 80 80'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle
              cx='40'
              cy='40'
              r='32'
              fill='#fff'
              stroke='#222'
              strokeWidth='4'
            />
            <path d='M8 40h64' stroke='#222' strokeWidth='4' />
            <path d='M8 40a32 32 0 0 1 64 0' fill='#E53E3E' />
            <circle
              cx='40'
              cy='40'
              r='12'
              fill='#fff'
              stroke='#222'
              strokeWidth='4'
            />
            <circle cx='40' cy='40' r='6' fill='#222' />
            <circle cx='43' cy='37' r='2' fill='#fff' />
          </svg>
        </div>
        <h1 className='text-3xl font-bold'>Under Construction</h1>
        <p className='text-lg text-center max-w-md'>
          This portfolio site is a work in progress.
          <br />
          Please check back soon for updates!
        </p>
      </div>
    </div>
  );
}
