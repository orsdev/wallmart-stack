import { CircleDashed } from "lucide-react";

const Loading = () => {
  return (
    <div className="backdrop-blur-sm bg-white/30 absolute top-0 left-0 right-0 bottom-0 w-full min-h-screen h-full flex items-center justify-center">
      <CircleDashed className="animate-spin fill-walmart" />
    </div>
  );
};

export default Loading;
