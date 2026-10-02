import type {Question} from '#/types/exam';

const examLoaders = import.meta.glob<Question[]>('/src/data/exams/*/*/*.json', {import: 'default'});

export async function getExamJSON(category: string, exam: string, year: string): Promise<Question[] | undefined>
{
    const loadExam = examLoaders[`/src/data/exams/${category}/${exam}/${year}.json`];
    if (!loadExam) return undefined;
    return loadExam();
}