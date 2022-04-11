const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between px-5">
      <button>Homepage</button>
      <div className="flex flex-col justify-center content-center w-120 h-full space-y-10">
        <button>Summary</button>
        <button>Transfer</button>
        <button>Personal</button>
        <button>Summary</button>
      </div>
      <button>Settings</button>
    </div>
  );
};

export default Sidebar;
