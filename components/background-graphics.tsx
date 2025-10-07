"use client"

export function BackgroundGraphics() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(64,224,208,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(64,224,208,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(64,224,208,0.08)_0%,transparent_50%)]" />

      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(64, 224, 208)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(64, 224, 208)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(64, 224, 208)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <line x1="10%" y1="20%" x2="40%" y2="60%" stroke="url(#line-gradient)" strokeWidth="1" />
        <line x1="60%" y1="30%" x2="90%" y2="70%" stroke="url(#line-gradient)" strokeWidth="1" />
        <line x1="30%" y1="80%" x2="70%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1" />

        <circle cx="10%" cy="20%" r="4" fill="rgb(64, 224, 208)" opacity="0.7" />
        <circle cx="40%" cy="60%" r="4" fill="rgb(64, 224, 208)" opacity="0.7" />
        <circle cx="60%" cy="30%" r="4" fill="rgb(64, 224, 208)" opacity="0.7" />
        <circle cx="90%" cy="70%" r="4" fill="rgb(64, 224, 208)" opacity="0.7" />
        <circle cx="30%" cy="80%" r="4" fill="rgb(64, 224, 208)" opacity="0.7" />
        <circle cx="70%" cy="40%" r="4" fill="rgb(64, 224, 208)" opacity="0.7" />
      </svg>
    </div>
  )
}
