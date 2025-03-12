interface BioProps {
    text: string;
  }
  
  export default function Bio({ text }: BioProps) {
    return <p className="text-center font-light text-sm text-gray-100 mt-2">{text}</p>;
  }