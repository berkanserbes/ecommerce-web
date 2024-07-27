import Header from "@components/Header/Header";

const Home = () => {
  const handleClick = () => {
    alert("Be patient! The app is still under development.");
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <button
          onClick={handleClick}
          className="rounded-sm border-2 px-10 py-5 "
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default Home;
