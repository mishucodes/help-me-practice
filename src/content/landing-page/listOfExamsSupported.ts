import type { FileRouteTypes } from "#/routeTree.gen";
import type { IconType } from "react-icons";
import { FaBriefcaseMedical, FaBuilding, FaCode, FaGavel, FaHandshake } from "react-icons/fa6";

export const heading = "Exams you can practice right now";
export const subheading = "We're starting with the exams students ask for most. More are added regularly — and you can request one below.";

export type Exam =
    {
        id: number,
        category: string,
        Icon: IconType,
        bgc: string,
        list:
            {
                id: number,
                name: string,
                link: FileRouteTypes["to"],
                param: string
            }[]
    };
export const examsSupported: Exam[] =
    [
        {
            id: 1,
            category: "Law Exams",
            Icon: FaGavel,
            bgc: "bg-black/10",
            list:
                [
                    {id: 1, name: "CLAT UG", link: "/exam/$examName", param: "clat-ug"},
                    {id: 2, name: "CLAT PG", link: "/exam/$examName", param: "clat-pg"},
                    {id: 3, name: "AILET UG", link: "/exam/$examName", param: "ailet-ug"},
                    {id: 4, name: "LSAT", link: "/exam/$examName", param: "lsat"},
                    {id: 5, name: "AIBE", link: "/exam/$examName", param: "aibe"},
                ]
        },
        {
            id: 2,
            category: "Engineering Exams",
            Icon: FaCode,
            bgc: "bg-emerald-500/10",
            list:
                [
                    {id: 1, name: "JEE UG", link: "/exam/$examName", param: "jee-ug"},
                    {id: 2, name: "JEE PG", link: "/exam/$examName", param: "jee-pg"},
                ]
        },
        {
            id: 3,
            category: "Medical Exams",
            Icon: FaBriefcaseMedical,
            bgc: "bg-red-500/10",
            list:
                [
                    {id: 1, name: "NEET UG", link: "/exam/$examName", param: "neet-ug"},
                    {id: 2, name: "NEET PG", link: "/exam/$examName", param: "neet-pg"},
                ]
        },
        {
            id: 4,
            category: "Management Exams",
            Icon: FaHandshake,
            bgc: "bg-sky-500/10",
            list:
                [
                    {id: 1, name: "CAT", link: "/exam/$examName", param: "cat"},
                    {id: 2, name: "XAT", link: "/exam/$examName", param: "xat"},
                    {id: 3, name: "GMAT", link: "/exam/$examName", param: "gmat"},
                ]
        },
        {
            id: 5,
            category: "Government Exams",
            Icon: FaBuilding,
            bgc: "bg-orange-500/10",
            list:
                [
                    {id: 1, name: "UPSC CSE", link: "/exam/$examName", param: "upsc-cse"},
                    {id: 2, name: "CGL", link: "/exam/$examName", param: "cgl"},
                    {id: 3, name: "IB", link: "/exam/$examName", param: "ib"},
                    {id: 4, name: "PSC", link: "/exam/$examName", param: "psc"},
                    {id: 5, name: "Judiciary", link: "/exam/$examName", param: "judiciary"},
                ]
        },
    ];