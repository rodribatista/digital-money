import {AppLinks} from "@/components/app/AppLinks";
import {AccountsInfo} from "@/components/app/profile/AccountsInfo";

const ProfilePage = () => {
  return (
    <>
      <h1 className={"self-start text-black font-semibold"}>Mi perfil</h1>
      <AppLinks linkTo={"/app/cards"}>Gestionar los medios de pago</AppLinks>
      <AccountsInfo/>
    </>
  );
};

export default ProfilePage;
