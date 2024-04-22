import {AppLinks} from "@/components/app/AppLinks";
import {AccountsInfo} from "@/components/app/deposit/AccountsInfo";
import {ProfileInfo} from "@/components/app/profile/ProfileInfo";

const ProfilePage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Tu perfil</h1>
      <ProfileInfo/>
      <AppLinks linkTo={"/app/cards"}>Gestionar los medios de pago</AppLinks>
      <AccountsInfo/>
    </>
  );
};

export default ProfilePage;
