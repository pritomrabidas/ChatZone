import PeopleItem from "./PeopleItem";

const People = () => {
  return (
    <div className="bg-slate-100 xl:w-3/4 lg:w-3/4 w-full h-screen absolute top-16 xl:left-1/4 lg:left-1/4 left-0">
      <PeopleItem/>
      <PeopleItem/>
      <PeopleItem/>
    </div>
  );
};

export default People;
