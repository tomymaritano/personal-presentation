import Header from '../../components/Header';
import Bio from '../../components/Bio';
import BoxComponent from '../../components/Box';
import linksData from '../../data/linksData';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 bg-gradient-to-b from-neutral-900 to-black px-0 sm:p-2">
      <div className='w-full max-w-2xl xl:bg-neutral-950 sm:bg-transparent p-4 sm:p-8 rounded-xl'>
        <Header src="/profile-pic.jpg" alt="Tomy Maritano" />
        <Bio text="As a seasoned Product Development Lead, I specialize in steering comprehensive product strategies from conception through execution. My focus is on innovative problem-solving and optimizing user engagement to meet complex business and technical challenges effectively. My expertise lies in orchestrating multidisciplinary teams and integrating user-centric solutions that drive competitive advantage and sustainable growth." />
        <div className='pt-4 mt-4 space-y-2'>
          {linksData.map((link, index) => (
            <BoxComponent key={index} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}