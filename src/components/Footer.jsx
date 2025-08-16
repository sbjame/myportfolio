import '../styles/Footer.css'

const Footer = ({ onHomeClick, onAboutClick, onServiceClick, onContactClick }) => {
    return (
        <div className='glass-footer drop-shadow-2xl drop-shadow-black/80 text-white'>
            <div className="p-8 gap-4 flex items-center justify-center drop-shadow-sm drop-shadow-gray-600/80">
                <button onClick={onHomeClick} className='btn font-medium text-lg text-white cursor-none drop-shadow-sm drop-shadow-gray-600/80'>Home</button>
                <button onClick={onAboutClick} className='btn font-medium text-lg text-white cursor-none drop-shadow-sm drop-shadow-gray-600/80'>About</button>
                <button onClick={onServiceClick} className='btn font-medium text-lg text-white cursor-none drop-shadow-sm drop-shadow-gray-600/80'>Services</button>
                <button onClick={onContactClick} className='btn font-medium text-lg text-white cursor-none drop-shadow-sm drop-shadow-gray-600/80'>Contact</button>
            </div>
            <div className='flex justify-center py-2 bg-white/40 text-gray-600 font-light text-md'>
                <div>Surawut Boonying - (Jame)</div>
            </div>
        </div>
    );
}

export default Footer