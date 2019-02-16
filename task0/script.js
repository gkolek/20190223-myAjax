class Users {

  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.users = {
      results: []
    };

    this.init();
  }

  init() {
    this.fetchUsers()
    this.render();
  }

  fetchUsers() {
    fetch('https://randomuser.me/api/')
    .then(response => {
      console.log('Hello mam odpowiedź');
      console.log(response)
      return response.json();
    })
    .then(data => {
      console.log(data);
      this.users = data;
      this.render();
    });
  }

  render() {
    const ul = document.createElement('ul');
    this.users.results.forEach(elem => {
      const li = document.createElement('li');
      li.innerHTML = `${elem.name.first} ${elem.name.last}`;
      ul.appendChild(li);
    });
    this.container.appendChild(ul);
  }
  // JSX
  // <ul>
  //   {this.users.results.map(elem) => (
  //     <li>{elem.name} {ele.surname}</li>
  //   )}
  // </ul>
}

const list = new Users('root');
