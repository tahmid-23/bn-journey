import { PropsWithChildren, TdHTMLAttributes } from "react";

export default function TdCell({
  className,
  children,
  ...props
}: PropsWithChildren<TdHTMLAttributes<HTMLTableCellElement>>) {
  return (
    <td {...props} className={`p-2 border-0 border-solid ${className}`}>
      {children}
    </td>
  );
}
