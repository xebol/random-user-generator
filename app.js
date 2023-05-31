const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    };
  },
  methods: {
    async getUser() {
      const res = await
        fetch('https://randomuser.me/api');
      const { results } = await res.json();


      //how to use axios and promise instead of async and await and fetch
      // function getUser() {
      //   axios.get('https://randomuser.me/api')
      //     .then((response) => {
      //       const { results } = response.data;
      //       // Process the data as needed
      //       console.log(results);
      //     })
      //     .catch((error) => {
      //       // Handle error
      //       console.error(error);
      //     });
      // }

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    }
  }
});

app.mount('#app');