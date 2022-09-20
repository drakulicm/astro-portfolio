import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-[#242424] px-20 py-9 mt-10">
      <div className="container mx-auto grid grid-cols-1 place-items-center gap-y-2 lg:grid-cols-3">
        <a
          href="/"
          className="font-bold text-4xl leading-[54px] text-center lg:place-self-start">
          Marko
        </a>
        <p className="text-center whitespace-nowrap text-xs leading-4">
          © Copyright {new Date().getFullYear()}. Marko Drakulic
        </p>
        <div className="flex flex-row items-center gap-2 mt-3  lg:place-self-end">
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
      </div>
    </footer>
  );
};

export default Footer;
