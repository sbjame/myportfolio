const serviceInfo = [
    {
        title: "Micro Controller",
        desc: "I develop firmware for microcontrollers such as Arduino, ESP32, and STM32 to control electronic systems, automation projects, and IoT devices."
    },
    {
        title: "PCB Design",
        desc: "I design custom printed circuit boards using industry-standard tools like Altium Designer, KiCad, and EasyEDA. I also prepare production-ready Gerber files."
    },
    {
        title: "RESTful API Development",
        desc: "I build secure and scalable RESTful APIs to connect web/mobile applications or IoT devices using technologies like Node.js, Express, or Python Flask."
    },
    {
        title: "Web Development",
        desc: "I create responsive and user-friendly websites using modern technologies such as React.js, Next.js, Tailwind CSS, and Node.js."
    },
    {
        title: "Product Research & Development",
        desc: "I help turn ideas into working prototypes through system design, component selection, prototyping, and real-world testing."
    },
    {
        title: "Mechanical Design",
        desc: "I design mechanical parts and enclosures using CAD software like SolidWorks and Fusion 360, ready for 3D printing or manufacturing."
    },
]

const Services = () => {
    return (
        <div className="w-[84vw] text-white space-y-8 md:space-y-16">
            <div className="service-card flex justify-center text-6xl font-medium py-8 drop-shadow-2xl drop-shadow-black/80">
                <div className="drop-shadow-sm drop-shadow-gray-600/80">
                    <h1 className="text-4xl md:text-6xl">Services</h1>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 drop-shadow-2xl drop-shadow-black/80">
                {serviceInfo.map((service, index) => (
                    <div key={index} className="service-card flex-auto py-8 border px-4 text-center rounded-xl text-2xl lg:text-4xl font-light flex flex-col drop-shadow-2xl drop-shadow-black/40">
                        <h2 className="drop-shadow-sm drop-shadow-gray-600/80">
                            {service.title}
                        </h2>
                        <span className="text-sm lg:text-2xl p-2 drop-shadow-sm drop-shadow-gray-600/80">{service.desc}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services