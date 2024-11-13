import { Home, Search, User } from "lucide-react";

export default function Component() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border">
      <div className="max-w-md mx-auto px-4">
        <ul className="flex justify-around items-center h-16">
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Home className="h-6 w-6" />
              <span className="text-xs mt-1">Accueil</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Search className="h-6 w-6" />
              <span className="text-xs mt-1">Recherche</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">Profil</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
