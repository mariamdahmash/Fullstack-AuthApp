function Home() {

const username = localStorage.getItem("username");

return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome,<span className="text-cyan-800 ps-1">{username}</span> 
        </h1>

        <p className="text-gray-500">
          You are successfully logged in 
        </p>
      </div>
    </div>
  );
}
export default Home