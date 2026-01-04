
import React, { useState } from 'react';
import { generateProjectQuote, sendLeadEmail, ProjectQuote } from '../services/emailService';

interface OnboardingWizardProps {
  onClose: () => void;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: '',
    shootScale: '',
    deliverables: '',
    complexity: '',
    location: 'Sydney CBD',
    urgency: 'Standard (14 Days)',
    music: 'Stock Music Library',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFinalizing, setIsFinalizing] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [generatedQuote, setGeneratedQuote] = useState<ProjectQuote | null>(null);

  const projectTypes = ['Real Estate', 'Sports Doc', 'Brand Identity', 'TikTok/Viral', 'Event Aftermovie'];
  const shootScales = ['Remote Only', 'Half Day (4h)', 'Full Day (8h)', 'High-End Production'];
  const urgencyOptions = ['Standard (14 Days)', 'Priority (7 Days)', 'Express (48 Hours)'];
  const musicOptions = ['No Music', 'Stock Library', 'Custom Composition', 'Licensed Commercial Track'];

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleCalculateQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const quote = await generateProjectQuote(formData);
      setGeneratedQuote(quote);
      nextStep();
    } catch (error) {
      console.error("Quoting failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFinalSubmit = async () => {
    setIsFinalizing(true);
    try {
      if (generatedQuote) {
        await sendLeadEmail(formData, generatedQuote);
      }
      setIsFinished(true);
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsFinalizing(false);
    }
  };

  const renderProgress = () => (
    <div className="flex gap-1 mb-8 md:mb-12">
      {[1, 2, 3, 4, 5, 6, 7].map(num => (
        <div 
          key={num} 
          className={`h-1 flex-1 transition-colors duration-500 ${step >= num ? 'bg-white' : 'bg-zinc-900'}`}
        />
      ))}
    </div>
  );

  if (isFinished) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6 md:p-12 overflow-y-auto">
        <div className="max-w-2xl w-full text-center space-y-8 animate-in zoom-in-95 duration-700 py-12">
           <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8">
              <svg className="h-8 w-8 md:h-10 md:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
           </div>
           <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter leading-none">Request Received.</h2>
           <p className="text-zinc-400 text-base md:text-lg max-w-md mx-auto leading-relaxed px-4">
             Your project brief and strategy request have been dispatched to the Studio Charles desk. We'll reach out to <span className="text-white font-bold">{formData.email}</span> within 12-24 hours to discuss the roadmap.
           </p>
           <button onClick={onClose} className="bg-white text-black px-10 py-4 md:px-12 md:py-5 font-black uppercase tracking-widest hover:bg-zinc-200 transition-all text-sm">Back to Portfolio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-start md:items-center justify-center p-4 md:p-12 overflow-y-auto">
      <button onClick={onClose} className="absolute top-4 right-4 md:top-8 md:right-8 text-zinc-500 hover:text-white transition-colors p-2 z-[110]">
        <svg className="h-6 w-6 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
      </button>

      <div className="max-w-4xl w-full py-8 md:py-12">
        {step < 7 && renderProgress()}
        
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
          {step === 1 && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter leading-tight">Who are we<br />working with?</h2>
              <input autoFocus type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your Name or Brand" className="w-full bg-transparent border-b border-zinc-800 py-4 md:py-6 text-xl md:text-3xl focus:border-white outline-none transition-colors font-light" />
              <div className="flex justify-end"><button onClick={nextStep} disabled={!formData.name} className="bg-white text-black px-8 py-4 md:px-12 md:py-5 font-black uppercase tracking-widest disabled:opacity-20 text-sm">Next</button></div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter leading-tight">Select your<br />Niche Focus.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {projectTypes.map(t => (
                  <button key={t} onClick={() => { setFormData({...formData, projectType: t}); nextStep(); }} className={`p-4 md:p-6 border text-left transition-all ${formData.projectType === t ? 'bg-white text-black border-white' : 'border-zinc-800 text-zinc-400 hover:border-zinc-500'}`}>
                    <span className="text-[10px] uppercase tracking-widest font-bold">{t}</span>
                  </button>
                ))}
              </div>
              <button onClick={prevStep} className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white">Go Back</button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter leading-tight">The Vision.<br />Describe it.</h2>
              <textarea autoFocus value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Briefly explain the goal of this video..." className="w-full bg-transparent border-b border-zinc-800 py-4 md:py-6 text-lg md:text-xl focus:border-white outline-none transition-colors font-light resize-none h-32" />
              <div className="flex justify-between items-center pt-4">
                <button onClick={prevStep} className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white">Go Back</button>
                <button onClick={nextStep} disabled={!formData.description} className="bg-white text-black px-8 py-4 md:px-12 md:py-5 font-black uppercase tracking-widest text-sm">Next</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter leading-tight">Shoot Scale.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {shootScales.map(s => (
                  <button key={s} onClick={() => { setFormData({...formData, shootScale: s}); nextStep(); }} className={`p-4 md:p-6 border text-left transition-all ${formData.shootScale === s ? 'bg-white text-black' : 'border-zinc-800 text-zinc-400 hover:border-zinc-500'}`}>
                    <span className="text-[10px] uppercase tracking-widest font-bold">{s}</span>
                  </button>
                ))}
              </div>
              <button onClick={prevStep} className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white">Go Back</button>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter leading-tight">Lead Time & Audio.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-3">Lead Time</p>
                  <div className="space-y-2">
                    {urgencyOptions.map(u => (
                      <button key={u} onClick={() => setFormData({...formData, urgency: u})} className={`w-full p-3 md:p-4 border text-left text-[9px] font-bold uppercase tracking-widest transition-all ${formData.urgency === u ? 'bg-white text-black border-white' : 'border-zinc-800 text-zinc-400'}`}>{u}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-3">Audio Requirements</p>
                  <div className="space-y-2">
                    {musicOptions.map(m => (
                      <button key={m} onClick={() => setFormData({...formData, music: m})} className={`w-full p-3 md:p-4 border text-left text-[9px] font-bold uppercase tracking-widest transition-all ${formData.music === m ? 'bg-white text-black border-white' : 'border-zinc-800 text-zinc-400'}`}>{m}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4 md:pt-8">
                <button onClick={prevStep} className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white">Go Back</button>
                <button onClick={nextStep} className="bg-white text-black px-8 py-4 md:px-12 md:py-5 font-black uppercase tracking-widest text-sm">Next</button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl md:text-6xl font-extrabold uppercase tracking-tighter leading-tight">Final Step.<br />Email?</h2>
              <input autoFocus type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="hello@you.com" className="w-full bg-transparent border-b border-zinc-800 py-4 md:py-6 text-xl md:text-3xl focus:border-white outline-none transition-colors font-light" />
              <div className="flex justify-between items-center pt-4 md:pt-8">
                <button onClick={prevStep} className="text-zinc-600 text-[10px] uppercase tracking-widest hover:text-white">Go Back</button>
                <button onClick={handleCalculateQuote} disabled={!formData.email || isSubmitting} className="bg-white text-black px-8 py-4 md:px-12 md:py-5 font-black uppercase tracking-widest disabled:opacity-20 flex items-center gap-3 text-xs md:text-sm">
                  {isSubmitting ? 'Generating Strategy...' : 'View Project Summary'}
                  {isSubmitting && <div className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></div>}
                </button>
              </div>
            </div>
          )}

          {step === 7 && generatedQuote && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
              <div className="lg:col-span-2 space-y-6 md:space-y-8 order-2 lg:order-1">
                <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter leading-tight">Project<br />Strategy.</h2>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest text-zinc-500">Suggested Approach</p>
                  <p className="text-base md:text-lg font-bold uppercase">{generatedQuote.suggestedPackage}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-[9px] uppercase tracking-widest text-zinc-500">Timeline</p>
                  <p className="text-base md:text-lg font-bold uppercase">{generatedQuote.estimatedTimeline}</p>
                </div>
                <div className="space-y-4 pt-4">
                  <button 
                    onClick={handleFinalSubmit} 
                    disabled={isFinalizing}
                    className="w-full bg-white text-black py-4 md:py-5 font-black uppercase tracking-widest hover:bg-zinc-200 text-sm flex items-center justify-center gap-3"
                  >
                    {isFinalizing ? 'Sending...' : 'Send Strategy Request'}
                    {isFinalizing && <div className="animate-spin h-4 w-4 border-2 border-black border-t-transparent rounded-full"></div>}
                  </button>
                  <button onClick={prevStep} className="w-full border border-zinc-800 text-zinc-500 py-3 text-[9px] uppercase tracking-widest hover:text-white">Modify Details</button>
                </div>
              </div>

              <div className="lg:col-span-3 bg-zinc-950 border border-zinc-800 p-6 md:p-8 space-y-6 md:space-y-8 order-1 lg:order-2">
                <div className="flex justify-between border-b border-zinc-900 pb-4 md:pb-6">
                  <span className="text-zinc-500 uppercase text-[9px] tracking-widest">Financial Summary (AUD)</span>
                  <span className="text-white font-black text-lg md:text-xl">${generatedQuote.totalEstimatedCost.toLocaleString()}</span>
                </div>
                <div className="space-y-3">
                   {generatedQuote.breakdown.map((item, i) => (
                     <div key={i} className="flex justify-between text-[10px] md:text-xs">
                        <span className="text-zinc-400 uppercase tracking-widest">{item.item}</span>
                        <span className="text-zinc-200 tabular-nums">${item.cost.toLocaleString()}</span>
                     </div>
                   ))}
                </div>
                <div className="bg-zinc-900 p-4 md:p-6">
                   <p className="text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-zinc-500 mb-2">Strategy Summary</p>
                   <p className="text-zinc-300 text-sm italic font-light leading-relaxed">
                     {generatedQuote.summary}
                   </p>
                </div>
                <div className="space-y-3 pt-2">
                   <p className="text-[9px] uppercase tracking-widest text-zinc-500">Strategic Roadmap</p>
                   <ul className="space-y-2">
                      {generatedQuote.nextSteps.map((step, i) => (
                        <li key={i} className="text-[10px] md:text-xs text-zinc-400 flex gap-3">
                          <span className="text-white font-bold">{i+1}.</span> {step}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OnboardingWizard;
