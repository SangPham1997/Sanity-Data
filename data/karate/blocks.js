const BLOCK_LABELS = {
  kihon: ['Khởi động', 'Kihon cơ bản', 'Tổ hợp / hiệp', 'Thả lỏng'],
  kata: ['Khởi động', 'Học từng đoạn', 'Chạy liền kata', 'Thả lỏng'],
  kumite: ['Khởi động', 'Kamae & footwork', 'Phản xạ / hiệp', 'Thả lỏng'],
};

const BLOCK_KINDS = ['warmup', 'drill', 'practice', 'cooldown'];

/**
 * Chia một buổi thành 4 block theo tỉ lệ thời lượng.
 * Các mốc này dùng để tua video và hiển thị timeline.
 */
export const buildBlocks = (session) => {
  const total = Math.max(60, session.duration || 900);
  const points = [0, 0.15, 0.72, 0.9, 1].map((ratio) =>
    Math.round(total * ratio)
  );
  const labels = BLOCK_LABELS[session.track] ?? BLOCK_LABELS.kihon;

  return labels.map((label, index) => ({
    label,
    start: points[index],
    end: points[index + 1],
    kind: BLOCK_KINDS[index],
  }));
};
