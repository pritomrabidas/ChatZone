import PeopleItem from "./PeopleItem";

const People = () => {
  return (
    <div className="bg-slate-100 w-3/4 h-screen absolute top-16 left-1/4">
      <PeopleItem/>
      <PeopleItem/>
      <PeopleItem/>
    </div>
  );
};

export default People;
