import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure({
  fontSize: "1.5rem",
  position: "bottom-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
});

//toast messages for success, warning, error and info.
export function CustomSuccessMessage({ message }) {
  toast.success(message);
}
export function CustomWarningMessage({ message }) {
  toast.warning(message);
}
export function CustomErrorMessage({ message }) {
  toast.error(message);
}
export function CustomInfoMessage({ message }) {
  toast.info(message);
}
