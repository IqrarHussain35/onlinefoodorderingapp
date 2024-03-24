import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const mainUrl = "https://api.allorigins.win/raw?url=";
export const imgUrl =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const succeccsAlert = (message) => {
  alert(message);
  // return toast.info(`${message}`, {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  // });
};
