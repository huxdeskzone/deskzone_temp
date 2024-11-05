import styles from "./Negotiation.module.css";

const Negotation: React.FC = () => {
  return (
    <main
      className={`flex w-full flex-grow flex-col lg:flex-grow-0 lg:bg-light lg:px-12 npm lg:dark:bg-dark-250`}
    >
      <div
        className="flex min-h-full flex-grow flex-col"
        style={{ opacity: 1, transform: "none" }}
      >
        <div>
          <h1 className="text-3xl text-cyan-50">Negotiation Page</h1>
        </div>
      </div>
    </main>
  );
};

export default Negotation;
