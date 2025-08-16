import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAxios, SiNodedotjs, SiMysql, SiMongodb} from "react-icons/si"

const skillsLogo = [
    {
        logo: SiHtml5,
        textColor: "text-orange-500"
    },
    {
        logo: SiCss3,
        textColor: "text-blue-600"
    },
    {
        logo: SiReact,
        textColor: "text-sky-500"
    },
    {
        logo: SiJavascript,
        textColor: "text-yellow-500"
    },
    {
        logo: SiTypescript,
        textColor: "text-blue-500"
    },
    {
        logo: SiFigma,
        textColor: "text-black"
    },
    {
        logo: SiAdobephotoshop,
        textColor: "text-blue-900"
    },
    {
        logo: SiAdobeillustrator,
        textColor: "text-amber-600"
    },
    {
        logo: SiAxios,
        textColor: "text-purple-500"
    },
    {
        logo: SiNodedotjs,
        textColor: "text-lime-500"
    },
    {
        logo: SiMysql,
        textColor: "text-blue-500"
    },
    {
        logo: SiMongodb,
        textColor: "text-lime-500"
    },
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
                        <IconComponent/>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Skills