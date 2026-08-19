import React, { useState } from 'react';
import FloatingHearts from './components/FloatingHearts';
import MusicButton from './components/MusicButton';
import ScreenIntro from './components/screens/ScreenIntro';
import ScreenHub from './components/screens/ScreenHub';
import ScreenBouquet from './components/screens/ScreenBouquet';
import ScreenMemories from './components/screens/ScreenMemories';
import ScreenLetter from './components/screens/ScreenLetter';
import ScreenUnlock from './components/screens/ScreenUnlock';
import ScreenFuturePlans from './components/screens/ScreenFuturePlans';
import ScreenQuiz from './components/screens/ScreenQuiz';
import ScreenMemoryGame from './components/screens/ScreenMemoryGame';

export default function App() {
  const [screen, setScreen] = useState('intro');

  return (
    <div className="relative min-h-screen w-full bg-[#FFE6EC] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      <FloatingHearts />
      <MusicButton />

      <main className="relative z-10 w-full max-w-5xl">
        {screen === 'intro' && <ScreenIntro onAccept={() => setScreen('hub')} />}
        {screen === 'hub' && <ScreenHub onNavigate={(dest) => setScreen(dest)} />}
        {screen === 'bouquet' && <ScreenBouquet onBack={() => setScreen('hub')} />}
        {screen === 'memories' && <ScreenMemories onBack={() => setScreen('hub')} />}
        {screen === 'letter' && <ScreenLetter onBack={() => setScreen('hub')} />}
        {screen === 'quiz' && <ScreenQuiz onBack={() => setScreen('hub')} />}
        {screen === 'memory-game' && <ScreenMemoryGame onBack={() => setScreen('hub')} />}
        {screen === 'unlock' && (
          <ScreenUnlock
            onUnlocked={() => setScreen('future-plans')}
            onBack={() => setScreen('hub')}
          />
        )}
        {screen === 'future-plans' && (
          <ScreenFuturePlans onBack={() => setScreen('hub')} />
        )}
      </main>
    </div>
  );
}