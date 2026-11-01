/**
 * Ba buổi Kumite solo bổ sung cho MVP.
 * Không có video: người tập dùng nội dung + timeline như checklist.
 * Không hướng dẫn đối luyện có đối thủ thật khi chưa có HLV.
 */
export const kumiteSessions = [
  {
    id: 'kt-10',
    name: 'Kamae & Maai',
    subName: 'Tư thế phòng thủ và khoảng cách',
    target: 'Kamae, maai, kiểm soát trọng tâm',
    duration: 720,
    durationDisplay: '12 phút',
    category: 'Kumite',
    track: 'kumite',
    week: 1,
    order: 1,
    level: 'Beginner',
    type: 'karate',
    icon: 'fa-user-ninja',
    equipment: 'Không',
    source: 'Solo drill',
    focus: ['Kamae', 'Maai', 'Trọng tâm'],
    techniques: ['kamae', 'maai', 'zenkutsu-dachi'],
    guide:
      'Buổi làm quen với tư thế phòng thủ và khoảng cách. Tập chậm, không cần đối thủ: ' +
      'tưởng tượng một điểm trước mặt, giữ khoảng cách vừa tầm và luôn trở về kamae sau mỗi bước. ' +
      'Mục tiêu là kiểm soát trọng tâm, không phải tốc độ.',
    homework: 'Tập 3 hiệp 40 giây trước gương, chú ý tay trước không hạ thấp.',
    exercises: [
      {
        name: 'Khởi động cổ tay, vai, hông',
        work: '2 phút',
        note: 'Xoay khớp nhẹ, không giật. Đứng thẳng, thở đều.',
      },
      {
        name: 'Kamae: đổi trọng tâm trước – sau',
        work: '3 hiệp × 40s',
        note: 'Giữ một tay trước một tay sau; chuyển 60/40 rồi 40/60, không khoá gối.',
        videoUrl: 'https://www.youtube.com/watch?v=qJED51I7iTc',
      },
      {
        name: 'Maai: tiến – lùi 3 bước',
        work: '3 hiệp × 45s',
        note: 'Bước nhỏ, giữ khoảng cách với điểm tưởng tượng; luôn trở về kamae.',
      },
      {
        name: 'Phản xạ tay: gạt + đấm',
        work: '2 hiệp × 40s',
        note: 'Một tay gạt xuống, tay kia đấm thẳng; chậm và dứt khoát.',
      },
      {
        name: 'Thở & thả lỏng',
        work: '1 phút',
        note: 'Hít 4 nhịp, thở 6 nhịp; thả lỏng vai và hàm.',
      },
    ],
  },
  {
    id: 'kt-11',
    name: 'Gohon Kumite Solo',
    subName: 'Mẫu 5 bước một mình',
    target: 'Lùi – gạt – phản đòn, nhịp điệu',
    duration: 840,
    durationDisplay: '14 phút',
    category: 'Kumite',
    track: 'kumite',
    week: 2,
    order: 1,
    level: 'Intermediate',
    type: 'karate',
    icon: 'fa-people-arrows',
    equipment: 'Không',
    source: 'Solo drill',
    focus: ['Gohon kumite', 'Lùi – gạt – đấm'],
    techniques: ['kamae', 'maai', 'gyaku-zuki', 'age-uke'],
    guide:
      'Mô phỏng mẫu gohon kumite một mình: tưởng tượng đối thủ đấm tới, lùi một bước, ' +
      'gạt rồi phản đòn. Tập chậm 5 nhịp liên tục, sau đó nghỉ. Không cần đối thủ thật; ' +
      'mục tiêu là nhịp lùi – gạt – đấm và giữ kamae.',
    homework: 'Quay video 1 hiệp, xem lại xem tay gạt có qua đường giữa không.',
    exercises: [
      {
        name: 'Khởi động + kamae',
        work: '2 phút',
        note: 'Xoay vai, hông, cổ tay; đứng kamae và kiểm tra tay trước.',
      },
      {
        name: 'Mẫu 5 bước: lùi – gạt – đấm',
        work: '4 hiệp × 60s',
        note: 'Mỗi hiệp 5 nhịp: lùi, age-uke, gyaku-zuki, trở về kamae, thở.',
        videoUrl: 'https://www.youtube.com/watch?v=m3M6tdpoEUw',
      },
      {
        name: 'Đổi vai / đổi hướng',
        work: '3 hiệp × 45s',
        note: 'Đổi chân trước, giữ cùng khoảng cách; không lao người.',
      },
      {
        name: 'Chạy chậm 1 mẫu hoàn chỉnh',
        work: '2 phút',
        note: 'Không cần nhanh; ưu tiên đúng thứ tự và thăng bằng.',
      },
      {
        name: 'Thả lỏng',
        work: '1 phút',
        note: 'Thở chậm, lắc nhẹ vai và cổ tay.',
      },
    ],
  },
  {
    id: 'kt-12',
    name: 'Kihon Ippon Solo',
    subName: 'Phản xạ một đòn',
    target: 'Phản xạ, chọn đòn, giữ trục',
    duration: 900,
    durationDisplay: '15 phút',
    category: 'Kumite',
    track: 'kumite',
    week: 3,
    order: 1,
    level: 'Intermediate',
    type: 'karate',
    icon: 'fa-bolt',
    equipment: 'Không',
    source: 'Solo drill',
    focus: ['Kihon ippon', 'Phản xạ'],
    techniques: ['gyaku-zuki', 'age-uke', 'soto-uke', 'mae-geri'],
    guide:
      'Bài phản xạ một đòn: tưởng tượng ba tình huống jodan, chudan và mae-geri. ' +
      'Với mỗi tình huống, chọn một cách gạt và một đòn phản. Tập chậm, dứt khoát, ' +
      'sau mỗi đòn trở về kamae. Đây là drill solo, không phải đối luyện thật.',
    homework: 'Chọn 1 tình huống khó nhất, tập 10 lần chậm trước gương.',
    exercises: [
      {
        name: 'Khởi động toàn thân',
        work: '2 phút',
        note: 'Cổ tay, vai, hông, gối, cổ chân; tăng dần biên độ.',
      },
      {
        name: 'Phản xạ jodan: age-uke + gyaku-zuki',
        work: '3 hiệp × 60s',
        note: 'Lùi nhẹ, gạt lên, đấm nghịch tay; giữ trục thân người.',
        videoUrl: 'https://www.youtube.com/watch?v=eyQTvH7XGYs',
      },
      {
        name: 'Phản xạ chudan: soto-uke + gyaku-zuki',
        work: '3 hiệp × 60s',
        note: 'Gạt ngoài rồi đấm; khuỷu gần thân, không mở vai.',
      },
      {
        name: 'Phản xạ mae-geri: lùi + gạt + đấm',
        work: '3 hiệp × 45s',
        note: 'Lùi đủ xa, gạt xuống, phản đòn; không đứng quá gần.',
      },
      {
        name: 'Thả lỏng & ghi chú',
        work: '2 phút',
        note: 'Thở 4–6, ghi lại tình huống nào còn lúng túng.',
      },
    ],
  },
];
