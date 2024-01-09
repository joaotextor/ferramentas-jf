const GoBackNavigation = () => {
  return (
    <>
      <h3
        className="text-2xl text-secondary-light font-bold underline mb-4 cursor-pointer"
        onClick={() => {
          history.back();
        }}
      >
        {"<< Voltar"}
      </h3>
    </>
  );
};

export default GoBackNavigation;
