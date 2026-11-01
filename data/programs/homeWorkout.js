import { exercises, weekLabels } from '../exercises';

/**
 * Adapter mỏng: biến mảng exercises hiện có thành một "Program".
 * Phase sau có thể chuyển hẳn dữ liệu vào đây, khi đó exercises.js chỉ còn
 * nhiệm vụ re-export để không gãy import cũ.
 */
export const homeWorkoutProgram = {
  id: 'home-workout',
  title: 'Home Workout',
  subtitle: 'Lộ trình 4 tuần toàn thân',
  accent: 'emerald',
  groupBy: 'week',
  groups: Object.entries(weekLabels).map(([id, label]) => ({
    id,
    label: `Tuần ${id}: ${label}`,
  })),
  items: exercises.map((exercise) => ({
    ...exercise,
    groupId: String(exercise.week),
  })),
};
