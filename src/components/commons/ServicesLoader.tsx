import ServicesLoaderCard from "./ServicesLoaderCard";

const ServicesLoader: React.FC = () => {
  const samples = [
    "sample",
    "sample",
    "sample",
    "sample",
    "sample",
    "sample",
    "sample",
    "sample",
    "sample",
    "sample",
    "sample",
    "sample",
  ];
  return (
    <section className="w-full my-5 px-4 pb-9 pt-5 md:px-6 md:pb-10 md:pt-6 lg:px-7 lg:pb-12 3xl:px-8 ">
      <div className="-z-10 grid grid-cols-1 lsm:grid-cols-2  md:grid-cols-2 smd:grid-cols-3 gap-5 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-6 4xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {samples.map((sample: string, index: number) => {
          return <ServicesLoaderCard key={index} />;
        })}
      </div>
    </section>
  );
};

export default ServicesLoader;
