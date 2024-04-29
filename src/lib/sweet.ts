import Swal from "sweetalert2";

export const authSwal = Swal.mixin({
  customClass: {
    popup: "p-10 bg-black",
    title: "text-white font-2xl font-semibold",
    htmlContainer: "text-white font-lg font-regular",
    actions: "w-full flex flex-row gap-5 justify-center",
    confirmButton: 'flex grow py-2 bg-yellow-500 text-black font-semibold rounded',
    cancelButton: 'flex grow py-2 bg-gray-500 text-black font-semibold rounded'
  },
  buttonsStyling: false
});

export const appToast = Swal.mixin({
  toast: true,
  position: "top",
  showConfirmButton: false,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  },
});
