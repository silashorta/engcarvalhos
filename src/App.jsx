import './App.css';
import bg from '../public/bg.png';
import logo from '../public/logo.png';

import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";



function App() {
  return (
    <div
      className="flex flex-col justify-center items-center h-full min-h-screen bg-amber-700 py-10 px-4 md:px-8 lg:px-64"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
    >
      <img src={logo} alt=""  className='bg-white rounded-full'/>
      <h1 className="text-white text-3xl font-semibold text-center mb-6">Informações de Contato</h1>

      <div className="bg-opacity-20 bg-amber-100 p-6 rounded-lg shadow-slate-400 w-full">
        <div className="flex items-center gap-4 mb-4 p-4 rounded-xl bg-white">
          <span className="font-semibold text-amber-700"><FaInstagram /></span>
          <a href="https://www.instagram.com/engcarvalhos/" target="_blank" className="text-gray-700 hover:underline"> @engcarvalhos</a>
        </div>

        <div className="flex items-center gap-4 mb-4 p-4 rounded-xl bg-white">
          <span className="font-semibold text-amber-700"><FaWhatsapp /></span>
          <a href="https://wa.me/+5521983240342" target="_blank" className="text-gray-700 hover:underline"> (21) 96724-0342</a>
        </div>

        <div className="flex items-center gap-4 mb-4 p-4 rounded-xl bg-white">
          <span className="font-semibold text-amber-700"><MdOutlineMailOutline /> </span>
          <a href="mailto:carvalhoeng.cons@gmail.com" className="text-gray-700 hover:underline">carvalhoeng.cons@gmail.com</a>
        </div>

        <div className="mb-4 p-4 rounded-xl bg-white">
          <div className='flex items-center gap-4 mb-4'>
            <p className="font-semibold text-amber-700"><FaMapMarkerAlt /></p>
            <p className='text-gray-700'>Rua Uranos, 1400, Loja A - Olaria/RJ</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.754545326688!2d-43.269250225818034!3d-22.84856893579081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997bf21de98509%3A0x423c009a7e95a68d!2sR.%20Uranos%2C%201400%20-%20Manguinhos%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021070-031!5e0!3m2!1spt-BR!2sbr!4v1718162026434!5m2!1spt-BR!2sbr" width="100%" height="70%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;
