import Swal from "sweetalert2";

export const authSwal = Swal.mixin({
  customClass: {
    popup: "p-10 bg-black",
    title: "text-white font-2xl font-bold",
    htmlContainer: "text-white font-lg font-regular",
    actions: "w-full flex justify-center",
    confirmButton: 'w-full py-2 bg-yellow-500 text-black font-semibold rounded',
    cancelButton: 'w-full py-2 bg-red-500 text-black font-semibold rounded'
  },
  buttonsStyling: false
});
