"use client";
import { Pagination, PaginationProps } from "antd";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const PaginationData = ({
  quickJumper = false,
  showSizeChanger = false,
  meta,
}: {
  quickJumper?: boolean;
  showSizeChanger?: boolean;
  meta: { page: number; limit: number; total: number };
}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);

  const onChange: PaginationProps["onChange"] = (pageNumber, pageSize) => {
    params.set("limit", pageSize.toString());
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <Pagination
      showQuickJumper={quickJumper}
      defaultCurrent={1}
      total={meta.total}
      showSizeChanger={showSizeChanger}
      onChange={onChange}
    />
  );
};

export default PaginationData;
