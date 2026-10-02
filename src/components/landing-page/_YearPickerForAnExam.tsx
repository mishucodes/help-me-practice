import type {ExamCategories} from "#/data/supportedExams";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Link} from "@tanstack/react-router";

type YearPickerForAnExamProps = {examCategory: ExamCategories, examName: string, yearsSupported: number[]};
export function YearPickerForAnExam({examCategory, examName, yearsSupported}: YearPickerForAnExamProps)
{
    return (
    <Dialog>
        <DialogTrigger render={<Button variant="default" className={"opacity-85"}>{examName.toUpperCase()}</Button>} />
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Please Select a Year</DialogTitle>
                <DialogDescription>Select a year the {examName.toUpperCase()} exam!</DialogDescription>
            </DialogHeader>
            <ol className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 flex flex-col gap-2">
                {
                    yearsSupported.map((year) =>
                        <li key={year} className="flex justify-center items-center">
                            <Link
                                to="/exams/$category/$exam/$year"
                                params={{category: examCategory, exam: examName, year: String(year)}}
                                className="bg-input w-full py-2 text-center"
                            >
                                {examName.toUpperCase()} - {year}
                            </Link>
                        </li>)
                }
            </ol>
            <DialogFooter>
                <DialogClose render={<Button variant="outline">Close</Button>} />
            </DialogFooter>
        </DialogContent>
    </Dialog>);
}