import type { IconType } from "react-icons";
import {FaBriefcaseMedical, FaBuilding, FaCode, FaGavel, FaHandshake} from "react-icons/fa6";

export type ExamCategories = "law" | "engineering" | "medical" | "management" | "government";
export interface ExamsSupported
    {
        category: ExamCategories,
        namesAndYearsOfExams:{name: string, years: number[]}[],
        Icon: IconType,
        bgTheme: string
    };

export const examsSupported: ExamsSupported[] =
    [
        {
            category: "law",
            namesAndYearsOfExams:
                [
                    {name: "clat-ug", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "ailet-ug", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "lsat", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "clat-pg", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "aibe", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                ],
            Icon: FaGavel,
            bgTheme: "bg-slate-500/10"
        },
        {
            category: "engineering",
            namesAndYearsOfExams:
                [
                    {name: "jee-ug", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "jee-pg", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                ],
            Icon: FaCode,
            bgTheme: "bg-green-500/10"
        },
        {
            category: "medical",
            namesAndYearsOfExams:
                [
                    {name: "neet-ug", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "neet-pg", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                ],
            Icon: FaBriefcaseMedical,
            bgTheme: "bg-red-500/10"
        },
        {
            category: "management",
            namesAndYearsOfExams:
                [
                    {name: "cat", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "xat", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "gmat", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                ],
            Icon: FaHandshake,
            bgTheme: "bg-sky-500/10"
        },
        {
            category: "government",
            namesAndYearsOfExams:
                [
                    {name: "upsc-cse", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "cgl", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "psc", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "ib", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                    {name: "judiciary", years: [2020, 2021, 2022, 2023, 2024, 2025]},
                ],
            Icon: FaBuilding,
            bgTheme: "bg-orange-500/10"
        },
    ];