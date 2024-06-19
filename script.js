//---------------------------  Generating Stories --------------------//

let storyContainer = document.querySelector(".stories");
function createStories() {
  async function call() {
    let response = await fetch("https://picsum.photos/200/300");


    let img = response.url;
    let story = `
    <div class="story">
     <img src="${img}" alt="">
   </div>`;
    storyContainer.innerHTML += story;
    
  }
  call();
}

createStories();
createStories();
createStories();
createStories();
createStories();
createStories();
createStories();
createStories();
createStories();
createStories();
createStories();
createStories();
createStories();
createStories();




// ------------------------- Generating Suggested Users ------------//

let suggestedContainer = document.querySelector(".right-section-footer");
function createSuggestedUser(username) {
  async function call() {
    let response = await fetch("https://picsum.photos/200/300");

    let img = response.url;
    let story = `
      <div class="right-section-head">
      <div class="right-section-head-logo">
      <img
        src="${img}"
        alt=""
      />
    </div>
    <div class="right-section-head-paras">
      <div class="right-section-head-para1">
        ${username}
      </div>
      <div class="right-section-head-para2">
        Suggested for you
      </div>
    </div>
    <div class="switch">
     <a href="#">follow</a>

    </div>
    </div>
      
      
      `;
    suggestedContainer.innerHTML += story;
  }
  call();
}

createSuggestedUser("Ashwani_Sahu27");
createSuggestedUser("Sonu_Sahu200");
createSuggestedUser("Shreya_Ghosal72");
createSuggestedUser("Rahul_Kaiwart55");
createSuggestedUser("Surbhi_Sahu12");

// ------------------------- Generating User Posts ---------------//

let posts = document.querySelector(".middle-section");
function createUserPosts(username, likes, comment) {
  async function call() {
    let response = await fetch("https://picsum.photos/200/300");
    let img = response.url;
    let story = `
      <div class="posts">
      <div class="user-info">
        <div class="user-info-one">
          <div class="user-info-logo">
            <img src="${img}" alt="" />
          </div>
          <div class="user-info-one-paras">
            <div class="user-info-one-para1">
              ${username} <span><img src="svgs/blueTic.svg" alt=""></span><span>.5h</span>
            </div>
            <div class="user-info-one-para2">
              original audio
            </div>
          </div>
          <div class="dotdot">
            <img src="svgs/DotDot.svg" alt="">

          </div>
        </div>
        <div class="user-post">
        <img src="${img}" />
        </div>
        <div class="user-post-data">
           <div class="user-post-data-one">

            <div class="user-post-data-one1">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-regular fa-comment"></i>
              <i class="fa-solid fa-share"></i>
            </div>
            <i class="fa-regular fa-bookmark"></i>
           </div>
           <div class="user-post-data-two">
             ${likes} likes
           </div>
           <div class="user-post-data-three">
            ${username} <span><img src="svgs/blueTic.svg" alt=""></span> &nbsp;
           Hello! this is ${username}
           </div>
           <div class="user-post-data-four">
            <a href="#">View all ${comment} comments</a>
           </div>
           <div class="user-post-data-five">
             <input type="text" placeholder="Add a comment...">
           </div>
            
        </div>
      </div>
    </div>
        `;
    posts.innerHTML += story;

    let userNameLogo = document.querySelector(".hover-dailogBox");
    let dialogBox = document.querySelector(".dailog-box");

    userNameLogo.addEventListener("mouseenter", (e) => {

      console.log(e.clientX, e.clientY)
      dialogBox.style.left = "320px"
      dialogBox.style.top = e.clientY + 20 + "px"

      dialogBox.style.display = "block";
    });
    userNameLogo.addEventListener("mouseleave", () => {
      dialogBox.style.display = "none";
    });
  }
  call();
}
createUserPosts("Ashwani_Kumar22", 100023, 300);
createUserPosts("Uday_kaushik34", 500023, 900);
createUserPosts("Priyanka_Sharma22", 13000, 550);
createUserPosts("Rahul_yadav90", 1003, 10);
createUserPosts("Surbhi_Kaushik", 100023, 300);

let goToProfile = document.querySelector(".right-section-head-para1");

goToProfile.addEventListener("click", () => {
  window.location.href = "profile.html";
});




