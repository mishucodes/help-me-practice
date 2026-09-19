import {Link} from "@tanstack/react-router";
//Content:
import {brandLogo, brandLogoAlt, footerHeading, footerSubheading, socialMediaLinks} from "#/content/footer";

export function AboutBrandAndOuterLinks()
{
    return(
        <div className="flex flex-col gap-4">
            <div className="flex gap-5 justify-start items-end">
                <img src={brandLogo} alt={brandLogoAlt} className="h-15 w-15 md:h-20 md:w-20" />
                <div className="flex flex-col gap-1">
                    <Link to="/" className="font-bold text-2xl md:text-3xl tracking-tight">{footerHeading}</Link>
                    <ul className="flex flex-wrap gap-2">
                        {
                            socialMediaLinks.map(({id, link, Icon}) =>
                                <li key={id}>
                                    <a href={link}>
                                        <Icon className="h-8 w-8"/>
                                    </a>
                                </li>)
                        }
                    </ul>
                </div>
            </div>
            <p className="text-sm opacity-50">{footerSubheading}</p>
        </div>
    )
}