import Image from 'next/image';

interface HeaderProps {
  src: string;
  alt: string;
}

export default function Header({ src, alt }: HeaderProps) {
  return (
    <div className="text-center">
      <Image className="mx-auto h-32 w-32 rounded-full mb-4" src={'/tomy.jpeg'} alt={alt} width={96} height={96} />
      <h1 className="text-3xl font-bold">Tomy Maritano</h1>
    </div>
  );
}