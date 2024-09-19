class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: start;
          background-color: #8b0000;
          font-family: "Courier";
          color: #fff;
        }
        
        h1 {
          font-size: 30px;
          margin: 0 10px 0 20px;
        }
        
        h2 {
          margin: 0px;
          font-size: 25px;
        }
        
        ul {
          padding: 0;
        }
        
        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }

        li {
          display: inline
        }
        
        div {
          background-color: gold;
          color: black;
          width: 500px;
          border: 5px solid gold;
          padding: 4px;
          margin: auto;
          margin-right: 0;
          font-family: Courier;
          text-align: center;
        }
      </style>
      <header>
        <nav>
        <h1><a href="/site">SMCS Coding Club</a>
          </h1>
          <ul>
            <li><a href="https://discord.gg/Yg8yutjpP6">Discord</a></li>
            <li><a href="https://github.com/SMCS-Coding-Club">Github</a></li>
          </ul>
         <div>
            <h2>Next Meeting</h2>
            Thursday September 19, 12:15, Computer Lab
         </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
