import toast from "react-hot-toast";

export const successNotify = (message) => {
  toast.success(message, {
    position: "top-right",
  });
};

export const errorNotify = (message) => {
  toast.error(message, {
    position: "top-right",
  });
};
