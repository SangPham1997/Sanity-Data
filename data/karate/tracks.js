export const KARATE_TRACKS = [
  {
    id: 'kihon',
    label: 'Kihon',
    vi: 'Nền tảng',
    icon: 'fa-hand-fist',
    description: 'Tấn pháp, đấm, gạt, đá — xây nền kỹ thuật vững.',
    weekLabels: {
      1: 'Tấn pháp',
      2: 'Đấm & phối hợp',
      3: 'Đòn chân',
      4: 'Thể lực nền',
    },
  },
  {
    id: 'kata',
    label: 'Kata',
    vi: 'Bài quyền',
    icon: 'fa-scroll',
    description: 'Taikyoku và Heian 1–3, học từng đoạn rồi chạy liền.',
    weekLabels: {
      1: 'Taikyoku',
      2: 'Heian Shodan',
      3: 'Heian Nidan',
      4: 'Heian Sandan',
    },
  },
  {
    id: 'kumite',
    label: 'Kumite',
    vi: 'Đối luyện solo',
    icon: 'fa-people-arrows',
    description: 'Kamae, maai, phản xạ — drill một mình, không cần đối thủ.',
    weekLabels: {
      1: 'Kamae & Maai',
      2: 'Gohon solo',
      3: 'Kihon Ippon',
      4: 'Ứng dụng',
    },
  },
];

export const KARATE_TRACK_MAP = Object.fromEntries(
  KARATE_TRACKS.map((track) => [track.id, track])
);

/**
 * Gán track/tuần/thứ tự/kỹ thuật cho 9 buổi cũ mà không phải sửa file dữ liệu
 * gốc. Nhờ vậy có thể mở rộng hoặc đổi lộ trình mà không đụng nội dung video.
 */
export const sessionMeta = {
  // ===== KIHON =====
  'kt-01': {
    track: 'kihon',
    week: 1,
    order: 1,
    focus: ['Tấn pháp', 'Kihon toàn diện'],
    techniques: ['zenkutsu-dachi', 'choku-zuki', 'oi-zuki', 'gedan-barai'],
  },
  'kt-02': {
    track: 'kihon',
    week: 2,
    order: 1,
    focus: ['Phối hợp đòn', 'Xoay hông'],
    techniques: ['gyaku-zuki', 'kizami-zuki', 'zenkutsu-dachi'],
  },
  'kt-03': {
    track: 'kihon',
    week: 3,
    order: 1,
    focus: ['Đòn chân', 'Thăng bằng'],
    techniques: ['mae-geri', 'mawashi-geri', 'zenkutsu-dachi'],
  },
  'kt-06': {
    track: 'kihon',
    week: 4,
    order: 1,
    focus: ['Thể lực', 'Core'],
    techniques: ['kamae'],
  },

  // ===== KATA =====
  'kt-05': {
    track: 'kata',
    week: 1,
    order: 1,
    focus: ['Taikyoku Shodan', 'Gedan-barai'],
    techniques: ['gedan-barai', 'oi-zuki', 'zenkutsu-dachi'],
  },
  'kt-04': {
    track: 'kata',
    week: 2,
    order: 1,
    focus: ['Heian Shodan', 'Chuyển tấn'],
    techniques: ['gedan-barai', 'oi-zuki', 'gyaku-zuki', 'age-uke'],
  },
  'kt-08': {
    track: 'kata',
    week: 3,
    order: 1,
    focus: ['Heian Nidan', 'Đá trước'],
    techniques: ['mae-geri', 'age-uke', 'gyaku-zuki', 'kokutsu-dachi'],
  },
  'kt-09': {
    track: 'kata',
    week: 4,
    order: 1,
    focus: ['Heian Sandan', 'Shuto-uke'],
    techniques: ['shuto-uke', 'kokutsu-dachi', 'kosa-dachi'],
  },

  // ===== KUMITE =====
  'kt-10': {
    track: 'kumite',
    week: 1,
    order: 1,
    focus: ['Kamae', 'Maai'],
    techniques: ['kamae', 'maai', 'zenkutsu-dachi'],
  },
  'kt-11': {
    track: 'kumite',
    week: 2,
    order: 1,
    focus: ['Gohon kumite solo', 'Lùi – gạt – đấm'],
    techniques: ['kamae', 'maai', 'gyaku-zuki', 'age-uke'],
  },
  'kt-12': {
    track: 'kumite',
    week: 3,
    order: 1,
    focus: ['Kihon ippon solo', 'Phản xạ'],
    techniques: ['gyaku-zuki', 'age-uke', 'soto-uke', 'mae-geri'],
  },
  'kt-07': {
    track: 'kumite',
    week: 4,
    order: 1,
    focus: ['Xoay hông', 'Ứng dụng'],
    techniques: ['kamae', 'maai', 'gyaku-zuki'],
  },
};

export const getTrack = (trackId) => KARATE_TRACK_MAP[trackId] ?? null;
