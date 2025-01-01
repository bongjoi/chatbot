import { Button, ButtonProps } from "../ui/button";

export default function Submit({ children, ...restProps }: ButtonProps) {
  return (
    <Button type="submit" {...restProps}>
      {children}
    </Button>
  );
}
