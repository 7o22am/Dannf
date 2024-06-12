///////////////// register  //////////////////////////////////

{

  const clickForReg = document.getElementById('clickForReg');
  const clickForCom = document.getElementById('clickForCom');

  const section1 = document.getElementById('section1');
  const section2 = document.getElementById('section2');
  const section3 = document.getElementById('section3');
  const section4 = document.getElementById('section4');
  const section5 = document.getElementById('section5');
  const section6 = document.getElementById('section6');
  const section7 = document.getElementById('section7');
  const section8 = document.getElementById('section8');
  const section9 = document.getElementById('section9');
  const section10 = document.getElementById('section10');





  clickForReg.addEventListener('click', () => {
    clickForReg.style.display = 'none';
    clickForCom.style.display = 'block';
    section1.style.display = 'block';
  });


  function next1() {

    const email = document.getElementById('email').value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex.test(email)) {
      const data = {
        email: email,
      };
      fetch(`http://localhost:3000/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // additional headers if needed
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }


          section1.style.display = 'none';
          section2.style.display = 'block';
          return response.json();


        })
        .then(data => {
          console.log(data);
          // Process the retrieved data
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occurred during the request
        });
    }


  }

  function next2() {

    const code = document.getElementById('code').value;
    if (code) {
      const data = {
        email: document.getElementById('email').value,
        code: document.getElementById('code').value,
      };
      fetch(`http://localhost:3000/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // additional headers if needed
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }


          section2.style.display = 'none';
          section3.style.display = 'block';
          return response.json();


        })
        .then(data => {
          console.log(data);
          // Process the retrieved data
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occurred during the request
        });
    }


  }
  function next3() {
    let number = document.getElementById('number').value;
    let phoneRegex = /^\d{9,11}$/;


    if (phoneRegex.test(number)) {
      section3.style.display = 'none';
      section4.style.display = 'block';
    }
    else {
      console.log("not vailed")
    }


  }
  function next4() {
    let NatID = document.getElementById('NatID').value;
    let NatIDRegex = /^\d{10}$/;

    let userName = document.getElementById('userName').value;
    let words = userName.split(" ");

    if (NatIDRegex.test(NatID) && words.length == 3) {
      section4.style.display = 'none';
      section5.style.display = 'block';
    }
    else {
      console.log("not vailed")
    }


  }
  function next5() {
    let NumOfbike = document.getElementById('NumOfbike').value;
    let numberRegex = /^[0-9]+$/
    console.log(NumOfbike);
    if (numberRegex.test(NumOfbike)) {

      section5.style.display = 'none';
      section6.style.display = 'block';
    }
    else {
      console.log("not vailed")
    }


  }
  function next6() {
    let askQ = document.getElementById('askQ').checked;


    section6.style.display = 'none';
    section7.style.display = 'block';



  }

  function next7() {
    let okgo = document.getElementById('okgo').checked;


    if (okgo) {
      section7.style.display = 'none';
      section8.style.display = 'block';
    }
    else {
      console.log("check pls")
    }

  }
  function next8() {

    let polc = document.getElementById('polc').checked;

    if (polc) {
      section8.style.display = 'none';
      section9.style.display = 'block';
    }
    else {
      console.log("check pls")
    }
  }
  function next9() {


    let iokChecked = document.getElementById('iokChecked').checked;

    if (iokChecked) {
      const data = {
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        userName: document.getElementById('userName').value,
        NatID: document.getElementById('NatID').value,
        NumOfbike: document.getElementById('NumOfbike').value,
        password: "0000",
        askQ: document.getElementById('askQ').checked,
      };
      console.log(data);
      fetch(`http://localhost:3000/registration-complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // additional headers if needed
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          section9.style.display = 'none';
          section10.style.display = 'block';
          return response.json();


        })
        .then(data => {
          console.log(data);
          // Process the retrieved data
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle any errors that occurred during the request
        });

    }


  }

  function backmail() {

    clickForReg.style.display = 'none';
    clickForCom.style.display = 'block';
    section1.style.display = 'block';
    section2.style.display = 'none';
  }






}

/////////////////////// dash //////////////////
{

  const main = document.getElementById("main");
  const users = document.getElementById("users");
  const bikes = document.getElementById("bikes");
  const setting = document.getElementById("setting");


  const Mmain = document.getElementById("mMain");
  const Musers = document.getElementById("mUsers");
  const Mbikes = document.getElementById("mBikes");
  const Msetting = document.getElementById("mSetting");




  Mmain.addEventListener('click', () => {
    main.style.display = 'block';
    users.style.display = 'none';
    bikes.style.display = 'none';
    setting.style.display = 'none';

  });


  Musers.addEventListener('click', () => {
    users.style.display = 'block';
    main.style.display = 'none';
    bikes.style.display = 'none';
    setting.style.display = 'none';

  });


  Mbikes.addEventListener('click', () => {
    bikes.style.display = 'block';
    main.style.display = 'none';
    users.style.display = 'none';
    setting.style.display = 'none';

  });


  Msetting.addEventListener('click', () => {
    setting.style.display = 'block';
    main.style.display = 'none';
    users.style.display = 'none';
    bikes.style.display = 'none';

  });

}

/////////////////////nav///////////
{
  function goControls() {

    const login = document.getElementById('login');
    const cont = document.getElementById('controls');
    const reg = document.getElementById('register');
    const profile = document.getElementById('profile');
    cont.style.display = 'block';
    reg.style.display = 'none';
    login.style.display = 'none';
    profile.style.display = 'none';
  };

  function goRegist() {
    const login = document.getElementById('login');
    const reg = document.getElementById('register');
    const cont = document.getElementById('controls');
    const profile = document.getElementById('profile');
    reg.style.display = 'block';
    cont.style.display = 'none';
    login.style.display = 'none'
    profile.style.display = 'none';
  }

  function gologin() {

    const login = document.getElementById('login');
    const reg = document.getElementById('register');
    const cont = document.getElementById('controls');
    const profile = document.getElementById('profile');
    login.style.display = 'block';
    cont.style.display = 'none';
    reg.style.display = 'none';
    profile.style.display = 'none';

  }
}


///////////////////// login //////////////

{
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = document.getElementById('Femail').value;
    const passwordInput = document.getElementById('password').value;
    let emailRegex2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegex2.test(emailInput)) {
      const data = {
        email: document.getElementById('Femail').value,
        code: document.getElementById('password').value,
      };
      fetch(`http://localhost:3000/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // additional headers if needed
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('  try agine  ');
          }
          const Clogin = document.getElementById('login');
          Clogin.style.display = 'none';
          const profile = document.getElementById('profile');
          profile.style.display = 'block';


          return response.json();


        })
        .then(data => {

          const UserName = document.getElementById('UserName');
          const getNumOfbike = document.getElementById('getNumOfbike');
          UserName.innerText = data.message.userData[0].userName;
          getNumOfbike.innerText = data.message.userData[0].NumOfbike;

          console.log(data);
          console.log("data = " + data.message.userData[0].email);
          // Process the retrieved data
        })
        .catch(error => {
          alert(error);
          console.error('Error:', error);
          // Handle any errors that occurred during the request
        });
    }



    console.log('email:', emailInput);
    console.log('Password:', passwordInput);


  });




}

/////////////////////// controler //////////////////

{
  (function users() {
    fetch(`http://localhost:3000/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('  try agine  ');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const NumOfUsers = document.getElementById('NumOfUsers');
        const NumOfUsersbuy = document.getElementById('NumOfUsersbuy');
        const NumOfbikes = document.getElementById('NumOfbikes');
        const TotalPrice = document.getElementById('TotalPrice');
        const GetUserInfo = document.getElementById('GetUserInfo');
        const GetUserInfo2 = document.getElementById('GetUserInfo2');

        let ans = 0;
        let nans = 0;
        let cartone = '';
        let cartone2 = '';
        for (let user of data) {
          if (user.NumOfbike != undefined && user.NumOfbike > 0)
            ans += user.NumOfbike;
          else
            nans++;
        }
        for (let user of data) {

          cartone += `<tr>
                                                    <th scope="row">${user.userName}</th>
                                                    <td>مكتمل</td>
                                                    <td>${user.NumOfbike}</td>
                                                    <td>${user.createdAt}</td>
                                                </tr>` ;

          cartone2 += `<tr>
                                                <th scope="row">${user.userName}</th>
                                                <td>${user.email}</td>
                                                <td>${user.vercode}</td>
                                                 <td class="deleteUser">حذف مستخدم</td>
                                            </tr>` ;

        }
        nans = data.length - nans;
        NumOfUsers.innerHTML = data.length
        NumOfUsersbuy.innerHTML = nans
        NumOfbikes.innerHTML = ans;
        TotalPrice.innerText = ans * 5950;
        GetUserInfo.innerHTML = cartone;
        GetUserInfo2.innerHTML = cartone2;


      })
      .catch(error => {
        alert(error);
        console.error('Error:', error);

      });
  })();
}

