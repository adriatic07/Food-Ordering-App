const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-2 m-2">Contact Us page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black p-2 m-2"
        ></input>
        <input
          type="text"
          placeholder="message"
          className="border border-black p-2 m-2"
        ></input>
        <button className="border border-black p-2 m-2 bg-gray-300 rounded-lg">
          Submit
        </button>
      </form>
      <h2 className="m-2 text-sm">
        Please reach out to fooddelivery420@hotmail.com for your queries &
        concerns 😁
      </h2>
    </div>
  );
};

export default Contact;
