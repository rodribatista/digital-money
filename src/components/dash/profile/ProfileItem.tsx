type ProfileItemProps = {
  name: string,
  value: any,
};

export const ProfileItem = ({name, value}: ProfileItemProps) => {
  return (
    <li className={"w-full pb-2 flex flex-col border-b border-gray-500 md:flex-row md:gap-5"}>
      <h3 className={"w-1/4 font-semibold"}>{name}</h3>
      <span>{value}</span>
    </li>
  );
};
