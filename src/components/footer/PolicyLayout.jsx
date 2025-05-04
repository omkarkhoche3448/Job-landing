
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PolicyLayout = ({ title, children }) => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col text-white">
            <main className="flex-grow">
                <div className="container max-w-5xl mx-auto px-4 py-8 sm:px-6 sm:py-12 mt-16">
                    <Link 
                        to="/" 
                        className="inline-flex items-center text-sm font-medium text-lime-400 hover:text-lime-600 mb-6"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">{title}</h1>
                    
                    <div className={`prose prose-blue max-w-none text-white ${location.pathname === '/contact' ? 'w-full' : 'max-w-4xl mx-auto'}`}>
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default PolicyLayout;