import Link from "next/link";

import {ProfileForm} from "@/components/dash/profile/ProfileForm";

const ProfileEditPage = () => {
  return (
    <>
      <div className={"flex flex-row gap-2 text-black self-start"}>
        <Link href={"/dashboard/profile"} className={"border-b"}>Tu perfil</Link>
        <span>/</span>
        <h1 className={"font-semibold"}>Editar perfil</h1>
      </div>
      <ProfileForm/>
    </>
  );
};

export default ProfileEditPage;
