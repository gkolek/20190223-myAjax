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


    const users = await fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => data);

    console.log('users', users);
    this.users = users;
    this.render();

    // const newUsers = await fetch('https://randomuser.me/api/?nat=gb')
    //   .then(response => response.json())
    //   .then(data => data);

    // this.users = newUsers;
    // this.render();
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
        <hr />
      `;
      row.appendChild(div);
    });
    this.container.appendChild(row);


    const myPromise = new Promise((resolve, reject) => {
      if (znaleziono) {
        resolve('Hurra znaleziono');
      } else {
        reject('Oh no, nie ma ;(');
      }
    });

    // .....

    myPromise() // -> obiekt typu promise
    .then(response => {
      console.log('Mam response: ', response);
    })
    .catch(error => {
      console.log('Mam reject');
    });




  }
  // JSX
  // <ul>
  //   {this.users.results.map(elem) => (
  //     <li>{elem.name} {ele.surname}</li>
  //   )}
  // </ul>
}

const list = new Users('root');
