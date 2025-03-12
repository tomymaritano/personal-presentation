// components/NavigationBar.tsx
function NavigationBar() {
    return (
        <div className="bg-gray-800 text-white w-full">
            <div className="flex justify-center space-x-4 p-4">
                <a href="/portfolio" className="hover:underline">Portfolio</a>
                <a href="/dolargaucho" className="hover:underline">DolarGaucho</a>
                <a href="/blog" className="hover:underline">Blog</a>
                {/* Añade más enlaces según necesites */}
            </div>
        </div>
    );
}

export default NavigationBar;