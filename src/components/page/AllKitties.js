import CatsContainer from "../../containers/cats/CatsContainer";

const AllKitties = () => {
  return (
    <>
      <h1 className="sr-only">All Kitties</h1>
      <section>
        <div className="max-w-screen-me mx-auto px-6 mt-29">
          <CatsContainer />
        </div>
      </section>
    </>
  );
};

export default AllKitties;
