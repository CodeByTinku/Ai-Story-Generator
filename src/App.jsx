import { useState, useCallback, useRef } from 'react';
import { generateStoryOpening, generateNextScene, getApiMode } from './gemini';
import './index.css';

const GENRES = [
  { name: 'Fantasy', icon: '🧙‍♂️', color: '#5a3575' },
  { name: 'Sci-Fi', icon: '🚀', color: '#2a6b70' },
  { name: 'Horror', icon: '👁️', color: '#8b2035' },
  { name: 'Mystery', icon: '🕵️', color: '#8a6030' },
  { name: 'Romance', icon: '🌹', color: '#7a3040' },
];

const TONES = ['Epic', 'Dark', 'Lighthearted', 'Mysterious', 'Comedic'];

const MAX_SCENES = 7;

function useTypewriter(speed = 18) {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef(null);

  const type = useCallback((text, onDone) => {
    setDisplayText('');
    setIsTyping(true);
    let i = 0;

    const tick = () => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        setIsTyping(false);
        onDone?.();
      }
    };
    tick();
    return () => clearTimeout(timeoutRef.current);
  }, [speed]);

  const skip = useCallback((text, onDone) => {
    clearTimeout(timeoutRef.current);
    setDisplayText(text);
    setIsTyping(false);
    onDone?.();
  }, []);

  return { displayText, isTyping, type, skip };
}

// ─── Landing Page ─────────────────────────────────────────────────────────────
function LandingPage({ onBegin }) {
  const [genre, setGenre] = useState('Fantasy');
  const [tone, setTone] = useState('Epic');
  const [characterName, setCharacterName] = useState('');
  const [backstory, setBackstory] = useState('');

  const handleBegin = () => {
    if (!characterName.trim()) return;
    onBegin({ genre, tone, characterName: characterName.trim(), backstory: backstory.trim() });
  };

  const apiMode = getApiMode();
  const modeLabel = apiMode === 'demo' ? '🎭 Demo Mode' : apiMode === 'groq' ? '⚡ Groq AI' : '✨ Gemini AI';
  const modeBg = apiMode === 'demo' ? 'rgba(140,85,32,0.15)' : apiMode === 'groq' ? 'rgba(42,107,112,0.15)' : 'rgba(90,53,117,0.15)';
  const modeBorder = apiMode === 'demo' ? 'rgba(212,160,80,0.3)' : apiMode === 'groq' ? 'rgba(42,200,112,0.3)' : 'rgba(150,100,220,0.3)';

  return (
    <div className="landing">
      <div className="landing-hero">
        <p className="landing-tagline">
          <span style={{ background: modeBg, border: `1px solid ${modeBorder}`, borderRadius: '100px', padding: '0.2rem 0.8rem', marginRight: '0.5rem', fontSize: '0.7rem' }}>
            {modeLabel}
          </span>
          AI Interactive Story
        </p>
        <h1 className="landing-title">Chronicle</h1>
        <p className="landing-subtitle">Where every choice weaves a new legend. Your story, your fate.</p>
        {apiMode === 'demo' && (
          <div style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', background: 'rgba(212,160,80,0.08)', border: '1px solid rgba(212,160,80,0.2)', borderRadius: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '1rem auto 0', fontFamily: 'var(--font-ui)', lineHeight: 1.6 }}>
            🎭 <strong style={{ color: 'var(--gold)' }}>Demo Mode:</strong> Puri story experience karo bina API key ke!{' '}
            Real AI ke liye <a href="https://console.groq.com/keys" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Groq free key</a> lo (gsk_... format) aur .env mein daalo.
          </div>
        )}
        <div className="landing-divider" />
      </div>

      {/* Genre */}
      <div className="genre-section">
        <p className="section-label">Choose Your World</p>
        <div className="genre-grid">
          {GENRES.map(g => (
            <div
              key={g.name}
              className={`genre-card ${genre === g.name ? 'selected' : ''}`}
              data-genre={g.name}
              onClick={() => setGenre(g.name)}
            >
              <span className="genre-icon">{g.icon}</span>
              <span className="genre-name">{g.name}</span>
            </div>
          ))}
        </div>

        {/* Tone */}
        <div className="setup-section" style={{ margin: '0 auto 2rem', alignItems: 'center' }}>
          <div className="input-group" style={{ width: '100%' }}>
            <label className="input-label">Story Tone</label>
            <div className="tone-grid" style={{ justifyContent: 'center' }}>
              {TONES.map(t => (
                <button
                  key={t}
                  className={`tone-btn ${tone === t ? 'selected' : ''}`}
                  onClick={() => setTone(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Character */}
        <div className="setup-section" style={{ margin: '0 auto 2.5rem' }}>
          <div className="input-group">
            <label className="input-label">Your Character's Name *</label>
            <input
              className="input-field"
              type="text"
              placeholder="e.g. Kael, Zara, Marcus..."
              value={characterName}
              onChange={e => setCharacterName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleBegin()}
            />
          </div>
          <div className="input-group">
            <label className="input-label">Backstory (optional)</label>
            <textarea
              className="input-field"
              placeholder="Give your character some history..."
              value={backstory}
              onChange={e => setBackstory(e.target.value)}
              rows={3}
            />
          </div>
        </div>

        <button
          className="btn-begin"
          onClick={handleBegin}
          disabled={!characterName.trim()}
        >
          ✦ Begin Your Story ✦
        </button>
      </div>
    </div>
  );
}

// ─── Scene Card ───────────────────────────────────────────────────────────────
function SceneCard({ scene, index, isCurrent, displayText, isTyping, onSkip }) {
  if (!isCurrent) {
    return (
      <div className="scene-card past">
        <div className="scene-number">Scene {index + 1}</div>
        <p className="scene-text">{scene.story}</p>
        {scene.choice && (
          <div className="choice-made-tag">
            You chose: <span>{scene.choice}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="scene-card" onClick={isTyping ? onSkip : undefined} style={{ cursor: isTyping ? 'pointer' : 'default' }}>
      <div className="scene-number">
        Scene {index + 1}
        {isTyping && <span style={{ color: 'var(--gold)', fontStyle: 'italic' }}> — click to skip</span>}
      </div>
      <p className="scene-text">
        {displayText}
        {isTyping && <span className="cursor-blink" />}
      </p>
    </div>
  );
}

// ─── Story Page ───────────────────────────────────────────────────────────────
function StoryPage({ config, onRestart }) {
  const [scenes, setScenes] = useState([]);          // past scenes
  const [current, setCurrent] = useState(null);      // { story, choices, isEnding }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [choicesReady, setChoicesReady] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const startTimeRef = useRef(Date.now());
  const sceneCount = useRef(0);

  const { displayText, isTyping, type, skip } = useTypewriter(12);

  const processScene = useCallback((result, pastScenes) => {
    setCurrent(result);
    setChoicesReady(false);
    setLoading(false);
    type(result.story, () => {
      setChoicesReady(true);
      if (result.isEnding) setIsEnded(true);
    });
  }, [type]);

  // Start story on mount
  useState(() => {
    let active = true;
    setLoading(true);
    generateStoryOpening(config)
      .then(result => { if (active) { sceneCount.current++; processScene(result, []); } })
      .catch(e => { if (active) { setError(e.message); setLoading(false); } });
    return () => { active = false; };
  });

  const handleChoice = async (choice) => {
    if (isTyping) return;
    const pastScenes = [
      ...scenes,
      { story: current.story, choice: choice.text }
    ];
    setScenes(pastScenes);
    setCurrent(null);
    setChoicesReady(false);
    setLoading(true);
    setError(null);

    try {
      const result = await generateNextScene({
        ...config,
        storyHistory: pastScenes,
        choiceMade: choice.text,
      });
      sceneCount.current++;
      processScene(result, pastScenes);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  };

  const handleSkip = () => {
    if (isTyping && current) {
      skip(current.story, () => {
        setChoicesReady(true);
        if (current.isEnding) setIsEnded(true);
      });
    }
  };

  const progressPct = Math.min((sceneCount.current / MAX_SCENES) * 100, 100);
  const elapsedMins = Math.round((Date.now() - startTimeRef.current) / 60000);

  return (
    <div className="story-page">
      {/* Header */}
      <header className="story-header">
        <div className="story-title-bar">
          <span className="story-genre-badge">{config.genre}</span>
          <span className="story-char-name">✦ {config.characterName}</span>
        </div>
        <div className="progress-wrap">
          <span className="progress-label">Story Progress</span>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
        <button className="btn-restart" onClick={onRestart}>✕ New Story</button>
      </header>

      {/* Content */}
      <main className="story-content">
        {/* Past scenes */}
        {scenes.map((s, i) => (
          <SceneCard key={i} scene={s} index={i} isCurrent={false} />
        ))}

        {/* Current scene or loading */}
        {loading && (
          <div className="loading-scene">
            <span className="loading-quill">🪶</span>
            <p className="loading-text">The chronicle is being written…</p>
            <div className="loading-dots">
              <span /><span /><span />
            </div>
          </div>
        )}

        {error && (
          <div className="error-card">
            ⚠️ {error}. Please check your API key or try again.
          </div>
        )}

        {current && !loading && (
          <SceneCard
            scene={current}
            index={scenes.length}
            isCurrent={true}
            displayText={displayText}
            isTyping={isTyping}
            onSkip={handleSkip}
          />
        )}

        {/* Choices */}
        {choicesReady && !current?.isEnding && current?.choices?.length > 0 && (
          <div className="choices-section">
            <p className="choices-label">What do you do?</p>
            {current.choices.map(c => (
              <button key={c.id} className="choice-btn" onClick={() => handleChoice(c)}>
                <span className="choice-letter">{c.id}</span>
                {c.text}
              </button>
            ))}
          </div>
        )}

        {/* Ending */}
        {choicesReady && current?.isEnding && (
          <div className="ending-card">
            <div className="ending-ornament">✦ ⚜ ✦</div>
            <h2 className="ending-title">The End</h2>
            <p className="ending-sub">Your legend has been written, {config.characterName}.</p>
            <div className="ending-stats">
              <div className="stat-item">
                <span className="stat-value">{sceneCount.current}</span>
                <span className="stat-label">Scenes</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{scenes.length}</span>
                <span className="stat-label">Choices</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{elapsedMins || 1}</span>
                <span className="stat-label">Minutes</span>
              </div>
            </div>
            <div className="ending-actions">
              <button className="btn-action" onClick={onRestart}>✦ New Story</button>
              <button
                className="btn-action primary"
                onClick={() => {
                  const fullStory = [...scenes.map(s => s.story), current?.story].join('\n\n---\n\n');
                  const blob = new Blob([fullStory], { type: 'text/plain' });
                  const a = document.createElement('a');
                  a.href = URL.createObjectURL(blob);
                  a.download = `Chronicle - ${config.characterName}.txt`;
                  a.click();
                }}
              >
                ⬇ Download Story
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [config, setConfig] = useState(null);

  return (
    <div className="app">
      {!config
        ? <LandingPage onBegin={setConfig} />
        : <StoryPage config={config} onRestart={() => setConfig(null)} />
      }
    </div>
  );
}
