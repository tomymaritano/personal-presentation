// components/BoxComponent.tsx

import Image from 'next/image';
import Link from 'next/link';
import { IconType } from 'react-icons'; // Importing IconType for correct typing

interface BoxProps {
    href: string;
    iconSrc: string; // If you're using SVGs directly consider using React component types
    iconAlt: string;
    title: string;
    description: string;
    externalIconSrc: string;
    externalIconAlt: string;
}

const BoxComponent: React.FC<BoxProps> = ({
    href,
    iconSrc,
    iconAlt,
    title,
    description,
    externalIconSrc,
    externalIconAlt // Make sure to include these in the destructuring
}) => {
    return (
        <Link href={href} passHref>
            <a className="flex items-center my-2 justify-between bg-neutral-900 hover:bg-teal-600 text-white p-4 rounded-lg w-full cursor-pointer backdrop-filter backdrop-blur-2xl transition duration-300 ease-in-out">
                <div className="flex items-center">
                    <Image src={iconSrc} alt={iconAlt} width={40} height={40} />
                    <div className="ml-4">
                        <p className="font-semibold">{title}</p>
                        <p className="text-gray-300 text-sm">{description}</p>
                    </div>
                </div>
                <Image src={externalIconSrc} alt={externalIconAlt} width={24} height={24} />
            </a>
        </Link>
    );
};

export default BoxComponent;