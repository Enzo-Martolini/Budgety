import { Plus, PieChart, List } from "lucide-react";

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
              <List className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <PieChart className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <Plus className="h-6 w-6" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
