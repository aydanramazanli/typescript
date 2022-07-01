import { FunctionComponent } from "react";

interface ILoading {
  loading: boolean;
  children: React.ReactNode;
}

const Loading: FunctionComponent<ILoading> = (props:ILoading) => {
    const {loading} = props;

    if(loading){
        return <div className="font-semibold text-center ">Loading....</div>
    }
  return <div>
    {props.children}
  </div>;
};

export default Loading;
