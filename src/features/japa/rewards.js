import {
  Apple,
  Candy,
  Flower2,
  Leaf,
  Flower,
  Sparkles,
  Sun,
  Star,
  Gem,
  Flame,
  Heart,
  Grape
} from "lucide-react";

export function ThaliReward({ stage, dark }) {
  const rim = dark ? "#a9b4c5" : "#b1782f";
  const plate = dark ? "#77859b" : "#c7923f";
  const center = dark ? "#8f9cb0" : "#dfb56b";
  const shadow = dark ? "#1f2732" : "#cabfab";

  return (
    <svg viewBox="0 0 420 280" className="h-full w-full" role="img" aria-label="Reward thali">
      <defs>
        <radialGradient id="thaliGrad" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor={center} />
          <stop offset="100%" stopColor={plate} />
        </radialGradient>
        <radialGradient id="steelShine" cx="30%" cy="28%" r="45%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.72)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="210" cy="224" rx="140" ry="20" fill={shadow} opacity="0.52" />
      <ellipse cx="210" cy="150" rx="138" ry="88" fill="url(#thaliGrad)" stroke={rim} strokeWidth="7" />
      <ellipse cx="210" cy="150" rx="112" ry="70" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="2" />
      <ellipse cx="180" cy="126" rx="78" ry="36" fill="url(#steelShine)" />

      {stage >= 1 ? <circle cx="154" cy="146" r="13" fill="#f4a42f" /> : null}
      {stage >= 1 ? <circle cx="182" cy="138" r="12" fill="#f3b13d" /> : null}
      {stage >= 1 ? <circle cx="130" cy="138" r="11" fill="#f2b84b" /> : null}

      {stage >= 2 ? <circle cx="240" cy="136" r="14" fill="#dd5472" /> : null}
      {stage >= 2 ? <circle cx="264" cy="148" r="13" fill="#e24765" /> : null}

      {stage >= 3 ? <ellipse cx="198" cy="122" rx="11" ry="7" fill="#67aa50" /> : null}
      {stage >= 3 ? <ellipse cx="216" cy="116" rx="10" ry="6" fill="#5d9f49" /> : null}
      {stage >= 3 ? <ellipse cx="180" cy="118" rx="9" ry="6" fill="#79b960" /> : null}

      {stage >= 4 ? <circle cx="274" cy="126" r="11" fill="#edd9a5" /> : null}
      {stage >= 4 ? <circle cx="292" cy="138" r="11" fill="#f4dfa9" /> : null}
      {stage >= 4 ? <circle cx="164" cy="120" r="10" fill="#f2d396" /> : null}
    </svg>
  );
}

export function KrishnaReward() {
  return (
    <img
      src="/krishna.png"
      alt="Lord Krishna reward"
      className="h-full w-full object-contain"
      loading="lazy"
      decoding="async"
    />
  );
}

export const rewardIcons = [
  { Icon: Apple, color: "#eb5c39" },
  { Icon: Grape, color: "#8348e4" },
  { Icon: Candy, color: "#f4568a" },
  { Icon: Flower2, color: "#ff7f50" },
  { Icon: Leaf, color: "#5aa954" },
  { Icon: Flower, color: "#f79bb8" },
  { Icon: Sparkles, color: "#f6b43f" },
  { Icon: Sun, color: "#ffb01f" },
  { Icon: Star, color: "#f4c244" },
  { Icon: Gem, color: "#30a9c8" },
  { Icon: Flame, color: "#ff6a3d" },
  { Icon: Heart, color: "#ee4f6e" }
];
