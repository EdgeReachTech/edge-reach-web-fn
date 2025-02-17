import Dashboard from "../components/GeneralDashboard";
import message from "../components/message";
const MessagePage = () => {
  return (
    <div>
      <Dashboard MainComponent={message} />
    </div>
  );
};

export default MessagePage;
