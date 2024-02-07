import Link from "next/link";

export const Pagination = ({
    searchParams,
    page,
  }: {
    searchParams: any;
    page: number;
  }) => {
    return (
      <Link href={`/?tag=${searchParams.tag}&page=${page + 1}`}>
        <div
          className={`prose w-10 h-10 text-center dark:prose-invert ${
            parseInt(searchParams.page) === page + 1
              ? "bg-gray-500 text-black"
              : "hover:bg-gray-500"
          } rounded-md flex items-center justify-center`}
        >
          {page + 1}
        </div>
      </Link>
    );
  };