class Users {

  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.users = {};

    this.init();
  }

  init() {
    this.fetchUsers()
  }

  fetchUsers() {
    fetch('https://randomuser.me/api/')
    .then(response => {
      console.log('Hello mam odpowiedź');
      console.log(response)
      return response.json();
    })
    .then(data => {
      this.users = data;
      console.log(this.users);
      this.render();
    });
  }

  render() {
    const ul = document.createElement('ul');
    if (!this.users.results) {
      return;
    }
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
