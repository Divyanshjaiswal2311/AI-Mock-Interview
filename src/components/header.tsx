import { cn } from "@/lib/utils";
import { useAuth } from "@clerk/clerk-react";
import { Container } from "./container";
import { LogoContainer } from "./logo-container";
import { NavigationRoutes } from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ProfileContainer } from "./profile-container";
import { ToggleContainer } from "./toggle-container";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const { userId } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-200">
      <Container>
        <div className="flex items-center justify-between gap-4 w-full py-4">
          {/* Logo section */}
          <LogoContainer />

          {/* Navigation section */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavigationRoutes />
            {userId && (
              <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                  cn(
                    "text-base font-medium text-neutral-600 hover:text-neutral-900 transition-colors duration-200",
                    isActive && "text-blue-600 font-semibold"
                  )
                }
              >
                Dashboard
              </NavLink>
            )}
          </nav>

          <div className="flex items-center gap-4">
            {/* CTA Button for non-authenticated users */}
            {!userId && (
              <div className="hidden md:flex items-center gap-3">
                <NavLink to="/signin">
                  <Button variant="ghost" className="text-neutral-600 hover:text-neutral-900">
                    Sign In
                  </Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </NavLink>
              </div>
            )}

            {/* Profile section */}
            <ProfileContainer />

            {/* Mobile toggle section */}
            <ToggleContainer />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
