import { useEffect, useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { classNames } from "../../utils/classNames";

export const ScrollToTop = () => {
  const [isVisable, setIsVisable] = useState(false);

  const toggleVisibility = () => {
    // Window object method, tells us if user has scrolled down, if so then we handle state change
    if (window.pageYOffset > 300) {
      setIsVisable(true);
    } else {
      setIsVisable(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", //this dictates the scroll behavior
    });
  };
  useEffect(() => {
    //window is looking for user to scroll then
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-2 right-2">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisable ? "opacity-100" : "opacity-0",
          "inline-flex items-center p-3 rounded-full border border-white shadow-sm text-white bg-black transition-opacity m-6"
        )}
      >
        <BiArrowFromBottom className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
