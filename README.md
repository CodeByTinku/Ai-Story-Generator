# 📖 Chronicle — AI Interactive Story Generator

> *Where every choice weaves a new legend. Your story, your fate.*

Chronicle is an immersive, AI-powered interactive story experience built with React. Pick a genre, name your character, and watch an original narrative unfold — branching at every decision you make.

---

## ✨ Features

- **AI-Generated Stories** — Powered by Groq (Llama 3.1) or Google Gemini 2.0 Flash for dynamic, unique narratives every time.
- **🎭 Demo Mode** — Full story experience available with zero setup, no API key needed.
- **5 Genres** — Fantasy 🧙‍♂️, Sci-Fi 🚀, Horror 👁️, Mystery 🕵️, Romance 🌹
- **5 Story Tones** — Epic, Dark, Lighthearted, Mysterious, Comedic
- **Custom Characters** — Name your hero and give them an optional backstory that shapes the narrative.
- **Typewriter Effect** — Cinematic, letter-by-letter text reveal with skip support.
- **Story Progress Bar** — Visual tracker across up to 7 scenes.
- **⬇ Download Story** — Export your completed adventure as a `.txt` file.
- **Dual API Support** — Auto-detects Groq (`gsk_...`) vs Gemini (`AIza...`) key from your `.env`.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- A free API key from **Groq** or **Google AI Studio** *(optional — Demo Mode works without one)*

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ai-story-generator.git
cd ai-story-generator

# 2. Install dependencies
npm install

# 3. Set up your API key (optional)
cp .env.example .env
# Edit .env and add your key (see API Setup below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 API Setup

Create a `.env` file in the project root:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

The app **auto-detects** which provider to use based on key format:

| Key Format | Provider | Free Tier |
|---|---|---|
| `gsk_...` | **Groq** (Llama 3.1 8B Instant) | ✅ Yes |
| `AIza...` | **Google Gemini 2.0 Flash** | ✅ Yes |
| *(empty)* | **Demo Mode** | ✅ Built-in |

**Get a free Groq key:** [console.groq.com/keys](https://console.groq.com/keys)  
**Get a free Gemini key:** [aistudio.google.com](https://aistudio.google.com/app/apikey)

> ⚠️ **Never commit your `.env` file.** It is already listed in `.gitignore`.

---

## 🏗️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 8** | Build tool & dev server |
| **Groq API** | Primary AI (Llama 3.1 8B Instant) |
| **Google Gemini API** | Alternative AI (Gemini 2.0 Flash) |
| **Vanilla CSS** | Styling & animations |

---

## 📁 Project Structure

```
ai-story-generator/
├── public/
├── src/
│   ├── App.jsx         # Main app — LandingPage, StoryPage, SceneCard components
│   ├── gemini.js       # AI API integration (Groq + Gemini + Demo fallback)
│   ├── index.css       # Global styles & design system
│   ├── App.css         # Component-specific styles
│   └── main.jsx        # React entry point
├── index.html
├── vite.config.js
├── .env                # Your API key (not committed)
└── package.json
```

---

## 🎮 How to Play

1. **Choose a Genre** — Select the world your story takes place in.
2. **Set the Tone** — Decide the mood of your narrative.
3. **Name Your Character** — Give your hero an identity (and optional backstory).
4. **Click "Begin Your Story"** — Your AI-generated adventure starts.
5. **Make Choices** — At each scene's end, pick from 3 options that shape the plot.
6. **See Your Ending** — After ~5–7 scenes, your legend concludes.
7. **Download** — Save your full story as a text file.

---

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run oxlint linter
```

---

## 📄 License

MIT — feel free to use, modify, and share.

---

<div align="center">
  Made with ❤️ using React + Vite
</div>
