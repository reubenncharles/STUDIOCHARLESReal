
import React, { useState } from 'react';
import { generateVideoIdea, ScriptSuggestion } from '../services/gemini';

const AiAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<ScriptSuggestion | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const data = await generateVideoIdea(topic);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-950 border border-zinc-900 p-6 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="w-full">
          <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-4">Content Focus</label>
          <div className="flex flex-col gap-4">
            <input 
              type="text" 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. Luxury Sydney Penthouse Tour"
              className="bg-black border border-zinc-800 text-white p-4 focus:border-white focus:outline-none transition-colors w-full"
            />
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="bg-white text-black font-bold uppercase tracking-widest py-4 hover:bg-zinc-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 w-full"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3 text-black" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : 'Generate Hook & Script'}
            </button>
          </div>
          
          <div className="mt-8">
            <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-4">Successful Niches</h4>
            <div className="flex flex-wrap gap-2">
              {['Sydney Real Estate', 'FC Season Reviews', 'Property Management', 'Viral Tours'].map(s => (
                <button 
                  key={s} 
                  onClick={() => setTopic(s)}
                  className="px-3 py-1 border border-zinc-900 text-zinc-500 text-[10px] md:text-xs hover:border-zinc-700 hover:text-white transition-all"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-[300px] border border-zinc-900 p-6 md:p-8 flex flex-col justify-center relative overflow-hidden bg-black/30">
          {!result && !loading && (
             <div className="text-center text-zinc-600 italic text-sm">
               Let's engineer your next viral hook...
             </div>
          )}
          
          {loading && (
             <div className="space-y-6">
               <div className="h-8 bg-zinc-900 animate-pulse w-3/4"></div>
               <div className="space-y-2">
                 <div className="h-4 bg-zinc-900 animate-pulse w-full"></div>
                 <div className="h-4 bg-zinc-900 animate-pulse w-5/6"></div>
                 <div className="h-4 bg-zinc-900 animate-pulse w-4/6"></div>
               </div>
             </div>
          )}

          {result && !loading && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="mb-8">
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Viral Hooks
                </h4>
                <ul className="space-y-3">
                  {result.hooks.map((h, i) => (
                    <li key={i} className="text-zinc-300 text-sm leading-relaxed border-l border-zinc-800 pl-4 py-1 italic">
                      "{h}"
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Execution Plan
                </h4>
                <ul className="space-y-3">
                  {result.outline.map((o, i) => (
                    <li key={i} className="text-zinc-300 text-sm flex gap-3">
                      <span className="text-zinc-600 tabular-nums font-bold">{i + 1}.</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiAssistant;
