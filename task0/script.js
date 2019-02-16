class Users {

  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.users = {
      results: [{
        name: 'Jan',
        surname: 'Kowalski'
      }]
    };

    this.init();
  }

  init() {
    // this.fetchUsers()
    this.render();
  }

  fetchUsers() {

    // this.render();
  }

  render() {
    const ul = document.createElement('ul');
    this.users.results.forEach(elem => {
      const li = document.createElement('li');
      li.innerHTML = `${elem.name} ${elem.surname}`;
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
