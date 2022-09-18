const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const namee = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-texts');

setTimeout(getData, 3000)


function getData() {
  header.innerHTML =
    '<img src="https://images.pexels.com/photos/7767974/pexels-photo-7767974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>';
  title.innerHTML = 'Lorem ipsum dolor sit amet.';
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, recusandae.';
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  namee.innerHTML = 'John Doe';
  date.innerHTML = 'Dec 20, 2022';

  animated_bgs.forEach((bg) => {
    bg.classList.remove('animated-bg');
  });
  animated_bg_texts.forEach((bg) => {
    bg.classList.remove('animated-bg-text');
  });
}
