import herobg from '../assets/Home/bg1.jpg'
import '../styles/Navbar.css'

const HeroSection = () => {
    return (
        <div className="relative h-screen w-full">
            {/* <div className="absolute inset-0 bg-cover bg-center backdrop-blur-xl brightness-90"style={{ backgroundImage: `url(${herobg})` }}></div> */}
            <div className="relative h-full flex flex-col items-center justify-center gap-4 drop-shadow-sm drop-shadow-black/70">
                <h1 className="text-white text-6xl font-bold text-center z-10">Hello</h1>
                <div className='flex'>
                    <h1 className="text-white text-4xl font-light text-center z-10">I Am <span className='font-medium'>Software Developer.</span></h1>
                </div>
            </div>
        </div>
    );
}

export default HeroSection