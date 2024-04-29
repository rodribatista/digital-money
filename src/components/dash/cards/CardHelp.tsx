type CardHelpProps = {
  message: string,
};

export const CardHelp = ({message}: CardHelpProps) => {
  return (
    <span className={"text-gray-700 text-sm text-end"}>{message}</span>
  );
};
