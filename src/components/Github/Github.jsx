import { useLoaderData } from "react-router-dom";
const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/ShabiGardezi")
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //     console.log(data);
  //   }, []);
  //   console.log(data);

  return (
    <div className="bg-gray-500 p-4 width-full text-center text-3xl">
      Github : {data.followers}
      <img src={data.avatar_url} alt="Git Profile Picture" />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/ShabiGardezi");
  return response.json();
};
