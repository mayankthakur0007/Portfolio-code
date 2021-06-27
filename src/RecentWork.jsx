import "./RecentWork.css";
import Grow from "@material-ui/core/Grow";
import { useEffect, useState } from "react";

const RecentWork = () => {
  const [show, setIsChecked] = useState(false);
  useEffect(() => {
    setIsChecked(true);
  }, []);

  return (
     <Grow in={show}>
     <div className="recentContainer">
     <div>
       <h1>Recent</h1>
          <div >
            markup:via CSS You have more control over how the image is
            displayed bumarkup:via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup:markup:via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup:markup:via CSS You have more control over how the image is
            displayed but now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup:t now you have to consider classes and how you would
            apply them to your HTML content. With React, we can simplify this by
            abstracting the implementation details into a reusable component.
            Ideally we want to use our component as if it was regular HTML
            markup:
          </div>
        </div>
     </div>
   </Grow>
  );
};

export default RecentWork;
