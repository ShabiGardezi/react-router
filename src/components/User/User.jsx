import { useParams } from "react-router-dom";
const User = () => {
  const { userId } = useParams();
  return (
    <div className="bg-gray-500 p-4 width-full text-center text-3xl">
      User: {userId}
    </div>
  );
};

export default User;
