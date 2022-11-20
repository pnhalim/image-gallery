import githubIcon from '../img/github-icon.jpg';
import linkedinIcon from '../img/linkedin-icon.png'

const Footer = () => {
  return (
    <div className="font-sans text-center mt-10 text-slate-600">
      <div>
        Developed by Patrick Halim, Nov 2022
      </div>
      <ul className='flex justify-center pt-2'>
        <li className='px-2'>
          <a href="https://github.com/pnhalim/image-gallery" target='_blank' rel="noreferrer">
            <img className='w-6 justify-center opacity-70 hover:opacity-100 transition-opacity' src={githubIcon} alt="GitHub"></img>
          </a>
        </li>
        <li className='px-2'>
          <a href="https://www.linkedin.com/in/patrick-halim/" target='_blank' rel="noreferrer">
            <img className='w-6 justify-center opacity-70 hover:opacity-100 transition-opacity' src={linkedinIcon} alt="GitHub"></img>
          </a>
        </li>
      </ul>
      <div className='bg-primary h-6 mt-5'></div>
    </div>
  );
}
 
export default Footer;