export const karateSessions = [
  // ============ TUẦN 1: NỀN TẢNG (KIHON) ============
  {
    id: 'kt-01',
    name: 'Nền tảng Kihon Toàn diện',
    subName: '15min Complete Kihon Class',
    target: 'Chân, hông, sự vững chãi, kỹ thuật cơ bản',
    duration: 900,
    durationDisplay: '15 phút',
    category: 'Nền tảng',
    week: 1,
    level: 'Beginner',
    type: 'karate',
    icon: 'fa-person-walking',
    equipment: 'Thảm tập',
    source: 'Karate Training',
    guide:
      'Thử thách bản thân giữ chuyển động liên tục trong 15 phút với các kỹ thuật kihon cơ bản. Có thể dùng làm bài khởi động hoặc tập độc lập.',
    exercises: [
      {
        name: 'Complete Kihon Class (Chính)',
        work: '15 phút',
        note:
          'Tập theo video, chú ý giữ trọng tâm và thực hiện đúng các kỹ thuật cơ bản được hướng dẫn.',
        videoUrl: 'https://www.youtube.com/watch?v=UDG2zjR7Bmk',
      },
    ],
  },

  {
    id: 'kt-02',
    name: 'Kỹ thuật Phối hợp (Combos)',
    subName: '15min Combo Class',
    target: 'Vai, lõi, tốc độ, phối hợp đòn',
    duration: 960,
    durationDisplay: '16 phút',
    category: 'Nền tảng',
    week: 1,
    level: 'Beginner',
    type: 'karate',
    icon: 'fa-hand-fist',
    equipment: 'Không',
    source: 'Karate Training',
    guide:
      'Bài tập 16 phút với các tổ hợp đòn thú vị. Hãy điều chỉnh và biến tấu để phù hợp với nhịp độ của bản thân.',
    exercises: [
      {
        name: 'Combo Class (Chính)',
        work: '16 phút',
        note:
          'Tập trung vào kỹ thuật Gyaku-zuki, Kizami-zuki và phối hợp xoay hông theo nhịp video.',
        videoUrl: 'https://www.youtube.com/watch?v=ZyReS5l3G5M',
      },
    ],
  },

  // ============ TUẦN 2: TẤN CÔNG & PHÒNG THỦ ============
  {
    id: 'kt-03',
    name: 'Kỹ thuật Đòn chân (Kicking)',
    subName: '15min Kicking Class',
    target: 'Đùi trước, hông, thăng bằng, lực bật',
    duration: 1140,
    durationDisplay: '19 phút',
    category: 'Kỹ thuật',
    week: 2,
    level: 'Beginner',
    type: 'karate',
    icon: 'fa-shoe-prints',
    equipment: 'Ghế/tường để giữ thăng bằng (nếu cần)',
    source: 'Karate Training',
    guide:
      '19 phút tập trung hoàn toàn vào các kỹ thuật đòn chân. Giữ thăng bằng và thu chân về vị trí cũ sau mỗi cú đá.',
    exercises: [
      {
        name: 'Kicking Class (Chính)',
        work: '19 phút',
        note:
          'Tập trung vào kỹ thuật nâng gối, thu chân và giữ thăng bằng khi thực hiện đòn đá theo hướng dẫn.',
        videoUrl: 'https://www.youtube.com/watch?v=stlo5Ao3Cq4',
      },
    ],
  },

  {
    id: 'kt-04',
    name: 'Heian Shodan (Bình an Sơ đoạn)',
    subName: 'Kata nền tảng thứ hai, xây dựng sự tự tin và kỹ thuật nâng cao hơn',
    target: 'Chuyển đổi tấn pháp, kỹ thuật chặn (Uchi Uke, Gedan Barai), đấm nghịch tay (Gyaku Zuki) và sự tập trung (Kime)',
    duration: 900,
    durationDisplay: '15 phút (Lặp lại)',
    category: 'Nhập môn',
    week: 2,
    level: 'Beginner',
    type: 'karate',
    icon: 'fa-fist-raised',
    equipment: 'Không',
    source: 'Shotokan Karate Tutorial / SKIF',
    guide:
      'Video hướng dẫn chi tiết từng động tác của Heian Shodan. Đây là kata quan trọng nhất để xây dựng nền tảng kỹ thuật Shotokan, hãy tập chậm rãi để ghi nhớ chuỗi động tác trước khi tăng tốc độ.',
    exercises: [
      {
        name: 'Heian Shodan Kata',
        work: '15 phút',
        note:
          'Chú ý kỹ thuật xoay hông khi đấm nghịch tay và sự ổn định khi chuyển đổi giữa các tấn pháp. Giữ sự tập trung cao độ tại điểm kết thúc của mỗi kỹ thuật.',
        videoUrl: 'https://www.youtube.com/watch?v=q1Rg8rUpjjw',
      },
    ],
  },

  // ============ TUẦN 3: KATA & THỂ LỰC ============
  {
    id: 'kt-05',
    name: 'Taikyoku Shodan (Cực đại Sơ đoạn)',
    subName: 'Kata nền tảng đầu tiên trong hệ thống Shotokan',
    target: 'Tấn pháp (Zenkutsu Dachi), kỹ thuật gạt xuống (Gedan Barai), đấm thẳng (Oi Zuki), nhịp điệu và hơi thở cơ bản',
    duration: 900,
    durationDisplay: '15 phút (Lặp lại)',
    category: 'Nhập môn',
    week: 3,
    level: 'Beginner',
    type: 'karate',
    icon: 'fa-shoe-prints',
    equipment: 'Không',
    source: 'Shotokan Karate Tutorial / SKIF',
    guide:
      'Video hướng dẫn chậm rãi, dễ theo dõi. Taikyoku Shodan chỉ gồm 2 động tác chính lặp lại trên một đường di chuyển (Embusen) hình chữ I. Đây là bài tập hoàn hảo để rèn luyện kỷ luật và sự ổn định.',
    exercises: [
      {
        name: 'Taikyoku Shodan Kata',
        work: '15 phút',
        note:
          'Tập trung vào việc giữ trọng tâm thấp, dứt khoát ở mỗi động tác và phối hợp nhịp thở với kỹ thuật. Hãy quay lại video của chính bạn để tự đối chiếu.',
        videoUrl: 'https://www.youtube.com/watch?v=jH6bv4GDpp0',
      },
    ],
  },

  {
    id: 'kt-06',
    name: 'Cân bằng & Sức mạnh (Balance & Strength)',
    subName: 'Balance & Strength Drill',
    target: 'Core, thăng bằng tĩnh, sức mạnh cơ bắp',
    duration: 960,
    durationDisplay: '16 phút',
    category: 'Thể lực',
    week: 3,
    level: 'Intermediate',
    type: 'karate',
    icon: 'fa-dumbbell',
    equipment: 'Thảm tập',
    source: 'Karate Training',
    guide:
      'Bài tập bổ trợ 16 phút tập trung vào khả năng giữ thăng bằng và sức mạnh cốt lõi, nền tảng cho mọi kỹ thuật Karate.',
    exercises: [
      {
        name: 'Balance & Strength Drill (Chính)',
        work: '16 phút',
        note:
          'Thực hiện chậm và kiểm soát, chú ý vào sự ổn định của trọng tâm và lực ép của cơ core.',
        videoUrl: 'https://www.youtube.com/watch?v=TuB6QWP7gLI',
      },
    ],
  },

  // ============ TUẦN 4: ỨNG DỤNG & CHIẾN ĐẤU ============
  {
    id: 'kt-07',
    name: 'Kỹ thuật Chiến đấu & Xoay hông',
    subName: 'Hip Rotation Focus',
    target: 'Phản xạ, khoảng cách (Maai), lực xoay hông',
    duration: 1080,
    durationDisplay: '18 phút',
    category: 'Tổng hợp',
    week: 4,
    level: 'Intermediate',
    type: 'karate',
    icon: 'fa-eye',
    equipment: 'Không',
    source: 'Karate Training',
    guide:
      '18 phút tập trung sâu vào kỹ thuật xoay hông, chuyển trọng tâm và trở lại tư thế phòng thủ (Kamae).',
    exercises: [
      {
        name: 'Hip Rotation Focus (Chính)',
        work: '18 phút',
        note:
          'Tập trung vào xoay hông, chuyển trọng tâm mượt mà và luôn trở về tư thế phòng thủ sau mỗi đòn.',
        videoUrl: 'https://www.youtube.com/watch?v=ZgjGqaquJ5U',
      },
    ],
  },
    // ============ TUẦN 5: KATA NÂNG CAO (HEIAN SERIES) ============
  {
    id: 'kt-08',
    name: 'Heian Nidan (Bình an Nhị đoạn)',
    subName: 'Kata thứ hai trong chuỗi Heian, giới thiệu kỹ thuật đá',
    target: 'Thăng bằng động, kỹ thuật đá trước (Mae Geri), xoay người 180 độ, sự nhanh nhẹn',
    duration: 900,
    durationDisplay: '15 phút (Lặp lại)',
    category: 'Nhập môn',
    week: 5,
    level: 'Beginner',
    type: 'karate',
    icon: 'fa-person-running',
    equipment: 'Không',
    source: 'Shotokan Karate Tutorial / SKIF',
    guide:
      'Heian Nidan yêu cầu sự kiểm soát cơ thể tốt hơn Shodan. Chú ý đặc biệt vào việc giữ thăng bằng khi thực hiện cú đá Mae Geri và khi quay người. Đừng vội vàng, hãy đảm bảo mỗi cú đá đều có lực và thu chân về nhanh chóng.',
    exercises: [
      {
        name: 'Heian Nidan Kata',
        work: '15 phút',
        note:
          'Tập trung vào sự dứt khoát của kỹ thuật Empi Uke (gạt bằng khuỷu tay) và sự ổn định khi tiếp đất sau cú đá. Hít thở sâu ở những khoảng nghỉ ngắn.',
        videoUrl: 'https://www.youtube.com/watch?v=rgs1ysn0R-0', // Link ví dụ, bạn có thể thay bằng link ưa thích
      },
    ],
  },

  {
    id: 'kt-09',
    name: 'Heian Sandan (Bình an Tam đoạn)',
    subName: 'Kata thứ ba, tập trung vào kỹ thuật Shuto (chém tay)',
    target: 'Sự linh hoạt của hông, kỹ thuật Shuto Uke (gạt bằng cạnh tay), tấn chéo (Kosa Dachi)',
    duration: 900,
    durationDisplay: '15 phút (Lặp lại)',
    category: 'Nhập môn',
    week: 5,
    level: 'Beginner',
    type: 'karate',
    icon: 'fa-hand',
    equipment: 'Không',
    source: 'Shotokan Karate Tutorial / SKIF',
    guide:
      'Bài kata này dài hơn và phức tạp hơn với nhiều chuyển động tay liên tục. Điểm nhấn là kỹ thuật Shuto Uke và sự chuyển đổi mượt mà giữa các tấn pháp. Hãy thả lỏng vai nhưng giữ chặt cổ tay khi thực hiện kỹ thuật chém.',
    exercises: [
      {
        name: 'Heian Sandan Kata',
        work: '15 phút',
        note:
          'Chú ý đến góc độ của bàn tay khi thực hiện Shuto Uke. Đảm bảo khuỷu tay không bị mở quá rộng. Giữ mắt nhìn thẳng (Enzan no Metsuke) trong suốt bài tập.',
        videoUrl: 'https://www.youtube.com/watch?v=1MrRmimBJoA', // Link ví dụ
      },
    ],
  },
];

export const karateCategories = [
  'Nền tảng',
  'Nhập môn',
  'Kỹ thuật',
  'Thể lực',
  'HIIT',
  'Nâng cao',
  'Tổng hợp',
  'Phục hồi',
];