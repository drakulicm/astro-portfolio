import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#242424] px-20 py-9 mt-10 grid grid-cols-1 place-items-center gap-y-2">
      <h2 className="font-bold text-4xl leading-[54px] text-center">Marko</h2>
      <p className="text-center whitespace-nowrap text-xs leading-4">
        © Copyright {new Date().getFullYear()}. Marko Drakulic
      </p>
      <div className="flex flex-row items-center gap-2 mt-3">
        <a
          href="https://github.com/Citrusthecrazy"
          rel="noreferrer"
          target="_blank">
          <img src={github} alt="github" className="w-4" />
        </a>
        <a
          href="https://www.linkedin.com/in/marko-drakulic-028092206/"
          rel="noreferrer"
          target="_blank">
          <img src={linkedin} alt="linkedIn" className="w-4" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
