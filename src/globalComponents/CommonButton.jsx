import { Button } from "antd";

const CommonButton = ({
  className,
  onClick,
  loading = false,
  disabled = false,
  children,
}) => {
  return (
    <Button
      loading={loading}
      disabled={disabled || loading}
      onClick={onClick}
      className={className}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
