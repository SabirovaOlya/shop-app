import Swal, { SweetAlertIcon } from "sweetalert2";

type AlertType = SweetAlertIcon;

export function alert(message: string, type: AlertType) {
    Swal.fire({
        title: message,
        icon: type,
        confirmButtonText: 'Ok',
        timer: 2000
    });
}


export const deleteWarning = (onDelete: (id: string) => void, id: string): void => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            onDelete(id);
            Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
            });
        }
    });
};