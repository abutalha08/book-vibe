import React, { useContext } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { LibraryContext } from "../../Context/BookContext";

const PagesToRead = () => {
  const { readList } = useContext(LibraryContext);

  const data = readList.map((book) => ({
    name:
      book.bookName.length > 12
        ? book.bookName.slice(0, 12) + "..."
        : book.bookName,
    fullName: book.bookName,
    pages: book.totalPages,
    color: "#00D3BB",
  }));

  return (
    <div className="w-11/12 mx-auto mt-20 flex justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl p-6 shadow-md">

        {/* Title */}
        <h2 className="text-center text-xl font-semibold mb-6 text-gray-700">
          Pages to Read Overview
        </h2>

        {/* EMPTY STATE */}
        {readList.length === 0 ? (
          <div className="h-100 flex flex-col items-center justify-center text-center">
            <p className="text-gray-500 text-lg font-medium">
              No books in your read list 📭
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Add books to see your reading progress chart
            </p>
          </div>
        ) : (
          /* CHART */
          <div className="h-100">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} barCategoryGap="30%">

                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />

                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 12 }}
                  interval={0}
                  angle={-15}
                  textAnchor="end"
                />

                <YAxis />

                {/* Tooltip FIXED */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#111827",
                    borderRadius: "10px",
                    border: "none",
                  }}
                  labelStyle={{
                    color: "#fff",
                    fontWeight: "600",
                  }}
                  itemStyle={{
                    color: "#ffffff",
                  }}
                  formatter={(value, name) => {
                    if (name === "pages") {
                      return [`${value}`, "Pages"];
                    }
                    return [value, name];
                  }}
                  labelFormatter={(label) => {
                    const item = data.find((d) => d.name === label);
                    return item?.fullName || label;
                  }}
                />

                <Bar dataKey="pages" radius={[8, 8, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={index % 2 === 0 ? "#00D3BB" : "#10B981"}
                    />
                  ))}
                </Bar>

              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

      </div>
    </div>
  );
};

export default PagesToRead;