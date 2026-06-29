// ─── Demo Story Data (No API needed) ────────────────────────────────────────
const DEMO_STORY = {
  opening: {
    story: `The ancient city of Valdris slept beneath a shroud of purple mist as Kael moved through its crooked alleyways like a shadow given purpose. Three years had passed since the Dragon Conclave had branded him a traitor — three years of exile, of hunger, of searching for the one artifact that could prove his innocence: the Obsidian Sigil.

Tonight, a tip from a dying informant had brought him to the doorstep of the Crimson Vault, the most heavily guarded treasury in the known world. The iron door before him pulsed with a faint, malevolent glow — someone had activated the magical wards recently. Very recently.

From somewhere deep within the vault came the unmistakable crack of breaking stone, followed by a woman's sharp curse in a language Kael hadn't heard in decades. He wasn't the only thief in Valdris tonight. His hand tightened around the hilt of his blade as the mist curled around his boots like a living thing, and the city's thousand gargoyles seemed to watch him with stone-cold interest.

The door was already ajar. Someone had beaten him here — and they might reach the Sigil first.`,
    choices: [
      { id: 'A', text: 'Rush inside immediately — you cannot let anyone else take the Sigil.' },
      { id: 'B', text: 'Wait and observe from the shadows to learn who else is in the vault.' },
      { id: 'C', text: 'Circle around to the vault\'s hidden rear entrance you discovered in old blueprints.' },
    ],
    isEnding: false,
  },
  scenes: {
    'Rush inside immediately — you cannot let anyone else take the Sigil.': {
      story: `Kael shouldered through the iron door, his boots scraping against ancient stone. The vault's interior stretched vast and cathedral-like, its ceiling lost in darkness, its walls lined with towering shelves of glowing relics. His breath misted in the magical cold.

He spotted her immediately — a woman in deep blue leathers, her silver hair unbound, kneeling before a shattered pedestal. In her hands, catching the vault's ambient light like captured midnight, was the Obsidian Sigil. She heard him and spun, her eyes widening with an emotion he couldn't name — surprise, yes, but also something terribly like recognition.

"You're Kael Dawnstrider," she breathed. "The Conclave thinks you're dead." She rose slowly, the Sigil held between them. "I'm Lyra Ashveil. And I've been looking for you for two years." Her posture was defensive but not aggressive — she hadn't drawn her weapon. "I have proof, Kael. Proof that you were framed. But I need your help to expose them — and the Sigil is only part of it."

The vault's wards began to hum. Someone had triggered an alarm. They had perhaps two minutes before guards arrived.`,
      choices: [
        { id: 'A', text: 'Trust Lyra — grab her hand and run together.' },
        { id: 'B', text: 'Demand she hand over the Sigil first before you trust anyone.' },
        { id: 'C', text: 'Knock her out, take the Sigil, and figure out her story later from a safe distance.' },
      ],
      isEnding: false,
    },
    'Wait and observe from the shadows to learn who else is in the vault.': {
      story: `Kael melted into the alcove beside the door, his breathing slowing to near nothing — an old assassin's trick that had saved his life more times than he could count. Through the gap, he watched.

A woman emerged from the vault's inner chamber, silver-haired and moving with the careful precision of someone trained in the same deadly schools he was. She carried the Obsidian Sigil in both hands, treating it like a living thing. Behind her, two robed figures followed — Dragon Conclave scholars, their insignia unmistakable. They were speaking in urgent, hushed tones.

"The transfer must happen before dawn," one scholar said. "The High Inquisitor cannot know we're here." Kael's blood went cold. The Conclave was fracturing from within. These scholars were acting against their own leadership — and they had his Sigil. The woman set it on a portable examination table and began carefully documenting its markings by enchanted lantern light. She hadn't stolen it. She was studying it. Kael had stumbled into something far larger than a simple theft.

He had to decide how to use this knowledge.`,
      choices: [
        { id: 'A', text: 'Reveal yourself to the rebellious scholars and offer an alliance.' },
        { id: 'B', text: 'Wait until they leave, then steal the Sigil while they\'re distracted.' },
        { id: 'C', text: 'Follow them discreetly to discover the location of the High Inquisitor\'s secret.' },
      ],
      isEnding: false,
    },
    'Circle around to the vault\'s hidden rear entrance you discovered in old blueprints.': {
      story: `The rear passage was exactly where the century-old blueprints had promised — a maintenance tunnel, long forgotten, smelling of rust and old magic. Kael navigated it by memory and fingertip, counting thirty-seven steps before the stone gave way to a concealed panel that swung inward with a whisper.

He emerged behind the vault's central display — and nearly walked directly into an old man sitting cross-legged on the floor, surrounded by open books and scattered notes, completely undisturbed by any alarm. The man looked up with the mild curiosity of someone interrupted during afternoon tea, not startled in the slightest. He was ancient, his beard reaching his belt, his eyes the color of winter sky. The Obsidian Sigil sat in his lap like a sleeping cat.

"Ah," said the old man pleasantly. "You found the back way. Most people don't read the original construction documents. Sit down, Kael Dawnstrider — I've been waiting eleven years for someone clever enough to find this entrance." He gestured at the Sigil. "Before you try to take it, perhaps you should know what it actually is. What it does. What it costs." His ancient eyes were utterly calm. "The Conclave didn't frame you, boy. They were afraid of you. There's a difference — and it matters enormously."`,
      choices: [
        { id: 'A', text: 'Sit down and listen to the old man\'s explanation.' },
        { id: 'B', text: 'Grab the Sigil and run — this could be a trap.' },
        { id: 'C', text: 'Ask the old man who he is before deciding anything.' },
      ],
      isEnding: false,
    },
  },
  ending: {
    story: `The truth, when it finally came, was both simpler and more terrible than Kael had imagined.

The Obsidian Sigil wasn't an artifact of proof — it was a key. A key to the Dragon Conclave's oldest and darkest secret: that the dragons themselves had never truly left. They had merely changed form, slipping into human skin over three centuries ago, and the Conclave existed not to protect humanity from dragons, but to protect the dragons' secret from humanity.

Kael had been framed because his investigation, three years prior, had come within a single correct question of discovering the truth. They had broken him to stop him. And now he stood in the heart of Valdris with the key in his hands, allies at his side, and a choice that would echo through history.

He could expose everything — plunge the world into chaos and war, but end the lie. Or he could walk away with his name cleared, his exile ended, the secret intact — and live a comfortable half-life knowing what he knew. The city breathed around him, three million souls sleeping soundly in their unknowing. The dragon-things that wore Conclave robes waited for his answer.

Kael looked at the Sigil one last time, and smiled.

He chose truth. It cost him everything. It changed the world. Three years later, standing in the ruins and the rebuilding, he had no regrets. Some things are worth every scar.`,
    choices: [],
    isEnding: true,
  },
};

// ─── Groq API (free, no quota issues) ────────────────────────────────────────
async function generateWithGroq(prompt, apiKey) {
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama-3.1-8b-instant',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.85,
      max_tokens: 1200,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Groq error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// ─── Gemini API ───────────────────────────────────────────────────────────────
async function generateWithGemini(prompt, apiKey) {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    }
  );

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Gemini error: ${response.status}`);
  }

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

// ─── Detect provider from key format ─────────────────────────────────────────
function detectProvider(apiKey) {
  if (!apiKey) return 'demo';
  if (apiKey.startsWith('gsk_')) return 'groq';
  if (apiKey.startsWith('AIza')) return 'gemini';
  return 'gemini'; // fallback — try gemini for AQ. keys too
}

// ─── Main generate function ───────────────────────────────────────────────────
async function generate(prompt) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();
  const provider = detectProvider(apiKey);

  if (provider === 'demo') throw new Error('DEMO_MODE');
  if (provider === 'groq') return generateWithGroq(prompt, apiKey);
  return generateWithGemini(prompt, apiKey);
}

// ─── Story prompts ────────────────────────────────────────────────────────────
export async function generateStoryOpening({ genre, characterName, characterBackstory, tone }) {
  const prompt = `You are a master storyteller creating an immersive interactive adventure.

Setting: Genre: ${genre}, Tone: ${tone}, Character: ${characterName}
Backstory: ${characterBackstory || `A mysterious ${genre} protagonist`}

Write a captivating story opening (3-4 paragraphs) that immediately immerses the reader, introduces ${characterName} naturally, creates tension, and ends at a decision point.

After the story text, provide EXACTLY 3 choices:
---CHOICES---
{"choices": [{"id": "A", "text": "..."}, {"id": "B", "text": "..."}, {"id": "C", "text": "..."}]}

Write story first, then ---CHOICES--- separator, then JSON. No markdown.`;

  try {
    const text = await generate(prompt);
    return parseStoryResponse(text);
  } catch (err) {
    if (err.message === 'DEMO_MODE' || !import.meta.env.VITE_GEMINI_API_KEY?.trim()) {
      return DEMO_STORY.opening;
    }
    throw err;
  }
}

export async function generateNextScene({ genre, tone, characterName, storyHistory, choiceMade }) {
  const historyText = storyHistory
    .map((s, i) => `Scene ${i + 1}: ${s.story.slice(0, 200)}...\nChose: ${s.choice}`)
    .join('\n\n');

  const prompt = `Continue this interactive ${genre} story (${tone} tone) for character ${characterName}.

Story so far:\n${historyText}

Player chose: "${choiceMade}"

Write the next scene (3-4 paragraphs) that responds to this choice and advances the plot.
If scene 5+, write a satisfying ending with ---THE END--- instead of choices.
Otherwise provide 3 choices:
---CHOICES---
{"choices": [{"id": "A", "text": "..."}, {"id": "B", "text": "..."}, {"id": "C", "text": "..."}]}

No markdown formatting.`;

  try {
    const text = await generate(prompt);
    return parseStoryResponse(text);
  } catch (err) {
    if (err.message === 'DEMO_MODE' || !import.meta.env.VITE_GEMINI_API_KEY?.trim()) {
      const sceneData = DEMO_STORY.scenes[choiceMade] ?? DEMO_STORY.ending;
      const isLate = storyHistory.length >= 3;
      return isLate ? DEMO_STORY.ending : sceneData;
    }
    throw err;
  }
}

// ─── Parser ───────────────────────────────────────────────────────────────────
function parseStoryResponse(text) {
  if (text.includes('---THE END---')) {
    return { story: text.split('---THE END---')[0].trim(), choices: [], isEnding: true };
  }
  if (text.includes('---CHOICES---')) {
    const parts = text.split('---CHOICES---');
    try {
      const parsed = JSON.parse(parts[1].trim());
      return { story: parts[0].trim(), choices: parsed.choices, isEnding: false };
    } catch {
      return { story: parts[0].trim(), choices: [], isEnding: true };
    }
  }
  return { story: text.trim(), choices: [], isEnding: true };
}

export function getApiMode() {
  const key = import.meta.env.VITE_GEMINI_API_KEY?.trim();
  if (!key) return 'demo';
  if (key.startsWith('gsk_')) return 'groq';
  return 'gemini';
}
