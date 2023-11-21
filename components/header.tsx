const header = () => {
  return (
    <>
      <div className="bg-red-900 text-white flex flex-row justify-around">
        <div>Logo</div>
        <div>Language Switcher</div>
        <nav>
          <ul className="flex flex-col lg:flex-row">
            <li>
              <a href="/">Index</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/events">Events</a>
            </li>
            <li>
              <a href="/contacts">Contatcs</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default header;
