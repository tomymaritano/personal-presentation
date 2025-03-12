interface LinkButtonProps {
    href: string;
    label: string;
  }
  
  export default function LinkButton({ href, label }: LinkButtonProps) {
    return (
      <a href={href} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center mt-4">
        {label}
      </a>
    );
  }