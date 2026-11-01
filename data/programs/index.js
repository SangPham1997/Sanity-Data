import { homeWorkoutProgram } from './homeWorkout';
import { spineBarProgram } from './spineBar';

export const programs = {
  [homeWorkoutProgram.id]: homeWorkoutProgram,
  [spineBarProgram.id]: spineBarProgram,
};

export const getProgram = (id) => programs[id] ?? null;
