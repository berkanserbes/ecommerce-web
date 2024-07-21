const Home = () => {
  const handleClick = () => {
    alert("Be patient! The app is still under development.");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button onClick={handleClick} className="rounded-sm border-2 px-10 py-5 ">
        Click me
      </button>
    </div>
  );
};

export default Home;
