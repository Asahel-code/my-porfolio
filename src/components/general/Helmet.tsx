import React, {useEffect, ReactNode, Children } from "react";

type HelmetProps = {
    // look here 👇
    title?: string;
    children?: ReactNode;
  };

const Helmet = ({title, children}: HelmetProps) => {

    document.title = `Asahel | ${title}`  

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
 
  return (
    <div>
        {children}
    </div>
  )
}

export default Helmet