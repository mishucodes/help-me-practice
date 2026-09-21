import type { IconType } from "react-icons";
import { FaBriefcaseMedical, FaBuilding, FaCode, FaGavel, FaHandshake } from "react-icons/fa6";

export const heading = "Exams you can practice right now";
export const subheading = "We're starting with the exams students ask for most. More are added regularly — and you can request one below.";

export type Exams = {id: number, category: string, Icon: IconType, bgc: string, list: string[]};
export const examsSupported: Exams[] =
    [
        {
            id: 1,
            category: "Law Exams",
            Icon: FaGavel,
            bgc: "bg-black/10",
            //Need to update these to Links:
            list: ["CLAT UG", "CLAT PG", "AILET UG", "LSAT", "AIBE"]
        },
        {
            id: 2,
            category: "Engineering Exams",
            Icon: FaCode,
            bgc: "bg-emerald-500/10",
            list: ["JEE UG", "JEE PG"]
        },
        {
            id: 3,
            category: "Medical Exams",
            Icon: FaBriefcaseMedical,
            bgc: "bg-red-500/10",
            list: ["NEET UG", "NEET PG"]
        },
        {
            id: 4,
            category: "Management Exams",
            Icon: FaHandshake,
            bgc: "bg-sky-500/10",
            list: ["CAT", "XAT", "GMAT"]
        },
        {
            id: 5,
            category: "Government Exams",
            Icon: FaBuilding,
            bgc: "bg-orange-500/10",
            list: ["UPSC", "CGL", "IB", "PSC", "Judiciary"]
        },
    ];