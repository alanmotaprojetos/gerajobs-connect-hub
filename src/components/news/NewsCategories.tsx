
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface NewsCategoriesProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const NewsCategories = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: NewsCategoriesProps) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex space-x-2 p-2">
        <Button
          variant={selectedCategory === "Todas" ? "default" : "outline"}
          onClick={() => onSelectCategory("Todas")}
          className="rounded-full"
        >
          Todas
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => onSelectCategory(category)}
            className={cn(
              "rounded-full",
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : ""
            )}
          >
            {category}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};

export default NewsCategories;
