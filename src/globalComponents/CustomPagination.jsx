import { Pagination } from "antd";

const CustomPagination = ({ current, total, onChange, pageSize }) => {
  return (
    <>
      <div className="flex justify-between mt-10">
        <Pagination
          current={current}
          total={total}
          onChange={onChange}
          pageSize={pageSize}
          showSizeChanger={false}
          itemRender={(page, type, originalElement) => {
            if (type === "page") {
              return (
                <button
                  className={`w-8 h-8 text-sm rounded border-none outline-none ${
                    current === page
                      ? "bg-orange text-white"
                      : "text-orange hover:bg-white02"
                  }`}
                >
                  {page}
                </button>
              );
            }
            return originalElement;
          }}
        />
      </div>
    </>
  );
};

export default CustomPagination;
