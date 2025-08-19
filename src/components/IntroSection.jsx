import Skills from './Skills';
import meImg from '/About/me.jpg';

const IntroSection = () => {
    return (
        <div className='w-[84vw] space-y-8 md:space-y-20'>
            <div className="about-card p-4 md:p-8 flex flex-col xl:flex-row gap-4 md:gap-16 justify-between drop-shadow-2xl drop-shadow-black/80">
                <img className="w-full object-cover rounded-2xl h-auto xl:w-[40vw]" src={meImg} alt="My Image" />
                <div className="flex flex-col gap-0 md:gap-4 p-0 md:p-8 text-white">
                    <h1 className="text-4xl md:text-6xl font-medium drop-shadow-sm drop-shadow-black/50">About Me</h1>
                    <h2 className="text-base md:text-xl font-light text-white drop-shadow-sm drop-shadow-black">Frontend Developer & UX/UI Design</h2>
                    <div className="mt-4 text-base md:text-xl font-light text-white drop-shadow-xs drop-shadow-black/80">I am <span className="font-semibold">Surawut Boonying</span> (Jame) I'm Looking for Software Developer In <span className='font-semibold'>BKK</span>. Mechatronics Engineering graduate with strong skills in both software and hardware
                        development. Experienced in embedded systems (STM32, C/C++), frontend
                        development (React, Next.js), and API integration. Passionate about building efficient
                        solutions that connect software with real-world devices.
                        I have knowledge in Python, Html, Css, JavaScript, ReactJs, Tailwindcss, Next.js, C/C++Arduino and Intermedaite in Mechanical Skate and Design(Solidworks Intermediate, AutoCad Imtermediate)
                    </div>
                    <div>
                        <Skills />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl font-light drop-shadow-sm drop-shadow-black'>Google Drive</h3>
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F022%2F613%2F023%2Fnon_2x%2Fgoogle-drive-icon-logo-symbol-free-png.png&f=1&nofb=1&ipt=b0e39044f999c57fbdbeaffb1fea54f182b40abf0cdfaabc5ab1f813418673c1" alt="Google Drive logo" className='w-10 md:w-15 h-auto drop-shadow-sm drop-shadow-black/40'/>
                    </div>
                </div>
            </div>

            <div className='about-card p-4 md:p-8 flex flex-col gap-8 justify-between items-center text-base text-white drop-shadow-2xl drop-shadow-black/80'>
                <h1 className='text-3xl md:text-6xl font-medium drop-shadow-sm drop-shadow-gray-600/80'>Work Experience</h1>
                <div className='w-full drop-shadow-sm drop-shadow-gray-600/80'>
                    <h2 className='text-lg md:text-4xl'>Product Developer / Software Developer, Wyke and Partner</h2>
                    <h3 className='text-sm md:text-base'>Dec 2023 - Mar 2024 Bangkok, Thailand</h3>
                    <ul className='text-sm md:text-base list-disc px-6'>
                        <li>Designed and developed mechanical components to integrate seamlessly with
                            sensors, ensuring accurate data collection and reliable operation and improve
                            performance.
                        </li>
                        <li>
                            Improved PCB layouts and sensor configurations to fit mechanical designs and enhance product compatibility.
                        </li>
                        <li>
                            Conducted testing and troubleshooting to ensure stable sensor performance under real-world conditions.
                        </li>
                        <li>
                            Developed and maintained frontend user interfaces using modern web technologies (e.g., HTML, CSS, JavaScript, React).
                        </li>
                    </ul>
                </div>
                <div className='w-full drop-shadow-sm drop-shadow-gray-600/80'>
                    <h2 className='text-lg md:text-4xl'>Product Developer / Software Developer, Wyke and Partner</h2>
                    <h3 className='text-sm md:text-base'>Oct 2024 - May 2025 Bangkok, Thailand</h3>
                    <ul className='text-sm md:text-base list-disc px-6'>
                        <li>Designed and developed mechanical components to integrate seamlessly with
                            sensors, ensuring accurate data collection and reliable operation and improve
                            performance.
                        </li>
                        <li>
                            Improved PCB layouts and sensor configurations to fit mechanical designs and enhance product compatibility.
                        </li>
                        <li>
                            Conducted testing and troubleshooting to ensure stable sensor performance under real-world conditions.
                        </li>
                        <li>
                            Developed and maintained frontend user interfaces using modern web technologies (e.g., HTML, CSS, JavaScript, React).
                        </li>
                    </ul>
                </div>
                <h1 className='text-3xl md:text-6xl font-medium drop-shadow-sm drop-shadow-gray-600/80'>Education</h1>
                <div className='w-full drop-shadow-sm drop-shadow-gray-600/80'>
                    <h2 className='text-lg md:text-4xl'>King Mongkut’s University of Technology North Bangkok</h2>
                    <h3 className='text-sm md:text-base'>2017 - 2020</h3>
                    <span className='text-sm md:text-base'>Certificate in Educational Program, Pre-Electrical Engineering</span>
                </div>
                <div className='w-full drop-shadow-sm drop-shadow-gray-600/80'>
                    <h2 className='text-lg md:text-4xl'>King Mongkut’s University of Technology North Bangkok</h2>
                    <div className='flex gap-2 text-sm md:text-base'>
                        <h3>2020 - 2025</h3>
                        <h3>|</h3>
                        <h3>GPAX: 2.82</h3>
                    </div>
                    <span className='text-sm md:text-base'> Bachelor of Engineering Program in Industrial Engineering Technology, Mechatronic Engineering</span>
                </div>
                <h1 className='text-3xl md:text-6xl font-medium drop-shadow-sm drop-shadow-gray-600/80'>Unisersity Project</h1>
                <div className='w-full drop-shadow-sm drop-shadow-gray-600/80'>
                    <h2 className='text-lg md:text-4xl'>Bachelor's Thesis: Hydroponic Plant Care RobotUniversity Project</h2>
                    <ul className='text-sm md:text-base list-disc px-6'>
                        <li>Developed a mechanical structure capable of carrying up to 50 kg, including 5L of water and 5L of bio-solution.
                        </li>
                        <li>
                            Integrated motor and transmission system using 12V DC gear motors, timing pulleys, and encoders for precise movement.
                        </li>
                        <li>
                            Implemented temperature-based automatic mist spraying system using sensors and solenoid valves.
                        </li>
                        <li>
                            Arduino microcontrollers/ ESP32-CAM to control actuators, monitor sensors, manage system logic and capture plant and send to Google Drive
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default IntroSection