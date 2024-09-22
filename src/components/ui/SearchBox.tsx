"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBox = ({ placeholder }: { placeholder: string }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams);

    if (e.target.value) {
      e.target.value.length > 1 && params.set("searchTerm", e.target.value);
    } else {
      params.delete("searchTerm");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500);
  return (
    <div className="flex">
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleSearch}
        className="w-full max-w-[350px] bg-slate-100 border outline-none focus:ring-1 ring-slate-400 p-2 rounded"
      />
    </div>
  );
};

export default SearchBox;
