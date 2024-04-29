"use client";
import {skipToken} from "@reduxjs/toolkit/query";

import {useGetUserDataQuery} from "@/api/userApi";
import {useAppSelector} from "@/lib/hooks";

import {ProfileFormButton} from "@/components/dash/profile/ProfileForm";

import {UserInformation, UserDataType} from "@/types/UserType";
import {ProfileItem} from "@/components/dash/profile/ProfileItem";

export const ProfileInfo = () => {

  const {accessToken, accountInfo} = useAppSelector(state => state.auth);
  const {data, isLoading} = useGetUserDataQuery(accessToken ? {access_token: accessToken, user_id: accountInfo.user_id}: skipToken);

  return (
    <section className={"w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15"}>
      <div className={"flex flex-row justify-between pb-2 border-b border-gray-500"}>
        <h2 className={"text-xl font-semibold"}>Tus datos</h2>
        <ProfileFormButton/>
      </div>
      <ul className={"flex flex-col gap-2"}>
        {Object.keys(data).slice(1).map((key) => {
          return <ProfileItem key={key}
                              name={UserDataType[key as keyof UserInformation]}
                              value={data[key as keyof UserInformation]}/>;
        })}
        <ProfileItem name={UserDataType.password} value={"********"}/>
      </ul>
      <span className={"text-sm text-gray-700"}>* Para editar tus datos haz click en el lapiz.</span>
    </section>
  );
};
