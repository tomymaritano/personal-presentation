// components/BoxComponent.tsx

import Image from 'next/image';
import Link from 'next/link';

interface BoxProps {
    href: string;
    iconSrc: string;
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
}) => {
    return (
        <Link href={href} passHref>
            <div className="flex items-center my-2 justify-between bg-neutral-900 hover:bg-teal-600 text-white p-4 rounded-lg w-full cursor-pointer backdrop-filter backdrop-blur-2xl transition duration-300 ease-in-out transform hover:scale-105">
                <div className="flex items-center">
                    <Image src={iconSrc} alt={iconAlt} width={40} height={40} />
                    <div className="ml-4">
                        <p className="font-semibold">{title}</p>
                        <p className="text-gray-300 text-sm">{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BoxComponent;