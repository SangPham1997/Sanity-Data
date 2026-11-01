import { karateSessions as baseSessions, karateCategories } from '../karateSessions';
import { kumiteSessions } from './sessions.kumite';
import { sessionMeta } from './tracks';
import { buildBlocks } from './blocks';

const TRACK_ORDER = { kihon: 0, kata: 1, kumite: 2 };

const normalizeSession = (session) => {
  const meta = sessionMeta[session.id] ?? {};
  const merged = {
    ...session,
    ...meta,
    track: meta.track ?? session.track ?? 'kihon',
  };

  return {
    ...merged,
    blocks:
      merged.blocks ??
      buildBlocks({
        duration: merged.duration,
        track: merged.track,
      }),
  };
};

export const karateSessions = [...baseSessions, ...kumiteSessions]
  .map(normalizeSession)
  .sort((a, b) => {
    const trackDiff = (TRACK_ORDER[a.track] ?? 9) - (TRACK_ORDER[b.track] ?? 9);
    if (trackDiff !== 0) return trackDiff;
    const weekDiff = (a.week ?? 0) - (b.week ?? 0);
    if (weekDiff !== 0) return weekDiff;
    return (a.order ?? 0) - (b.order ?? 0);
  });

export { KARATE_TRACKS, KARATE_TRACK_MAP, getTrack, sessionMeta } from './tracks';
export { karateTechniques, techniqueById, getTechnique } from './techniques';
export { karateCategories };
