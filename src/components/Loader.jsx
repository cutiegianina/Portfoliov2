import { Html } from "@react-three/drei";
import ReactLoader from "react-js-loader";

const Loader = () => {
  const color = '#ded8d7';
  return (
    <Html>
        <div className={'absolute left-0 right-0 z-10 flex items-center justify-center'}>
            <div className={"item"}>
                <ReactLoader type="bubble-loop" bgColor={color} color={color} size={100} />
            </div>
        </div>
    </Html>
  );
};

export default Loader;
