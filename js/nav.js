"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage(storyList.stories);
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
  $(".nav-left").hide();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();

  $(".nav-left").show();

  $loginForm.hide();
  $signupForm.hide();
  $navUserProfile.text(`${currentUser.username}`).show();
}

/** Show the submit story form when the user clicks on "submit" in the navbar */

function navSubmitClick(evt) {
  console.debug("navSubmitClick", evt);
  $submitStoryForm.show();
}

$navSubmit.on("click", navSubmitClick);

/** Show favorites page when clicking on "favorites" */

function navFavoritesClick(evt) {
  console.debug("navFavoritesClick", evt);
  hidePageComponents();
  $navFavorites.show();
  $submitStoryForm.hide();
}

$navFavorites.on("click", navFavoritesClick);
