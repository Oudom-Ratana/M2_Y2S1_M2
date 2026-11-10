"use client"
import React, { useState } from 'react';

interface NotFoundPageProps {
  brandName?: string;
  characterImageUrl?: string;
  onBackHome?: () => void;
  onLogin?: () => void;
}


const FluffyBlueMonster: React.FC<{ eyeOffset: { x: number; y: number } }> = ({ eyeOffset }) => {
  return (
    <svg
      viewBox="0 0 420 440"
      className="w-full h-full drop-shadow-[0_22px_24px_rgba(20,45,90,0.28)] select-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main 3D Fur Body Gradients */}
        <radialGradient id="bodyFurGrad" cx="42%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#7CC2F5" />
          <stop offset="45%" stopColor="#4A90D6" />
          <stop offset="82%" stopColor="#2E6BB0" />
          <stop offset="100%" stopColor="#1E4C85" />
        </radialGradient>

        <linearGradient id="bellyHighlight" x1="50%" y1="15%" x2="50%" y2="95%">
          <stop offset="0%" stopColor="#8ED0FF" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#58A0E3" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#265A99" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="armLeftGrad" x1="20%" y1="10%" x2="80%" y2="90%">
          <stop offset="0%" stopColor="#6EB8F0" />
          <stop offset="65%" stopColor="#4385CA" />
          <stop offset="100%" stopColor="#275894" />
        </linearGradient>

        <linearGradient id="armRightGrad" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#72BCF2" />
          <stop offset="60%" stopColor="#3B7CC2" />
          <stop offset="100%" stopColor="#214E87" />
        </linearGradient>

        <linearGradient id="tailGrad" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#6BB6EE" />
          <stop offset="60%" stopColor="#4183C7" />
          <stop offset="100%" stopColor="#25548D" />
        </linearGradient>

        <radialGradient id="eyeSclera" cx="45%" cy="38%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="80%" stopColor="#F0F5FA" />
          <stop offset="100%" stopColor="#CBD8E8" />
        </radialGradient>

        <linearGradient id="mouthGrad" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#2A0E17" />
          <stop offset="100%" stopColor="#4D1929" />
        </linearGradient>

        {/* Fur texture filter for soft organic edges */}
        <filter id="softFurGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#173A6A" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* Ground Contact Shadow */}
      <ellipse cx="215" cy="408" rx="95" ry="16" fill="rgba(22, 48, 89, 0.28)" />
      <ellipse cx="215" cy="408" rx="68" ry="10" fill="rgba(18, 40, 78, 0.38)" />

      {/* Fluffy Tail (Curled out to the left) */}
      <path
        d="M148 318 C 110 338, 66 334, 52 302 C 40 274, 72 254, 96 274 C 112 287, 125 294, 152 292 Z"
        fill="url(#tailGrad)"
      />
      {/* Tail Fur Tufts */}
      <path
        d="M52 298 L44 292 L54 286 L47 278 L60 276 L58 268 L71 270 M64 318 L52 315 L58 308 M84 328 L74 326 L80 318"
        stroke="#5BA6E8"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left & Right Stumpy Legs */}
      <g>
        {/* Left Leg */}
        <path
          d="M158 328 L152 388 C144 393, 146 404, 160 405 L198 405 C205 404, 206 394, 202 386 L200 328 Z"
          fill="url(#bodyFurGrad)"
        />
        {/* Left Foot Toes / Fur */}
        <ellipse cx="160" cy="401" rx="11" ry="6.5" fill="#498FD6" />
        <ellipse cx="177" cy="403" rx="12" ry="7" fill="#529AE0" />
        <ellipse cx="193" cy="401" rx="10" ry="6.5" fill="#4487CC" />

        {/* Right Leg */}
        <path
          d="M222 328 L220 386 C217 394, 219 404, 228 405 L266 405 C278 404, 280 393, 270 387 L262 328 Z"
          fill="url(#bodyFurGrad)"
        />
        {/* Right Foot Toes / Fur */}
        <ellipse cx="232" cy="401" rx="10" ry="6.5" fill="#4487CC" />
        <ellipse cx="248" cy="403" rx="12" ry="7" fill="#529AE0" />
        <ellipse cx="264" cy="401" rx="11" ry="6.5" fill="#498FD6" />
      </g>

      {/* Main Pear-Shaped Fluffy Monster Torso & Head */}
      <path
        d="M210 52
           C 265 50, 302 88, 306 146
           C 312 204, 318 265, 302 316
           C 290 352, 258 364, 212 364
           C 166 364, 134 352, 122 316
           C 106 265, 112 204, 118 146
           C 122 88, 155 54, 210 52 Z"
        fill="url(#bodyFurGrad)"
        filter="url(#softFurGlow)"
      />

      {/* Soft Belly Fur Highlight */}
      <ellipse cx="212" cy="225" rx="76" ry="118" fill="url(#bellyHighlight)" />

      {/* Outer Silhouette Fur Spikes (Top of Head & Sides) */}
      <path
        d="M175 56 L182 44 L192 53 L203 40 L213 52 L224 41 L232 54 L245 46 L250 58
           M120 140 L110 135 L117 152 L106 154 L115 168 L105 175 L114 190
           M304 140 L314 135 L307 152 L318 154 L309 168 L319 175 L310 190
           M115 260 L104 268 L116 278 L106 290 L120 298
           M308 260 L318 268 L307 278 L316 290 L304 298"
        stroke="#5DA9EC"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Layered Fur Texture Strokes across Chest, Belly, and Cheeks */}
      <g stroke="#78C2FA" strokeWidth="2.6" strokeLinecap="round" opacity="0.65">
        <path d="M168 205 Q163 218 158 226" />
        <path d="M188 212 Q186 226 182 235" />
        <path d="M210 215 Q210 230 208 240" />
        <path d="M234 212 Q237 226 240 235" />
        <path d="M254 205 Q260 218 264 226" />

        <path d="M155 252 Q150 266 146 276" />
        <path d="M178 260 Q175 274 172 284" />
        <path d="M204 264 Q204 278 202 288" />
        <path d="M228 262 Q230 276 233 286" />
        <path d="M252 256 Q256 270 260 280" />

        <path d="M166 306 Q164 318 160 326" />
        <path d="M192 312 Q191 324 189 332" />
        <path d="M218 314 Q219 326 220 334" />
        <path d="M244 308 Q247 320 250 328" />
      </g>

      {/* Darker Fur Depth Strokes */}
      <g stroke="#255A99" strokeWidth="2.8" strokeLinecap="round" opacity="0.55">
        <path d="M150 185 Q145 198 140 206" />
        <path d="M198 195 Q196 208 194 216" />
        <path d="M225 195 Q227 208 229 216" />
        <path d="M268 185 Q273 198 278 206" />
        <path d="M165 282 Q162 295 158 304" />
        <path d="M208 290 Q208 303 206 312" />
        <path d="M248 282 Q252 295 256 304" />
      </g>

      {/* Left Arm (Hanging Relaxed by the Side) */}
      <path
        d="M126 168
           C 102 195, 86 248, 84 295
           C 83 318, 102 332, 118 320
           C 132 308, 138 265, 144 222 Z"
        fill="url(#armLeftGrad)"
        filter="url(#softFurGlow)"
      />
      {/* Left Arm Fur Strokes */}
      <path
        d="M92 225 L82 232 M88 252 L78 260 M86 280 L76 288 M94 316 L88 325 M108 322 L105 331"
        stroke="#62B0F0"
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Right Arm (Raised Up Scratching Head in Confusion) */}
      <path
        d="M292 218
           C 332 214, 366 184, 358 138
           C 352 104, 322 76, 286 76
           C 268 76, 262 94, 276 106
           C 298 118, 314 138, 308 162
           C 304 176, 292 184, 282 188 Z"
        fill="url(#armRightGrad)"
        filter="url(#softFurGlow)"
      />
      {/* Right Arm Fur Tufts on Elbow & Paw */}
      <path
        d="M354 128 L364 124 M358 146 L369 145 M354 166 L365 170 M342 186 L352 194
           M282 76 L274 68 M296 76 L294 66 M312 82 L316 72"
        stroke="#63B0F0"
        strokeWidth="3.4"
        strokeLinecap="round"
      />

      {/* Facial Features: Eyes, Worried Eyebrows, and Confused Frown */}
      <g>
        {/* Eye Socket Subtle Shading */}
        <ellipse cx="191" cy="126" rx="22" ry="25" fill="#1E4B82" opacity="0.55" />
        <ellipse cx="233" cy="128" rx="22" ry="25" fill="#1E4B82" opacity="0.55" />

        {/* Left Eye Sclera */}
        <ellipse cx="192" cy="125" rx="19" ry="22" fill="url(#eyeSclera)" stroke="#235087" strokeWidth="2" />
        {/* Right Eye Sclera */}
        <ellipse cx="232" cy="127" rx="19" ry="22" fill="url(#eyeSclera)" stroke="#235087" strokeWidth="2" />

        {/* Left Pupil (Follows cursor slightly, defaults looking slightly up-left) */}
        <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
          <circle cx="190" cy="123" r="8.5" fill="#1B2432" />
          <circle cx="190" cy="123" r="5" fill="#0B0F17" />
          <circle cx="187" cy="119" r="2.8" fill="#FFFFFF" />
          <circle cx="193" cy="126" r="1.2" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Right Pupil */}
        <g transform={`translate(${eyeOffset.x}, ${eyeOffset.y})`}>
          <circle cx="229" cy="125" r="8.5" fill="#1B2432" />
          <circle cx="229" cy="125" r="5" fill="#0B0F17" />
          <circle cx="226" cy="121" r="2.8" fill="#FFFFFF" />
          <circle cx="232" cy="128" r="1.2" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Lower Eyelid Bags (Adding to the lost/worried expression) */}
        <path
          d="M174 139 Q192 149 209 139"
          stroke="#3A7AC2"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M215 141 Q232 151 249 141"
          stroke="#3A7AC2"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Thick Worried Furrowed Eyebrows */}
        <path
          d="M168 106 Q186 92 206 101"
          stroke="#2B62A1"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M168 104 Q186 90 206 99"
          stroke="#6AB7F2"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        <path
          d="M218 102 Q238 94 255 110"
          stroke="#2B62A1"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M218 100 Q238 92 255 108"
          stroke="#6AB7F2"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Worried / Confused Open Mouth */}
        <path
          d="M185 175
             C 192 158, 226 158, 234 176
             C 237 183, 228 188, 219 184
             C 210 180, 204 180, 195 184
             C 186 187, 181 182, 185 175 Z"
          fill="url(#mouthGrad)"
          stroke="#275894"
          strokeWidth="2.5"
        />

        {/* Upper Small White Teeth */}
        <path
          d="M196 165 Q202 169 207 165 Q213 169 219 166"
          stroke="#F2F6FA"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Pink Tongue & Lip Detail */}
        <path
          d="M192 179 Q210 171 226 180 Q210 185 192 179 Z"
          fill="#E07A93"
        />
        <path
          d="M187 182 Q210 176 231 183"
          stroke="#D46882"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

export const NotFoundPage: React.FC<NotFoundPageProps> = ({
  brandName = 'Muin',
  characterImageUrl,
  onBackHome,
  onLogin,
}) => {
  const [eyeOffset, setEyeOffset] = useState({ x: -1.5, y: -1.5 });

  // Subtle interactive eye movement when the user moves their cursor
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { innerWidth, innerHeight } = window;
    const x = ((e.clientX - innerWidth / 2) / (innerWidth / 2)) * 4;
    const y = ((e.clientY - innerHeight / 2) / (innerHeight / 2)) * 3.5;
    setEyeOffset({ x, y });
  };

  const handleBackHome = () => {
    if (onBackHome) {
      onBackHome();
    } else if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between select-none font-sans"
      style={{
        background:
          'linear-gradient(180deg, #5CA0D3 0%, #83B8E2 28%, #B8D8F0 55%, #DCEBFA 76%, #EAF2FB 100%)',
      }}
    >
      {/* Soft Atmospheric Cloud Layers in the Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        {/* Left mid-sky cloud bank */}
        <div
          className="absolute top-[22%] -left-[8%] w-[520px] h-[220px] rounded-full opacity-55 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FFFFFF 0%, rgba(255,255,255,0) 75%)' }}
        />
        <div
          className="absolute top-[34%] left-[6%] w-[420px] h-[170px] rounded-full opacity-65 blur-2xl"
          style={{ background: 'radial-gradient(circle, #F5FAFF 0%, rgba(245,250,255,0) 72%)' }}
        />

        {/* Right mid-sky cloud bank */}
        <div
          className="absolute top-[24%] -right-[6%] w-[540px] h-[230px] rounded-full opacity-55 blur-3xl"
          style={{ background: 'radial-gradient(circle, #FFFFFF 0%, rgba(255,255,255,0) 75%)' }}
        />
        <div
          className="absolute top-[36%] right-[5%] w-[400px] h-[160px] rounded-full opacity-65 blur-2xl"
          style={{ background: 'radial-gradient(circle, #F5FAFF 0%, rgba(245,250,255,0) 72%)' }}
        />

        {/* Horizon mist blend */}
        <div
          className="absolute bottom-[22%] left-1/2 -translate-x-1/2 w-[120%] h-[240px] blur-3xl opacity-80"
          style={{
            background:
              'linear-gradient(180deg, rgba(235,245,255,0) 0%, rgba(240,247,255,0.9) 55%, rgba(234,242,251,1) 100%)',
          }}
        />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 pt-6 sm:pt-8 flex items-center justify-between">
        {/* Brand Logo with 4-Point Star Sparkle */}
        <a
          href="/"
          onClick={(e) => {
            if (onBackHome) {
              e.preventDefault();
              onBackHome();
            }
          }}
          className="flex items-center gap-2.5 text-white hover:opacity-90 transition-opacity"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-sm"
          >
            <path d="M12 1C12 7.2 16.8 12 23 12C16.8 12 12 16.8 12 23C12 16.8 7.2 12 1 12C7.2 12 12 7.2 12 1Z" />
          </svg>
          <span className="text-xl sm:text-[23px] font-semibold tracking-tight drop-shadow-sm">
            {brandName}
          </span>
        </a>

        {/* Top-Right Log In Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="bg-white hover:bg-slate-50 active:scale-[0.98] text-[#1E2538] font-medium text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-[0_2px_10px_rgba(30,60,110,0.12)] border border-white/80 transition-all cursor-pointer"
        >
          Log In
        </button>
      </header>

      {/* Center 404 Hero Composition */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-8 -mt-4 sm:-mt-8">
        {/* Giant "404" + Overlapping Monster Container */}
        <div className="relative flex items-center justify-center w-full max-w-[1060px] h-[250px] sm:h-[360px] md:h-[430px]">
          {/* Huge Background "4 0 4" Typography */}
          <div
            aria-hidden="true"
            className="grid grid-cols-3 items-center w-full text-center font-extrabold text-white leading-none tracking-tight select-none pointer-events-none"
            style={{
              fontSize: 'clamp(145px, 27vw, 355px)',
              textShadow: '0 12px 40px rgba(55, 110, 175, 0.22)',
            }}
          >
            <span className="justify-self-end pr-1 sm:pr-4 md:pr-6 opacity-95">4</span>
            <span className="justify-self-center opacity-95">0</span>
            <span className="justify-self-start pl-1 sm:pl-4 md:pl-6 opacity-95">4</span>
          </div>

          {/* Center Character Standing in Front of the "0" */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[215px] h-[225px] sm:w-[320px] sm:h-[335px] md:w-[395px] md:h-[415px] translate-y-2 sm:translate-y-3 transition-transform duration-300">
              {characterImageUrl ? (
                <img
                  src={characterImageUrl}
                  alt="Lost Blue Monster"
                  className="w-full h-full object-contain drop-shadow-[0_22px_24px_rgba(20,45,90,0.28)]"
                />
              ) : (
                <FluffyBlueMonster eyeOffset={eyeOffset} />
              )}
            </div>
          </div>
        </div>

        {/* Message & Subtitle Copy */}
        <div className="mt-2 sm:mt-4 text-center max-w-lg mx-auto px-4">
          <h1 className="text-[28px] sm:text-[42px] md:text-[46px] font-bold text-[#1D2335] tracking-[-0.02em] leading-tight">
            Oops, i think we’re lost
          </h1>
          <p className="mt-2 sm:mt-3 text-sm sm:text-[17px] text-[#7B869C] font-normal tracking-[-0.01em]">
            Let’s get you back somewhere familiar...
          </p>
        </div>

        {/* Bottom "Back to home" Pill Button */}
        <div className="mt-7 sm:mt-9">
          <button
            type="button"
            onClick={handleBackHome}
            className="group inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 active:scale-[0.98] text-[#1D2335] font-semibold text-xs sm:text-[13px] px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-slate-200/90 shadow-[0_3px_12px_rgba(30,45,80,0.06)] hover:shadow-[0_6px_18px_rgba(30,45,80,0.1)] transition-all cursor-pointer"
          >
            {/* Left Arrow in Circle Icon */}
            <svg
              className="w-4 h-4 text-[#4A5568] transition-transform duration-200 group-hover:-translate-x-0.5"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M12.25 10H7.75M7.75 10L9.75 8M7.75 10L9.75 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Back to home</span>
          </button>
        </div>
      </main>

      {/* Bottom Spacer for Balanced Vertical Framing */}
      <footer className="h-6 sm:h-10" />
    </div>
  );
};

export default NotFoundPage;
