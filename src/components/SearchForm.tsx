import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchForm = () => {
  return (
    <div className="w-full max-w-[260px] md:max-w-[300px]">
      <form
        action="/search"
        method="get"
        className="flex w-full items-center p-1"
      >
        <Input
          name="query"
          type="text"
          placeholder="Search..."
          required
          className="rounded-r-none bg-gray-600 border-none text-white h-8 placeholder:text-gray-300 focus:bg-white focus:text-black"
        />

        <Button
          type="submit"
          className="rounded-l-none font-medium h-8 text-[15px] hover:bg-orange-700"
          variant="brandColor"
        >
          Go !
        </Button>
      </form>
    </div>
  );
};

export default SearchForm;
