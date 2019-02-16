class Users {

  constructor(containerId) {
    this.container = document.getElementById(containerId);

    this.users = {};
    this.myPromiseObject = null;
    this.init();
  }

  init() {
    this.fetchUsers();
    this.myPromise();
  }

  myPromise() {

    const getMyOrder = (menu, order) => {
      new Promise((resolve, reject) => {
        if (menu.includes(order)) {
          resolve('Hurra! Jest w menu');
        } else {
          reject('Oh no! Nie ma w menu ;(');
        }
      });
    }

    getMyOrder(['sandwich', 'soup', 'drink'], 'schabowy')
    .then(resolveText => {
      console.log(resolveText);
    })
    .catch(rejectText => {
      console.log(rejectText);
    });

  }

  async fetchUsers() {

    // const fetch = (url) => {
    //   return new Promise((resolve, reject) => {
    //      // GET url

    //     const response = new Promise((resolve, reject) => {
    //       resolve(); // rsponse.json()

    //       reject();
    //     });

    //      resolve(response);

    //      // fail
    //      reject('Nie udało się ;(');
    //   })
    // }


    const users = await fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => data);

    console.log('users', users);
    this.users = users;
    this.render();

    const newUsers = await fetch('https://randomuser.me/api/?nat=gb')
      .then(response => response.json())
      .then(data => data);

    this.users = newUsers;
    this.render();
  }



  render() {
    this.container.innerHTML = '';
    const row = document.createElement('div');
    if (!this.users.results) {
      return;
    }
    this.users.results.forEach(elem => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${elem.name.first} ${elem.name.last}</h2>
        <img src=${elem.picture.thumbnail} > mobile: ${elem.cell}
        <hr />
      `;
      row.appendChild(div);
    });
    this.container.appendChild(row);
  }
  // JSX
  // <ul>
  //   {this.users.results.map(elem) => (
  //     <li>{elem.name} {ele.surname}</li>
  //   )}
  // </ul>
}

const list = new Users('root');
