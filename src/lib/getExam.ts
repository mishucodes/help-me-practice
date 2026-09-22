import {notFound} from '@tanstack/react-router';

const examFiles = import.meta.glob<unknown>('/src/data/exams/*/*/*.json', {import: 'default'});

type ExamAddress = {category: string, exam: string, year: number};
export async function getExam({category, exam, year}: ExamAddress)
{
    const loadExam = examFiles[`/src/data/exams/${category}/${exam}/${year}.json`];
    if(!loadExam) throw notFound();
    return loadExam();
}