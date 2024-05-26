import ChatItem from "./ChatItem";

const Chat = () => {
  return (
    <div className="bg-slate-100 w-3/4 h-screen absolute top-16 left-1/4">
     <div className="flex">
        <div className=" w-2/5 overflow-y-scroll">
        <ChatItem/>
        </div>
        <div className="w-3/5 bg-fuchsia-200">
        </div>
     </div>
    </div>
  )
}

export default Chat