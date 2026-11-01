// ============================================================
// SCHEMA:
//   mode:     'time' | 'reps'
//   duration: giây/hiệp
//   sets:     số hiệp
//   reps:     số lần/hiệp (chỉ khi mode='reps')
//   rest:     giây nghỉ giữa hiệp
// ============================================================

export const exercises = [
  // ============================================================
  // TUẦN 1 — NỀN TẢNG
  // Mục tiêu: làm quen động tác, kiểm soát hơi thở
  // Tổng thời gian ước tính: ~6 phút
  // ============================================================
  {
    id: 'bicycle-crunch',
    week: 1,
    name: 'Đạp xe trên không',
    subName: 'Bicycle Crunches',
    target: 'Bụng trên, bụng chéo & Đùi',
    mode: 'time',
    duration: 30,
    sets: 2,
    reps: null,
    rest: 15,
    guide: 'Nằm ngửa, tay để sau đầu. Co gối trái lên, xoay khuỷu tay phải chạm gối trái. Đổi bên liên tục nhịp nhàng, không thả chân chạm sàn.',
    type: 'bicycle',
    svg: 'bicycle',
    category: 'Bụng',
    videoUrl: 'https://www.youtube.com/shorts/CakPX7X-mSw',
  },
  {
    id: 'plank',
    week: 1,
    name: 'Plank (Tấm ván)',
    subName: 'Plank Hold',
    target: 'Cơ bụng sâu, lưng dưới, vai',
    mode: 'time',
    duration: 20,
    sets: 2,
    reps: null,
    rest: 20,
    guide: 'Tư thế chống đẩy, giữ cơ thể thẳng từ đầu đến gót chân. Siết cơ bụng và mông, không võng lưng. Giữ càng lâu càng tốt.',
    type: 'plank',
    svg: 'plank',
    category: 'Bụng',
    videoUrl: 'https://youtu.be/hneOAmo_NLw',
  },
  {
    id: 'swan-prep',
    week: 1,
    name: 'Thiên nga chuẩn bị',
    subName: 'Swan Prep',
    target: 'Cơ dựng sống, lưng dưới, cơ mông',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 6,          // giảm từ 8 → 6, mỗi rep ~5s cho động tác chậm
    rest: 15,
    guide: 'Nằm sấp, hai tay đặt dưới vai, khuỷu tay sát thân. Hít vào, dùng cơ lưng nâng ngực lên khỏi sàn, giữ cổ thẳng theo cột sống. Thở ra, hạ xuống. Không dùng tay đẩy mạnh.',
    type: 'birddog',
    svg: 'swan',
    category: 'Lưng & Cột sống',
    videoUrl: 'https://www.youtube.com/shorts/AkdaB_hUSo8',
  },
  {
    id: 'squat',
    week: 1,
    name: 'Squat (Ngồi xổm)',
    subName: 'Bodyweight Squat',
    target: 'Đùi, mông, cơ lưng dưới',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 12,         // 30s / 2.5s = 12 reps — hợp lý
    rest: 15,
    guide: 'Đứng thẳng, hai chân rộng bằng vai. Hạ thấp người xuống như ngồi ghế, giữ lưng thẳng. Đẩy mông ra sau, đầu gối không vượt quá mũi chân.',
    type: 'squat',
    svg: 'squat',
    category: 'Chân & Mông',
    videoUrl: 'https://youtu.be/67snIWENTyI',
  },
  {
    id: 'glute-bridge',
    week: 1,
    name: 'Nâng mông',
    subName: 'Glute Bridge',
    target: 'Mông, cơ lưng dưới, cơ bụng',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 12,         // 2 reps → 12 reps
    rest: 15,
    guide: 'Nằm ngửa, co gối, hai chân đặt sát sàn. Nâng hông lên cao, siết mông và giữ vài giây, rồi hạ xuống.',
    type: 'glute-bridge',
    svg: 'glute-bridge',
    category: 'Chân & Mông',
    videoUrl: 'https://youtu.be/6LThpnVWas0',
  },

  // ============================================================
  // TUẦN 2 — CORE SÂU & LƯNG
  // Tổng thời gian ước tính: ~6 phút
  // ============================================================
  {
    id: 'supine-cycling',
    week: 2,
    name: 'Đạp xe nằm ngửa',
    subName: 'Supine Cycling',
    target: 'Cơ bụng dưới & Cơ đùi trước',
    mode: 'time',
    duration: 30,
    sets: 2,
    reps: null,
    rest: 15,
    guide: 'Nằm ngửa, hai tay thả lỏng lót dưới hông để đỡ lưng. Nâng chân và xoay tròn khớp gối theo chiều tiến về phía trước giống như đạp bàn đạp.',
    type: 'supine',
    svg: 'supine',
    category: 'Bụng',
    videoUrl: 'https://www.youtube.com/shorts/diSjpgTKu8Y',
  },
  {
    id: 'reverse-cycling',
    week: 2,
    name: 'Đạp xe ngược',
    subName: 'Reverse Bicycle',
    target: 'Tập trung chuyên sâu Bụng dưới',
    mode: 'time',
    duration: 30,
    sets: 2,
    reps: null,
    rest: 15,
    guide: 'Giữ tư thế nằm ngửa, thực hiện động tác đạp chân xoay tròn theo chiều ngược lại (từ dưới kéo ngược lên trên) để kích hoạt cơ bụng dưới.',
    type: 'reverse',
    svg: 'reverse',
    category: 'Bụng',
    videoUrl: 'https://www.youtube.com/shorts/Qmu3GFm0veE',
  },
  {
    id: 'dead-bug',
    week: 2,
    name: 'Bọ chết',
    subName: 'Dead Bug',
    target: 'Cơ bụng sâu, kiểm soát xương chậu, phối hợp tay chân',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 6,          // 8 → 6, mỗi rep = 1 lần đổi bên
    rest: 15,
    guide: 'Nằm ngửa, tay và chân giơ thẳng lên. Duỗi chân phải và tay trái ra xa, giữ vài giây rồi trở về. Đổi bên. Giữ lưng áp sát sàn suốt quá trình.',
    type: 'deadbug',
    svg: 'deadbug',
    category: 'Bụng',
    videoUrl: 'https://www.youtube.com/shorts/g_BYB0R-4Ws',
  },
  {
    id: 'side-plank',
    week: 2,
    name: 'Plank nghiêng',
    subName: 'Side Plank',
    target: 'Bụng chéo, cơ ổn định hông, vai',
    mode: 'time',
    duration: 20,     // 30s → 20s mỗi bên (đổi bên = 1 set)
    sets: 2,          // 2 sets = mỗi bên 1 lần
    reps: null,
    rest: 20,
    guide: 'Nằm nghiêng, chống khuỷu tay xuống sàn dưới vai. Nâng hông lên cao, cơ thể tạo đường thẳng từ đầu đến chân. Giữ 20 giây, đổi bên. Siết bụng chéo liên tục.',
    type: 'plank',
    svg: 'side-plank',
    category: 'Bụng',
    videoUrl: 'https://www.youtube.com/shorts/Ye7G1wQCMgk',
  },
  {
    id: 'bird-dog',
    week: 2,
    name: 'Chim chó',
    subName: 'Bird Dog',
    target: 'Core sâu, cơ dựng sống, mông, khả năng phối hợp',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 6,          // 8 → 6, mỗi rep giữ 2-3s = ~5s/rep
    rest: 15,
    guide: 'Tư thế chống bốn chân, lưng thẳng. Duỗi thẳng tay phải về trước và chân trái về sau cùng lúc. Giữ 2-3 giây, trở về, đổi bên. Không cong lưng hay xoay hông.',
    type: 'birddog',
    svg: 'birddog',
    category: 'Lưng & Cột sống',
    videoUrl: 'https://www.youtube.com/shorts/wiFNA3sqjCA',
  },

  // ============================================================
  // TUẦN 3 — THÂN TRÊN & LINH HOẠT
  // Tổng thời gian ước tính: ~6 phút
  // ============================================================
  {
    id: 'push-up',
    week: 3,
    name: 'Chống đẩy',
    subName: 'Push-up',
    target: 'Ngực, vai trước, tay sau, core',
    mode: 'reps',
    duration: 30,     // 45 → 30, vì 45s với push-up là quá dài cho người mới
    sets: 2,
    reps: 10,         // 8 → 10, vì duration giảm còn 30s (~3s/rep)
    rest: 20,
    guide: 'Tư thế plank cao, hai tay rộng bằng vai, ngón tay hướng về trước. Hạ ngực xuống gần sàn, khuỷu tay hướng 45 độ so với thân. Đẩy người lên, siết core suốt quá trình. Biến thể: Wall Push-up (dễ) → Knee Push-up (trung bình) → Standard Push-up (khó).',
    type: 'plank',
    svg: 'pushup',
    category: 'Thân trên',
    videoUrl: 'https://www.youtube.com/shorts/IODxDxX7oi4',
  },
  {
    id: 'prone-ytw',
    week: 3,
    name: 'Nâng tay chữ Y-T-W',
    subName: 'Prone Y-T-W Raises',
    target: 'Lưng trên, vai sau, cơ quanh bả vai',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 6,          // mỗi rep = 1 lần đủ Y-T-W (3 tư thế × 2s = 6s/rep)
    rest: 15,
    guide: 'Nằm sấp, trán chạm sàn nhẹ. Lần lượt nâng tay tạo hình chữ Y (tay chếch lên), T (tay ngang), W (khuỷu gập sát thân). Giữ mỗi tư thế 2 giây, không dùng quán tính.',
    type: 'birddog',
    svg: 'prone-ytw',
    category: 'Lưng & Vai',
    videoUrl: 'https://www.youtube.com/shorts/B8poI37brTM',
  },
  {
    id: 'swimming',
    week: 3,
    name: 'Bơi (Pilates)',
    subName: 'Swimming',
    target: 'Toàn bộ cơ lưng, cơ dựng sống, cơ mông',
    mode: 'time',
    duration: 30,     // 30s đếm giây hợp lý hơn là 10 reps
    sets: 2,
    reps: null,
    rest: 15,
    guide: 'Nằm sấp, tay duỗi trước, chân duỗi sau. Nâng tay phải và chân trái lên, sau đó đổi bên liên tục như đang bơi. Giữ bụng siết, cổ thẳng theo cột sống.',
    type: 'birddog',
    svg: 'swimming',
    category: 'Lưng & Cột sống',
    videoUrl: 'https://www.youtube.com/shorts/ihgt3JL04Uo',
  },
  {
    id: 'spine-stretch-forward',
    week: 3,
    name: 'Duỗi cột sống về trước',
    subName: 'Spine Stretch Forward',
    target: 'Cột sống, cơ bụng sâu, cơ lưng dưới',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 5,          // 6 → 5, vì mỗi rep giữ 3-5s + cuộn người ~2s = ~5-6s/rep
    rest: 15,
    guide: 'Ngồi thẳng, hai chân duỗi rộng bằng vai, hai tay đưa ngang. Hít vào kéo dài cột sống lên cao, thở ra cuộn người về trước từng đốt sống. Giữ 3–5 giây rồi cuộn trở lại.',
    type: 'catcow',
    svg: 'spine-stretch',
    category: 'Lưng & Cột sống',
    videoUrl: 'https://www.youtube.com/shorts/ELz7lUw7RJ8',
  },
  {
    id: 'roll-down',
    week: 3,
    name: 'Cuộn cột sống',
    subName: 'Roll Down',
    target: 'Cột sống, cơ bụng sâu, cơ lưng dưới',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 5,          // 6 → 5, mỗi rep ~5-6s (xuống + lên)
    rest: 15,
    guide: 'Đứng thẳng, hai chân rộng bằng hông, đầu gối hơi mềm. Từ từ cuộn người xuống từng đốt sống từ cổ đến thắt lưng. Cuộn trở lại từ đốt sống dưới cùng lên trên. Hít thở đều.',
    type: 'standing',
    svg: 'roll-down',
    category: 'Lưng & Cột sống',
    videoUrl: 'https://www.youtube.com/shorts/x3bIVChbEYk',
  },

  // ============================================================
  // TUẦN 4 — TOÀN THÂN & SỨC MẠNH
  // Tổng thời gian ước tính: ~7 phút
  // ============================================================
  {
    id: 'mountain-climbers',
    week: 4,
    name: 'Leo núi tại chỗ',
    subName: 'Mountain Climbers',
    target: 'Tim mạch, Vai, Bụng & Toàn thân',
    mode: 'time',
    duration: 30,
    sets: 3,          // 2 → 3, vì đây là cardio chính của tuần
    reps: null,
    rest: 20,
    guide: 'Tư thế chống đẩy cao. Kéo lần lượt từng đầu gối về phía ngực càng nhanh càng tốt. Giữ lưng thẳng, không võng hông.',
    type: 'climber',
    svg: 'climber',
    category: 'Toàn thân',
    videoUrl: 'https://youtu.be/6wh2s_ZZxCI',
  },
  {
    id: 'standing-crunch',
    week: 4,
    name: 'Đứng kéo gối chéo',
    subName: 'Standing Cross Crunches',
    target: 'Cơ bụng chéo & Khớp hông',
    mode: 'time',
    duration: 30,     // 45 → 30 cho phù hợp với 2 sets
    sets: 2,
    reps: null,
    rest: 15,
    guide: 'Đứng thẳng, tay sau đầu. Co gối trái lên cao sang bên phải, đồng thời gập thân người để khuỷu tay phải tiến gần gối trái. Đổi bên.',
    type: 'standing',
    svg: 'standing',
    category: 'Toàn thân',
    videoUrl: 'https://www.youtube.com/watch?v=1BT7az9xvIU',
  },
  {
    id: 'reverse-lunge',
    week: 4,
    name: 'Chùng chân về sau',
    subName: 'Reverse Lunge',
    target: 'Đùi trước, đùi sau, mông, thăng bằng',
    mode: 'reps',
    duration: 30,     // 45 → 30
    sets: 2,
    reps: 8,          // 10 → 8, vì mỗi rep = 1 lần mỗi bên, ~3.5s/rep
    rest: 20,
    guide: 'Đứng thẳng, hai tay chống hông. Bước chân phải về sau, hạ gối phải gần sàn, gối trái không vượt mũi chân. Đẩy người về tư thế đứng, đổi bên. Giữ thân trên thẳng đứng.',
    type: 'squat',
    svg: 'reverse-lunge',
    category: 'Chân & Mông',
    videoUrl: 'https://www.youtube.com/shorts/xrPteyQLGAo',
  },
  {
    id: 'calf-raise',
    week: 4,
    name: 'Nâng bắp chân',
    subName: 'Calf Raise',
    target: 'Bắp chân, cổ chân',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 12,         // 15 → 12, mỗi rep ~2.5s (lên 1s + giữ 1s + xuống 1s)
    rest: 15,
    guide: 'Đứng thẳng, hai chân rộng bằng hông, có thể bám tường để giữ thăng bằng. Nhón gót lên cao hết mức, giữ 1 giây, hạ xuống chậm. Không dùng đà.',
    type: 'squat',
    svg: 'calf-raise',
    category: 'Chân & Mông',
    videoUrl: 'https://www.youtube.com/shorts/-M4-G8p8fmc',
  },
  {
    id: 'good-morning',
    week: 4,
    name: 'Cúi gập hông',
    subName: 'Bodyweight Good Morning',
    target: 'Đùi sau, mông, cơ lưng',
    mode: 'reps',
    duration: 30,
    sets: 2,
    reps: 10,         // giữ nguyên, mỗi rep ~3s hợp lý
    rest: 15,
    guide: 'Đứng thẳng, hai tay sau đầu hoặc khoanh trước ngực. Đẩy hông ra sau, gập người về trước từ khớp hông (không cong lưng). Xuống đến khi thân song song với sàn, dùng cơ mông - đùi sau để đứng lên.',
    type: 'squat',
    svg: 'good-morning',
    category: 'Chân & Mông',
    videoUrl: 'https://www.youtube.com/shorts/IuLhrAmO2Hs',
  },
];

// ============ PHÂN NHÓM THEO TUẦN ============
export const weekLabels = {
  1: 'Nền tảng',
  2: 'Core sâu & Lưng',
  3: 'Thân trên & Linh hoạt',
  4: 'Toàn thân & Sức mạnh',
};

export const exerciseCategories = [
  'Bụng',
  'Lưng & Cột sống',
  'Lưng & Vai',
  'Thân trên',
  'Chân & Mông',
  'Toàn thân',
];
