import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export const LogoContainer = () => {
  return (
    <Link to="/" className="flex items-center gap-2 group">
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-200">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          AI Mock Interview
        </span>
        <span className="text-xs text-gray-500 font-medium">
          Powered by AI
        </span>
      </div>
    </Link>
  );
};
