function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: 'acme', color: 'gold' }}>
        {"NAGADARAWAXACAVABA'S WEBSITE"}
      </h1>
      <h2
        style={{
          fontFamily: 'acme',
          color: 'gold',
          marginBottom: '10rem'
        }}
      >
        CLICK THE BUTTONS BELOW
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '3rem',
          background: 'white',
          color: 'gold'
        }}
        onClick={() => alert('Hello there')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '3rem',
          background: 'white',
          color: 'gold',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;
