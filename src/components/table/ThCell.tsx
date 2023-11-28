import { PropsWithChildren, ThHTMLAttributes } from "react";

export default function ThCell({
  className,
  children,
  ...props
}: PropsWithChildren<ThHTMLAttributes<HTMLTableCellElement>>) {
  return (
    <th
      {...props}
      className={`p-2 border-0 border-b border-solid text-left ${className}`}
    >
      {children}
    </th>
  );
}
