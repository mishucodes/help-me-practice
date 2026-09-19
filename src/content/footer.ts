//About Brand:
import {brandLogoSquareSolid, brandname, brandTagline, githubProfileLink, linkedinProfileLink, personalWebsiteLink, technicalBlogLink, twitterProfileLink} from "#/config/site";
//Icons:
import type {IconType} from "react-icons";
import {SiGithub} from "react-icons/si";
import {FaLinkedin, FaXTwitter} from "react-icons/fa6";
import {HiCodeBracket, HiHome} from "react-icons/hi2";
//Routes:
import type {FileRouteTypes} from "#/routeTree.gen";


//AboutBrandAndOuterLinks:
export const brandLogo = brandLogoSquareSolid;
export const brandLogoAlt = "brand logo";
export const footerHeading = brandname;
export const footerSubheading = brandTagline;

export type SocialMediaLinks = {id: number, link: string, Icon: IconType}[];
export const socialMediaLinks: SocialMediaLinks =
    [
        {id: 1, link: githubProfileLink, Icon: SiGithub},
        {id: 2, link: personalWebsiteLink, Icon: HiHome},
        {id: 3, link: technicalBlogLink, Icon: HiCodeBracket},
        {id: 4, link: linkedinProfileLink, Icon: FaLinkedin},
        {id: 5, link: twitterProfileLink, Icon: FaXTwitter},
    ];

//Internal Links:
export type AllInternalLinks =
    {
        id: number,
        groupName: string,
        links: {id: number, name: string, link: FileRouteTypes["to"]}[]
    }[];
export const allInternalLinks: AllInternalLinks =
    [
        {
            id: 1,
            groupName: "Get Started",
            links:
                [
                    {id: 1, name: "Home", link: "/"},
                ]
        }
    ];
