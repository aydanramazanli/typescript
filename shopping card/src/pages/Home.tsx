import "../App.css";

function Home() {
  return (
    <div className="App">
      <div className="content">
        <h1 className="text">Sneakers</h1>
        <div className="hero">
          <p className="text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
            maiores enim corrupti, dolorem commodi atque ab quod omnis
            voluptatum quaerat quibusdam aliquid unde.
          </p>
          <div className="banner">
            <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="sneakers" />
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
