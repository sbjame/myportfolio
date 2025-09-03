import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAxios, SiNodedotjs, SiMysql, SiMongodb, SiNextdotjs, SiRender, SiVercel} from "react-icons/si"

const skillsLogo = [
    {
        logo: SiHtml5,
        textColor: "text-orange-500",
        href: "https://html.spec.whatwg.org/multipage/?utm_source=chatgpt.com"
    },
    {
        logo: SiCss3,
        textColor: "text-blue-600",
        href: "https://www.w3.org/Style/CSS/specs.en.html?utm_source=chatgpt.com"
    },
    {
        logo: SiReact,
        textColor: "text-sky-500",
        href: "https://react.dev"
    },
    {
        logo: SiNextdotjs,
        textColor: "text-black",
        href: "https://nextjs.org"
    },
    {
        logo: SiJavascript,
        textColor: "text-yellow-500",
        href: "https://tc39.es/ecma262/?utm_source=chatgpt.com#sec-intro"
    },
    {
        logo: SiTypescript,
        textColor: "text-blue-500",
        href: "https://www.typescriptlang.org/?utm_source=chatgpt.com"
    },
    {
        logo: SiFigma,
        textColor: "text-black",
        href: "https://www.figma.com"
    },
    {
        logo: SiAdobephotoshop,
        textColor: "text-blue-800",
        href: "https://www.adobe.com/th_th/products/photoshop.html"
    },
    {
        logo: SiAdobeillustrator,
        textColor: "text-amber-600",
        href: "https://www.adobe.com/th_th/products/illustrator.html"
    },
    {
        logo: SiAxios,
        textColor: "text-purple-500",
        href: "https://axios-http.com"
    },
    {
        logo: SiNodedotjs,
        textColor: "text-lime-500",
        href: "https://nodejs.org/en"
    },
    {
        logo: SiMysql,
        textColor: "text-blue-500",
        href: "https://www.mysql.com"
    },
    {
        logo: SiMongodb,
        textColor: "text-lime-500",
        href: "https://www.mongodb.com"
    },
    {
        logo: SiRender,
        textColor: "text-white",
        href: "https://render.com"
    },
    {
        logo: SiVercel,
        textColor: "text-vercel",
        href: "https://vercel.com"
    }
]

const Skills = () => {
    return (
        <div className="space-y-4 mt-4">
            <div className="text-xl font-light drop-shadow-sm drop-shadow-black">
                <h1>Skills</h1>
            </div>
            <div className="flex flex-wrap text-3xl md:text-5xl gap-4 drop-shadow-sm drop-shadow-black/40">
                {skillsLogo.map((skill, index) => {
                    const IconComponent = skill.logo;
                    return (
                    <div key={index} className={`${skill.textColor} hover:scale-120 duration-300 h-full`}>
                        <a href={skill.href} className="cursor-none"><IconComponent/></a>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills