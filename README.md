# ISKCON Japa Counter (PWA)

A clean, minimal two-section app for daily japa tracking and rewards.

## Features

- Counter and Rewards sections only
- ISKCON-inspired saffron/sandalwood color palette
- English and Hindi switch
- Light and Dark mode toggle
- Local storage persistence for count, streak, and devotion score
- Daily reward reset with long-term score retention
- Reward basket fills as chanting progresses (marigold, rose, tulsi, peda, sweets)
- Krishna appearance for highly dedicated, consistent chanting
- PWA install support and offline caching
- Vibration pattern when daily target is reached (supported devices)

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Important Notes About Background Counting

Web apps can keep data and work offline, but they cannot reliably count taps while the phone screen is off. Mobile OS and browser policies pause input/event processing in that state.

This app includes a best-effort screen wake lock request to help keep chanting sessions active when possible, but true screen-off tap tracking requires a native Android/iOS app.
