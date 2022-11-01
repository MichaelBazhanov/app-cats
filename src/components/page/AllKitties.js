import CatsContainer from "../CatsContainer";

const AllKitties = () => {
  return (
    <section>
      <h1 className="sr-only">All Kitties</h1>
      <div className="max-w-screen-me mx-auto px-6 mt-12">
        <CatsContainer />
      </div>
    </section>
  );
};

export default AllKitties;
