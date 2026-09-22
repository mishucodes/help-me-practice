import type {ExamCategories} from "#/data/examsSupported";
import {Button} from "@/components/ui/button";
import {Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Link} from "@tanstack/react-router";

type YearPickerForExamProps = {examCategory: ExamCategories, examName: string, yearsSupported: number[]};
export function YearPickerForExam({examCategory, examName, yearsSupported}: YearPickerForExamProps)
{
    return (
    <Dialog>
        <DialogTrigger render={<Button variant="outline">{examName.toUpperCase()}</Button>} />
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Please Select a Year</DialogTitle>
                <DialogDescription>Select a year the {examName.toUpperCase()} exam!</DialogDescription>
            </DialogHeader>
            <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 flex flex-col gap-2">
                {
                    //Need to update the link to one with proper query parameters...
                    yearsSupported.map((year) =>
                        <Link key={year} to="/" className="text-center bg-accent/25 py-2">
                            {examName.toUpperCase()} - {year}
                        </Link>)
                }
            </div>
            <DialogFooter>
                <DialogClose render={<Button variant="outline">Close</Button>} />
            </DialogFooter>
        </DialogContent>
    </Dialog>);
}