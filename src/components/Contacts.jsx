import { PiPhone } from "react-icons/pi";
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { FaLine } from "react-icons/fa";

const Contacts = () => {
    return (
        <div className="service-card w-[84vw] flex justify-center gap-4 md:gap-8 p-4 md:p8 text-2xl md:text-6xl drop-shadow-2xl drop-shadow-black/80">
            <a href="https://www.facebook.com/jamelnwzaa007" className="cursor-none hover:scale-110 duration-300 drop-shadow-sm drop-shadow-black/40 flex items-center justify-center">
                <SiFacebook className="text-sky-600" />
            </a>
            <a href="https://github.com/sbjame" className="cursor-none hover:scale-110 duration-300 drop-shadow-sm drop-shadow-black/40 flex justify-center items-center">
                <SiGithub className="text-black" />
            </a>
            <a href="http://www.linkedin.com/in/surawut-boonying" className="cursor-none hover:scale-110 duration-300 drop-shadow-sm drop-shadow-black/40 flex justify-center items-center">
                <SiLinkedin className="text-blue-600"/>
            </a>
            <div className="flex items-center justify-center gap-2 hover:scale-110 duration-300 drop-shadow-sm drop-shadow-black/40 text-white">
                <PiPhone className="text-green-600" />
                <FaLine className="text-green-500" />
                <span className="text-2xl md:text-4xl font-light drop-shadow-sm drop-shadow-gray-600">0926297525</span>
            </div>
        </div>
    );
}

export default Contacts;