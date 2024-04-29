import {AppLinks} from "@/components/dash/AppLinks";
import {AccountsInfo} from "@/components/dash/deposit/AccountsInfo";
import {ProfileInfo} from "@/components/dash/profile/ProfileInfo";

const ProfilePage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Tu perfil</h1>
      <ProfileInfo/>
      <AppLinks linkTo={"/dashboard/cards"}>Gestionar los medios de pago</AppLinks>
      <AccountsInfo/>
    </>
  );
};

export default ProfilePage;
